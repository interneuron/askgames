export const accountRepoToken = 'accountRepoToken';

export interface CreateSessionResponse {
  accountId?: number;
  token?: string;
  error?: 'invalid_email_or_password';
}
