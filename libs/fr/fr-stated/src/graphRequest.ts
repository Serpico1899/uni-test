import { GraphQLClient } from 'graphql-request';

const endpoint = 'http://localhost:3051/graphql';

export const graphqlClient = new GraphQLClient(endpoint);
