import gql from 'graphql-tag';

export const authGql = {
  destroySession: gql`
    mutation DestroySession {
      destroySession
    }`,
  createGoogleSession: gql`
    mutation createGoogleSession($id: String!, $access_token: String!){
      createGoogleSession(id: $id, access_token: $access_token) {
        accountId
        token
        error
      }
    }
  `,
  registration: gql`
    mutation registration($form: RegistrationForm){
      registration(form: $form) {
        accountId
        token
        error
      }
    }
  `,
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
      displayName
      email
    }
  }
`;
