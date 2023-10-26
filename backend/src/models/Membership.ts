class Membership { 
    membershipName: string;
    membershipType: string;
    membershipCycle: string;
    membershipFee: string;
    id: string;

    constructor(
        _membershipName: string,
        _membershipType: string,
        _membershipCycle: string,
        _membershipFee: string
    ) {
        this.membershipName = _membershipName;
        this.membershipType = _membershipType;
        this.membershipCycle = _membershipCycle;
        this.membershipFee = _membershipFee;
    }
}

export default Membership;