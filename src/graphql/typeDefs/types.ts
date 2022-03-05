const { gql } = require("apollo-server");

const types = gql`
    type Author {
        id: ID!
        name: String,
        profileImgUrl: String,
        biography: String,
        followers: Int,
        posts: [Post]
    }

    type Post {
        id: ID!
        author_id: ID!,
        title: String,
        content_html: String,
        likes: Int
    }
`

module.exports = types;