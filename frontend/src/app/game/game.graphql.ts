import gql from 'graphql-tag';

export const getGame = gql`
  query getGame($id: Int!) {
    game(id: $id) {
      id
      name
    }
  }
`;

export const getGameLatestTopics = gql`
  query getGameLatestTopics($gameId: Int!) {
    latestTopics(gameId: $gameId) {
      id
      title
      text
      author {
        id
        name
      }
      game {
        id
        name
      }
    }
  }
`;
