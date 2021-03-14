const typeDefs = require("./schema");

const resolvers = {
    Query: {
        getLibraryBooks: (parent, args) => [{
            _id: 123,
            name: {
                firstName: "book",
                lastName: "name",
            },
            copies: 2,
        }],
    },
};

const apolloData = {typeDefs, resolvers};

module.exports = {apolloData};