import { PostModel } from '../models/Post';
import { AuthorModel } from '../models/Authors';
import { performaticConsult } from '../util';
const generateUniqueId = require('generate-unique-id');

const resolver = {
    Query: {
        async authors(_, __,___, info) {
            return await AuthorModel.find({}, performaticConsult(info));
        },
        async author(_, { id }, __, info) {
            return await AuthorModel.findOne({ id }, performaticConsult(info))
        },
        async posts(_, __,___, info) {
            return await PostModel.find({}, performaticConsult(info))
        },
        async post(_, { id }, __, info) {
            return await PostModel.findById(id, performaticConsult(info))
        }
    },
    Mutation: {
        async createAuthor(_, { author }) {
            const { followers, ...rest } = author;
            const newAuthor = new AuthorModel({id: generateUniqueId(), ...rest});
            return await newAuthor.save();
        },
        async updateAuthor(_, { id, author }) {
            return await AuthorModel.findByIdAndUpdate(id, author, {
                new: true,
                useFindAndModify: false,
             })
        },
        async deleteAuthor(_, { id }) {
            return await AuthorModel.findByIdAndRemove(id, {
                useFindAndModify: false
            })
        },
        async createPost(_, { author_id, post }) {
            console.log({author_id, ...post})
            const postQ = await PostModel.create({ id: generateUniqueId(), author_id, ...post });
            await AuthorModel.findOneAndUpdate({ id: author_id }, {'$push': { Posts: postQ }});
            return postQ;
        },
        async updatePost(_, { id, post }) {
            return await PostModel.findByIdAndUpdate(id, post, {
                new: true,
                useFindAndModify: false,
             })
        },
        async deletePost(_, { id }) {
            return await AuthorModel.findByIdAndRemove(id, {
                useFindAndModify: false
            })
        }
    }
    
}

module.exports = resolver;