import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import {InMemoryCache} from "apollo-cache-inmemory";

// const cache = new InMemoryCache({
//   typePolicies: {
//     getLibraryBooks: {
//       keyFields: ["copies"],
//     },
//   },
// });

const cache = new InMemoryCache({
  typePolicies: {
    getLibraryBooks: {
      fields: {
        copies: {
          read(copies) {
            console.log("here!!", copies);
            return copies + 1;
          }
        }
      },
    },
  },
});

const client = new ApolloClient({
  link: createHttpLink({ uri: 'http://localhost:4000/graphql' }),
  cache,
});

export default client;