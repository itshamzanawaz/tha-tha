

import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://ap-south-1.cdn.hygraph.com/content/clmqi49d519xl01t3gvwxesld/master',
  cache: new InMemoryCache(),
});

export default client;


