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
    type Status {
        message: String!
    }
    type UserField {
        _id: String
        message: String!
    }
    type Query {
        getLibraryBooks: [Books]
    }
    type Mutation {
        addUser(
            email: String!
        ): UserField
        addBook(
            name: String!
            copies: Int
        ): Status
        borrowBook(
            id: String!
            userId: String!
        ): Status
        returnBook(
            id: String!
            userId: String!
        ): Status
    }
`;

module.exports = typeDefs;