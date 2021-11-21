import Layout from '../components/Layout/Layout'
import '../styles/globals.css'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";

export const getApolloClient = () => {
  
  return new ApolloClient({
    uri: "http://localhost:8024/graphql/",
    cache: new InMemoryCache(),
    fetch
  });
};

function MyApp({ Component, pageProps }) {
const client = new ApolloClient({
  uri: "http://localhost:8024/graphql/",
  cache: new InMemoryCache(),
});

  return <ApolloProvider client={client}>
     <Layout>
     <Component {...pageProps} />
  </Layout>
  </ApolloProvider>
 
  
 
}

export default MyApp
