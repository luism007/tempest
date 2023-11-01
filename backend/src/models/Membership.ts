class Membership {
    membershipName: string;
    membershipType: string;
    membershipCycle: string;
    membershipFee: string;
    id?: string;

    constructor(
        _membershipName: string,
        _membershipType: string,
        _membershipCycle: string,
        _membershipFee: string,
        _membershipId ?: string
    ) {
        this.membershipName = _membershipName;
        this.membershipType = _membershipType;
        this.membershipCycle = _membershipCycle;
        this.membershipFee = _membershipFee;
        this.id = _membershipId;
    }
}

export default Membership;