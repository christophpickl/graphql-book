const {makeExecutableSchema} = require('graphql-tools');
const resolvers = require("./resolvers.js");

const typeDefs = `
type Book {
	id: ID!
	title: String 
	authors: [Author]
}
type Author { 
	id: ID! 
	name: String 
}
type Query { 
	books: [Book]
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });
module.exports = schema;
