class TraineesToMembershipData {
    traineeId: string;
    membershipId: string;

    constructor(
        _traineeId ?: string,
        _membershipId ?: string
    ) {
        this.traineeId = _traineeId;
        this.membershipId = _membershipId;
    }
}
export default TraineesToMembershipData;