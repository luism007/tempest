class User {
  username: string;
  email: string;
  password: string;
  profileId: string | null;
  id: string | null;

  constructor(
    _username: string,
    _email: string,
    _password: string,
    _profileId: string | null,
    _id: string | null
  ) {
    this.username = _username;
    this.email = _email;
    this.password = _password;
    this.profileId = _profileId;
    this.id = _id;
  }
}

export default User;