import MembershipData from "../models/MembershipData";
import MembershipToGymContract from "../api-contracts/MembershipToGymContract";
import MembershipToGymData from "../models/MembershipToGymData";
import { readMembershipData, readMembershipsToGymData } from "../utils/data-util"

export const getMembershipsFromGym = async (gymId: string) => {
    const data: MembershipToGymData[] = await readMembershipsToGymData();
    if(!data) { 
        throw new Error('No Membership to Gym relations found');
    }

    const membershipIds = data
      .filter((mG) => mG.gymId === gymId)
      .map((m) => m.membershipId);

    const membershipData: MembershipData = await readMembershipData();

    if (!membershipData) { 
        throw new Error('No Membership data available at this time.');
    }

    let membershipsFromGym = [];

    for(let mId of membershipIds) { 
        
        let foundMembership = membershipData.memberships.find((m) => m.id === mId);
        
        if (foundMembership !== undefined) { 
            membershipsFromGym.push(foundMembership);
        }
    }
    

    if (membershipsFromGym.length === 0) { 
        throw new Error ('No Memberships found for this gym.');
    }

    return membershipsFromGym;
}