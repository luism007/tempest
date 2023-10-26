import Trainee from "../models/Trainee";

class TraineeContract  {
    trainee: Trainee;
    profileId: string;

    constructor(
        _trainee ?: Trainee,
        _profileId ?: string
    ) {
        this.trainee = _trainee;
        this.profileId = _profileId;
    }
}

export default TraineeContract;