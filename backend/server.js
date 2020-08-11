require("dotenv").config();
const { GraphQLServer } = require("graphql-yoga");
const schema = require("./schema");
const { prisma } = require("../generate/prisma-client");
const { getUserId } = require("./utils");

const server = new GraphQLServer({
    schema,
    context: (request) => ({...request, prisma, getUserId }),
});

const PORT = process.env.PORT || 8000

server.start(
    {
        port: PORT,
    },
    () => console.log(`server is running on ${PORT}`)
)