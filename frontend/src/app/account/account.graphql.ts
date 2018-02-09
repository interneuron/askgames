import gql from 'graphql-tag';

export const accountGql = {
  getSettingsAccount: gql`
    query getSettingsAccount($id: Int!) {
      account(id: $id) {
        id
        displayName
        picture
        about
      }
    }
  `,
  updateSettings: gql`
    mutation updateSettings($form: SettingsForm){
      updateSettings(form: $form) {
        success
        error
      }
    }
  `,
};
