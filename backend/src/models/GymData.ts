import Gym from "./Gym";

class GymData {
    gyms: Gym[];

    constructor(_gyms?: Gym[]) {
        this.gyms = _gyms;
    }
}

export default GymData;