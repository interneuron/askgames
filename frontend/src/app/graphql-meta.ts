/* tslint:disable */
//  This file was automatically generated and should not be edited.

export interface SettingsForm {
  displayName: string,
  about?: string | null,
  pictureData?: string | null,
};

export interface RegistrationForm {
  displayName: string,
  email: string,
  password: string,
};

export interface getSettingsAccountQueryVariables {
  id: number,
};

export interface getSettingsAccountQuery {
  account:  {
    id: number,
    displayName: string | null,
    picture: string | null,
    about: string | null,
  } | null,
};

export interface updateSettingsMutationVariables {
  form?: SettingsForm | null,
};

export interface updateSettingsMutation {
  updateSettings:  {
    success: boolean | null,
    error: string | null,
  } | null,
};

export interface DestroySessionMutation {
  destroySession: boolean | null,
};

export interface createGoogleSessionMutationVariables {
  id: string,
  access_token: string,
};

export interface createGoogleSessionMutation {
  createGoogleSession:  {
    accountId: number | null,
    token: string | null,
    error: string | null,
  } | null,
};

export interface registrationMutationVariables {
  form?: RegistrationForm | null,
};

export interface registrationMutation {
  registration:  {
    accountId: number | null,
    token: string | null,
    error: string | null,
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
    displayName: string | null,
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
      displayName: string | null,
    } | null,
    game:  {
      id: number,
      name: string | null,
    } | null,
  } | null > | null,
};

export interface getUserPageQueryVariables {
  id: number,
};

export interface getUserPageQuery {
  account:  {
    id: number,
    displayName: string | null,
    picture: string | null,
    about: string | null,
  } | null,
};

export interface getUserTopicsQueryVariables {
  accountId: number,
  nextPageToken?: number | null,
};

export interface getUserTopicsQuery {
  topics:  {
    entries:  Array< {
      id: number,
      title: string | null,
      text: string | null,
      game:  {
        id: number,
        name: string | null,
      } | null,
    } | null > | null,
    nextPageToken: number | null,
  } | null,
};

export interface getUserAnswersQueryVariables {
  accountId: number,
  nextPageToken?: number | null,
};

export interface getUserAnswersQuery {
  answers:  {
    entries:  Array< {
      id: number,
      text: string | null,
      topic:  {
        id: number,
        title: string | null,
        text: string | null,
        game:  {
          id: number,
          name: string | null,
        } | null,
      } | null,
    } | null > | null,
    nextPageToken: number | null,
  } | null,
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
      displayName: string | null,
    } | null,
    comments:  Array< {
      id: number,
      text: string | null,
      author:  {
        id: number,
        displayName: string | null,
      } | null,
    } | null > | null,
    answers:  Array< {
      id: number,
      text: string | null,
      author:  {
        id: number,
        displayName: string | null,
      } | null,
      comments:  Array< {
        id: number,
        text: string | null,
        author:  {
          id: number,
          displayName: string | null,
        } | null,
      } | null > | null,
    } | null > | null,
  } | null,
};

export interface UserPageAccountFragment {
  id: number,
  displayName: string | null,
  picture: string | null,
  about: string | null,
};

export interface UserPageTopicsFragment {
  entries:  Array< {
    id: number,
    title: string | null,
    text: string | null,
    game:  {
      id: number,
      name: string | null,
    } | null,
  } | null > | null,
  nextPageToken: number | null,
};

export interface UserPageAnswersFragment {
  entries:  Array< {
    id: number,
    text: string | null,
    topic:  {
      id: number,
      title: string | null,
      text: string | null,
      game:  {
        id: number,
        name: string | null,
      } | null,
    } | null,
  } | null > | null,
  nextPageToken: number | null,
};

export interface TopicPanelFragment {
  id: number,
  title: string | null,
  text: string | null,
  game:  {
    id: number,
    name: string | null,
  } | null,
};
