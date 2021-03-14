import gql from 'graphql-tag';

export const GET_LIBRARY_BOOKS = gql`
    query getLibraryBooksQuery{
        getLibraryBooks {
            _id
            name {
                firstName
                lastName
            }
            copies
        }
    }
`;
