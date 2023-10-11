export class AuthContract {
  email: string;
  message: string;
  token: string;
  userId: string;
  error: string;

  constructor(
    _email?: string,
    _message?: string,
    _token?: string,
    _userId?: string,
    _error?: string
  ) {
    this.email = _email;
    this.message = _message;
    this.token = _token;
    this.userId = _userId;
    this.error = _error;
  }
}
