export const accountRepoToken = 'accountRepoToken';

export interface CreateSessionResponse {
  accountId?: number;
  token?: string;
  error?: 'invalid_email_or_password';
}

export interface RegistrationResponse {
  accountId?: number;
  token?: string;
  error?: 'email_exists' | 'invalid_data',
}
