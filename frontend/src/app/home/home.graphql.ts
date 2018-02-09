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
  userPageAnswers: gql`
    ${topicGqlFragments.topicPanel}
    fragment UserPageAnswers on Answers {
      entries {
        id
        text
        topic {
          ...TopicPanel
        }
      }
      nextPageToken
    }
  `,
};

export const homeGql = {
  getUserPage: gql`
    ${homeGqlFragments.userPageAccount}
    query getUserPage($id: Int!) {
      account(id: $id) {
        ...UserPageAccount
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
  getUserAnswers: gql`
    ${homeGqlFragments.userPageAnswers}
    query getUserAnswers($accountId: Int!, $nextPageToken: Int) {
      answers(accountId: $accountId, nextPageToken: $nextPageToken) {
        ...UserPageAnswers
      }
    }
  `,
};
