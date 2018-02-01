import gql from 'graphql-tag';

export const getAccountByName = gql`
  query getAccountByName($name: String!) {
    accountByName(name: $name) {
      id
      name
      picture
      about
      topics {
        id
        title
        text
        game {
          id
          name
        }
      }
    }
  }
`;
