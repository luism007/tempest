import React from "react";
import { createContext, useReducer } from "react";


class ProfileSetupForm { 
    firstName!: string;
    lastName!: string;
    profileType!: string;
    height!: number;
    weight!: number;
    age!: number;
    dob!: string;
    gymName!: string;
    gymType!: string;
    gymCity!: string;
    gymStreet!: string;
    gymZip!: string;
    gymDescription!: string;
    membershipName!: string;
    membershipType!: string;

    constructor(
        _firstName: string,
        _lastName: string,
        _profileType: string,
        _height: number,
        _weight: number,
        _age: number,
        _dob: string,
        _gymName: string,
        _gymType: string,
        _gymCity: string,
        _gymStreet: string,
        _gymZip: string,
        _gymDescription: string,
        _membershipName: string,
        _membershipType: string
    ) {
        this.firstName = _firstName;
        this.lastName = _lastName;
        this.profileType = _profileType;
        this.height = _height;
        this.weight = _weight;
        this.age = _age;
        this.dob = _dob;
        this.gymName = _gymName;
        this.gymType = _gymType;
        this.gymCity = _gymCity;
        this.gymStreet = _gymStreet;
        this.gymZip = _gymZip;
        this.gymDescription = _gymDescription;
        this.membershipName = _membershipName;
        this.membershipType = _membershipType;
    }
}


export const ProfileSetupContext = createContext({
    form: {},
    handleProfileSetupNext: (profileForm: Partial<ProfileSetupForm>) => {}
});



const profileSetupContextReducer = (state: any, action: any) => {

    switch(action.type) {
        case 'PROFILE_NEXT':
            const newState = {
                firstName: action.form.firstName,
                lastName: action.form.lastName,
                profileType: action.form.profileType,
                ...state
            }
            console.log('New State', newState);
            return newState;
        default:
            return state;
    }
}

export default function ProfileSetupContextProvider ({children}) {

    const [state, dispatch] = useReducer(profileSetupContextReducer, {})

    const handleProfileSetupNext = (profileForm: Partial<ProfileSetupForm> ) => {
        dispatch({
            type: 'PROFILE_NEXT',
            form: {
                firstName: profileForm.firstName,
                lastName: profileForm.lastName,
                profileType: profileForm.profileType
            }
        });
    }

    const contextValue = {
        form: {},
        handleProfileSetupNext: handleProfileSetupNext
    };

    return <ProfileSetupContext.Provider value = {contextValue}> { children } </ProfileSetupContext.Provider>
}