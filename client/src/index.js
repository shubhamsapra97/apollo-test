import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import client from "./apollo/apollo";
import { ApolloProvider } from 'react-apollo';

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
