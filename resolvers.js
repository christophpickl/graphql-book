const authors = [{
    id: 1,
    name: "Christoph"
},{
    id: 2,
    name: "John"
}];

const books = [{
    id: 3,
    title: "GraphQL API Design",
    authors: [authors[0]]
},{
    id: 4,
    title: "ReSTful Services",
    authors: [authors[0], authors[1]]
}];

const resolvers = {
    Query: {
        books: () => {
            return books;
        },
    },
};

module.exports = resolvers;
