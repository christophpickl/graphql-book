const authors = [{
    id: 1,
    name: "Christoph"
}, {
    id: 2,
    name: "John"
}];

const books = [{
    id: 3,
    title: "GraphQL API Design",
    authors: [authors[0]]
}, {
    id: 4,
    title: "ReSTful Services",
    authors: [authors[0], authors[1]]
}];

// noinspection JSUnusedGlobalSymbols
const resolvers = {
    Query: {
        books: () => {
            return books;
        },
        book: (root, args) => {
            let result = null;
            books.forEach(function (b) {
                if (b.title === args.title) result = b;
            });
            return result;
        },
    },
};

module.exports = resolvers;
