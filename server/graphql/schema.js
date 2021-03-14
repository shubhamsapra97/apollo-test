const { gql } = require('apollo-server');

const typeDefs = gql`
    type Name {
        firstName: String
        lastName: String
    }
    type Books {
        _id: String
        name: Name
        copies: Int
    }
    type Query {
        getLibraryBooks: [Books]
    }
    type Mutation {}
`;

module.exports = typeDefs;
