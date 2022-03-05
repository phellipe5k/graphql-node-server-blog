export {};
require("dotenv").config();
import mongoose from 'mongoose';

const { ApolloServer } = require("apollo-server");
// Tipagem dos schemas
const typeDefs = require("./graphql/typeDefs");
// Queries and mutation creation
const resolvers = require("./graphql/resolvers");

const server = new ApolloServer({ typeDefs, resolvers });

const db = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    name: process.env.DB_NAME,
};

mongoose.connect('mongodb://localhost:27017/blog')
   .then(() => console.log("Database connected"))
   .catch((error) => console.log("Databased failed: ", error));
// Graph

server
.listen()
.then(({ url }: { url: string }) => console.log(`Server ready at ${url}!`))
.catch(err => console.log(`Server Failed: ${err}`));