import gql from 'graphql-tag';

export const authQueries = {
  destroySession: gql`
    mutation DestroySession {
      destroySession
    }`,
};

export const createSession = gql`
  mutation createSession($email: String!, $password: String!){
    createSession(email: $email, password: $password) {
      accountId
      token
      error
    }
  }
`;

export const getAuthAccount = gql`
  query getAuthAccount {
    authAccount {
      id
      name
      email
    }
  }
`;
