class Trainee { 
    height: number;
    weight: number;
    age: number;
    dob: string;
    profile_id: string | undefined;
    id: string;

    constructor (
        _height: number,
        _weight: number,
        _age: number,
        _dob: string,
        _id: string,
        _profile_id ?: string
    ) {
        this.height = _height;
        this.weight = _weight;
        this.age = _age;
        this.dob = _dob;
        this.profile_id = _profile_id;
        this.id = _id;
    }
}