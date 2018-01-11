/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface getGameQueryVariables {
  id: number,
};

export interface getGameQuery {
  game:  {
    id: number,
    name: string | null,
  } | null,
};

export interface getGameLatestTopicsQueryVariables {
  gameId: number,
};

export interface getGameLatestTopicsQuery {
  latestTopics:  Array< {
    id: number,
    title: string | null,
    text: string | null,
    author:  {
      id: number,
      name: string | null,
    } | null,
  } | null > | null,
};

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
    comments:  Array< {
      id: number,
      text: string | null,
      author:  {
        id: number,
        name: string | null,
      } | null,
    } | null > | null,
    answers:  Array< {
      id: number,
      text: string | null,
      author:  {
        id: number,
        name: string | null,
      } | null,
      comments:  Array< {
        id: number,
        text: string | null,
        author:  {
          id: number,
          name: string | null,
        } | null,
      } | null > | null,
    } | null > | null,
  } | null,
};
