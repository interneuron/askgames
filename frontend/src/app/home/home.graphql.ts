import gql from 'graphql-tag';
import { topicGqlFragments } from '../topic/topic.graphql';

export const homeGqlFragments = {
  userPageAccount: gql`
    fragment UserPageAccount on Account {
      id
      displayName
      picture
      about
    }
  `,
  userPageTopics: gql`
    ${topicGqlFragments.topicPanel}
    fragment UserPageTopics on Topics {
      entries {
        ...TopicPanel
      }
      nextPageToken
    }
  `,
};

export const homeGql = {
  getUserPage: gql`
    ${homeGqlFragments.userPageAccount}
    ${homeGqlFragments.userPageTopics}
    query getUserPage($id: Int!) {
      account(id: $id) {
        ...UserPageAccount
        topics {
          ...UserPageTopics
        }
      }
    }
  `,
  getUserTopics: gql`
    ${homeGqlFragments.userPageTopics}
    query getUserTopics($accountId: Int!, $nextPageToken: Int) {
      topics(accountId: $accountId, nextPageToken: $nextPageToken) {
        ...UserPageTopics
      }
    }
  `,
};

