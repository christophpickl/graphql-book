let {makeExecutableSchema,addMockFunctionsToSchema} = require('graphql-tools');

let typeDefs = `
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

let schema = makeExecutableSchema({ typeDefs });
addMockFunctionsToSchema({ schema }); 
module.exports = schema;
