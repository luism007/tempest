export class SignUpError {
  email: string;
  password: string;
  message: string;

  constructor(_email?: string, _password?: string, _message?: string) {
    this.email = _email;
    this.password = _password;
    this.message = _message;
  }
}