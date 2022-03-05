export {};
const { gql } = require('apollo-server');

const mutation = gql`
    type Mutation {
        createAuthor(author: AuthorInput): Author
        updateAuthor(id: String, author: AuthorInput): Author
        deleteAuthor(id: String): Author
        createPost(author_id: String post: PostInput): Post
        updatePost(id: String, author: PostInput): Post
        deletePost(id: String): Post
    }

    input AuthorInput {
        name: String,
        biography: String,
        profileImgUrl: String
    }

    input PostInput {
        title: String,
        content_html: String
    }

`

module.exports = mutation;