/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface getLatestTopicsQuery {
  latestTopics:  Array< {
    id: number,
    title: string | null,
    text: string | null,
    game:  {
      id: number,
      name: string | null,
    } | null,
  } | null > | null,
};

export interface getTopicQueryVariables {
  id: number,
};

export interface getTopicQuery {
  topic:  {
    id: number,
    title: string | null,
    text: string | null,
    game:  {
      id: number,
      name: string | null,
    } | null,
    author:  {
      id: number,
      name: string | null,
    } | null,
    answers:  Array< {
      id: number,
      text: string | null,
      author:  {
        id: number,
        name: string | null,
      } | null,
    } | null > | null,
  } | null,
};
