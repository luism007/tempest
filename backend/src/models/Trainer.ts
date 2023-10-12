class Trainer {

    trainerId: string;
    profileId: string;

    constructor (
        _trainerId: string,
        _profileId: string
    ){
        this.trainerId = _trainerId;
        this.profileId = _profileId;
    }
}
export default Trainer;