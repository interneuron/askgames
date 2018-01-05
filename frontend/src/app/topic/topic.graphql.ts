import gql from 'graphql-tag';

export const getLatestTopics = gql`
  query getLatestTopics {
    latestTopics {
      id
      title
      text
      game {
        id
        name
      }
    }
  }
`;
