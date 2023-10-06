import User from "./User";

class UserData {
    users: User[];
    
    constructor (_users?: User[]) { 
        this.users = _users || [];
    }
}

export default UserData;