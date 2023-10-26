class MembershipToGymData { 
    membershipId: string;
    gymId: string;

    constructor(
        _membershipId?: string,
        _gymId?: string
    ) {
        this.membershipId = _membershipId;
        this.gymId = _gymId;
    }
}
export default MembershipToGymData;