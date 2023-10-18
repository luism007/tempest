import Trainee from "./Trainee";

class TraineeData {
    trainees: Trainee[];

    constructor(_trainees?: Trainee[]) {
        this.trainees = _trainees;
    }
}

export default TraineeData;