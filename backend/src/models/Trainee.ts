class Trainee {
    height: number;
    weight: number;
    age: number;
    dob: string;
    profileId: string;
    id: string | null;

    constructor (
        _height: number,
        _weight: number,
        _age: number,
        _dob: string,
        _profileId: string,
        _traineeId: string | null
    ) {
        this.height = _height;
        this.weight = _weight;
        this.age = _age;
        this.dob = _dob;
        this.profileId = _profileId;
        this.id = _traineeId;
    }
}

export default Trainee;