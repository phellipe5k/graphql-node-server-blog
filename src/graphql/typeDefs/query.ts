export {};
const { gql } = require('apollo-server');

const query = gql`
    type Query {
        authors: [Author],
        author(id: ID!): Author,
        posts: [Post],
        post(id: ID!): Post,
    }
`

module.exports = query;