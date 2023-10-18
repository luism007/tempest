class Profile {
    firstName: string;
    lastName: string;
    picture: string;
    type: string;
    userId: string;
    id: string;

    constructor (
        _firstName: string,
        _lastName: string,
        _picture: string,
        _type: string,
        _userId: string,
        _id: string
    ) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.picture = _picture;
        this.type = _type;
        this.userId = _userId;
        this.id = _id;
    }
}
export default Profile;