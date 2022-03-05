"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const mongoose_1 = __importDefault(require("mongoose"));
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
mongoose_1.default.connect('mongodb://localhost:27017/blog')
    .then(() => console.log("Database connected"))
    .catch((error) => console.log("Databased failed: ", error));
// Graph
server
    .listen()
    .then(({ url }) => console.log(`Server ready at ${url}!`))
    .catch(err => console.log(`Server Failed: ${err}`));
//# sourceMappingURL=app.js.map