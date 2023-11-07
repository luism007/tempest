import MembershipData from "../models/MembershipData";
import MembershipToGymContract from "../api-contracts/MembershipToGymContract";
import MembershipToGymData from "../models/MembershipToGymData";
import { readGymData, readMembershipData, readMembershipsToGymData, writeMembershipData, writeMembershipsToGymData } from "../utils/data-util"
import Membership from "../models/Membership";
import { v4 as uuid } from 'uuid';

export const getMembershipsFromGym = async (gymId: string) => {
    const data: MembershipToGymData[] = await readMembershipsToGymData();
    if(!data || data?.length <= 0) {
        throw new Error('No Membership to Gym relations found');
    }

    const membershipIds = data
      .filter((mG) => mG.gymId === gymId)
      .map((m) => m.membershipId);

    const membershipData: MembershipData = await readMembershipData();

    if (!membershipData) {
        throw new Error('No Membership data available at this time.');
    }

    const membershipsFromGym = [];

    for(const mId of membershipIds) {

        const foundMembership = membershipData.memberships.find((m) => m.id === mId);

        if (foundMembership) {
            membershipsFromGym.push(foundMembership);
        }
    }


    if (membershipsFromGym.length === 0) {
        throw new Error ('No Memberships found for this gym.');
    }

    return membershipsFromGym;
}

export const createMembership = async (membership: Membership, gymId: string) => {

    if (membership.id === null || membership.id === '' || membership.id === undefined){
        membership.id = uuid();
    }

    const membershipData: MembershipData = await readMembershipData();

    if (membershipData === null || membershipData.memberships?.length <= 0) {
      membershipData.memberships = [];
    }



    const gymData = await readGymData();
    const gym = gymData.gyms.find((g) => g.id === gymId);

    if (gym === null || gym === undefined) {
        throw new Error('No gym found to connect this membership too. Please ensure you selected a correct gym.');
    }


    let membershipGymRelations: MembershipToGymData[] = await readMembershipsToGymData();

    if (membershipGymRelations?.length === 0 || membershipGymRelations === null) {
        membershipGymRelations = [];
    }

    // Check if existing memberships from this gym already has a similar membership.

    const existingMembershipsFromGym = membershipGymRelations.filter((mG) => mG.gymId === gymId);

    if (existingMembershipsFromGym?.length > 0) {
        const membershipIds = existingMembershipsFromGym.map((mG) => mG.membershipId);
        for (const mId of membershipIds) {
            const existingMembership = membershipData.memberships.find(m => m.id === mId);
            if (existingMembership.membershipName === membership.membershipName) {
                throw new Error("This membership already exists for this particular gym. ")
            }
        }
    }

    membershipData.memberships = [...membershipData.memberships, membership];
    membershipGymRelations = [ ...membershipGymRelations, new MembershipToGymData(membership.id,gymId) ]

    try {
        await writeMembershipData(membershipData);
        await writeMembershipsToGymData(membershipGymRelations);
        return new Promise<Membership>((resolve) => resolve(membership));
    } catch (e) {
        throw new Error(
            `Unable to create Membership: ${membership.membershipName} for ${gym.name}`
        );
    }
}