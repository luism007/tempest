import Membership from "./Membership";

class MembershipData { 
    memberships: Membership[] | null;
    contstructor(
        _memberships?: Membership[]
    ) {
        this.memberships = _memberships;
    }
}

export default MembershipData;