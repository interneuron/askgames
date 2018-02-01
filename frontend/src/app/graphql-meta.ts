/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface getAccountByNameQueryVariables {
  name: string,
};

export interface getAccountByNameQuery {
  accountByName:  {
    id: number,
    name: string | null,
    picture: string | null,
    background: string | null,
    about: string | null,
    socialVk: string | null,
    socialFb: string | null,
    socialYt: string | null,
    socialTw: string | null,
    website: string | null,
    topics:  Array< {
      id: number,
      title: string | null,
      text: string | null,
      game:  {
        id: number,
        name: string | null,
      } | null,
    } | null > | null,
  } | null,
};

export interface createSessionMutationVariables {
  email: string,
  password: string,
};

export interface createSessionMutation {
  createSession:  {
    accountId: number | null,
    token: string | null,
    error: string | null,
  } | null,
};

export interface getAuthAccountQuery {
  authAccount:  {
    id: number,
    name: string | null,
    email: string | null,
  } | null,
};

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
    game:  {
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
