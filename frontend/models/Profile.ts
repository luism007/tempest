class Profile { 
    first_name: string | undefined;
    last_name: string | undefined;
    type: string | undefined;
    user_id: string | undefined;
    id: string | undefined;

    constructor (
        _first_name?: string,
        _last_name?: string,
        _type?: string,
        _user_id?: string,
        _id?: string 
    ) {
        this.first_name = _first_name;
        this.last_name = _last_name;
        this.type = _type;
        this.user_id = _user_id;
        this.id = _id
    }
}