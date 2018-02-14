var {makeExecutableSchema,addMockFunctionsToSchema} = require('graphql-tools'); 
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
var schema = makeExecutableSchema({ typeDefs }); 
addMockFunctionsToSchema({ schema }); 
module.exports = schema;