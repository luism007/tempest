import Gym from "../models/Gym";

class GymContract {
    gym: Gym;
    constructor (_gym: Gym) {
        this.gym = _gym;
    }
}
export default GymContract;