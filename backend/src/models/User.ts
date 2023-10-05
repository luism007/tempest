class User {
  username: string;
  email: string;
  password: string;
  profileId: string;
  id: string;

  constructor(
    _username: string,
    _email: string,
    _password: string,
    _profileId: string | null,
    _id: string
  ) {
    this.username = _username;
    this.email = _email;
    this.password = _password;
    this.profileId = _profileId;
    this.id = _id;
  }
}

export default User;