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

export const getTopic = gql`
  query getTopic($id: Int!) {
    topic(id: $id) {
      id
      title
      text
      game {
        id
        name
      }
      author {
        id
        name
      }
      comments {
        id
        text
        author {
          id
          name
        }        
      }
      answers {
        id
        text
        author {
          id
          name
        }
        comments {
          id
          text
          author {
            id
            name
          }
        }
      }
    }
  }
`;
