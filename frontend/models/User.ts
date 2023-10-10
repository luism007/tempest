class User {
    email: string;
    password: string;
    profileId: string | null;
    id: string | null;
  
    constructor(
      _email: string,
      _password: string,
      _profileId: string | null,
      _id: string | null
    ) {
      this.email = _email;
      this.password = _password;
      this.profileId = _profileId;
      this.id = _id;
    }
  }
  
  export default User;