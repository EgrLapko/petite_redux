import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

// import { ApolloProvider } from 'react-apollo';
// import { createHttpLink } from 'apollo-link-http';
// import { InMemoryCache } from 'apollo-cache-inmemory';
// import { ApolloClient, gql } from 'apollo-boost'

import { store, persistor } from './redux/store';

import App from './App';
  
//   const cache = new InMemoryCache();
  
//   const client = new ApolloClient({
//     uri: '/graphql',
//     cache
//   })

//   client
//   .query({
//     query: gql`
//       {
//         rates(currency: "USD") {
//           currency
//         }
//       }
//     `
//   })
//   .then(result => console.log(result));

ReactDOM.render(
    // <ApolloProvider client={client}>
        <Provider store={store}>
            <BrowserRouter>
                <PersistGate persistor={persistor}>
                    <App />
                </PersistGate>   
            </BrowserRouter>
        </Provider>
    // </ApolloProvider>
    , document.getElementById('root'));
