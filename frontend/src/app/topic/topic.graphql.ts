import gql from 'graphql-tag';

export const topicGql = {
  createTopic: gql`
    mutation createTopic($form: CreateTopicForm){
      createTopic(form: $form) {
        success
        topic {
          id
          title
          game {
            name
          }
        }
        error
      }
    }
  `,
};

export const topicGqlFragments = {
  topicPanel: gql`
    fragment TopicPanel on Topic {
      id
      title
      text
      game {
        id
        name
      }
    }
  `,
};

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
        displayName
      }
      comments {
        id
        text
        author {
          id
          displayName
        }
      }
      answers {
        id
        text
        author {
          id
          displayName
        }
        comments {
          id
          text
          author {
            id
            displayName
          }
        }
      }
    }
  }
`;
