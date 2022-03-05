import { PostModel } from '../models/Post';
import { AuthorModel } from '../models/Authors';

const resolver = {
    Query: {
        authors() {
            return AuthorModel.find();
        },
        author(_, { id }) {
            return AuthorModel.findById(id)
        },
        posts() {
            return PostModel.find()
        },
        post(_, { id }) {
            return PostModel.findById(id)
        }
    },
    Mutation: {
        createAuthor(_, { author }) {
            const newAuthor = new AuthorModel(author);
            return newAuthor.save();
        },
        updateAuthor(_, { id, author }) {
            return AuthorModel.findByIdAndUpdate(id, author, {
                new: true,
                useFindAndModify: false,
             })
        },
        deleteAuthor(_, { id }) {
            return AuthorModel.findByIdAndRemove(id, {
                useFindAndModify: false
            })
        },
        createPost(_, { author_id, post }) {
            const newAuthor = new PostModel({ author_id, ...post });
            return newAuthor.save();
        },
        updatePost(_, { id, post }) {
            return PostModel.findByIdAndUpdate(id, post, {
                new: true,
                useFindAndModify: false,
             })
        },
        deletePost(_, { id }) {
            return AuthorModel.findByIdAndRemove(id, {
                useFindAndModify: false
            })
        }
    }
    
}

module.exports = resolver;