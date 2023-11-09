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
    handleProfileSetupNext: (profileForm: Partial<ProfileSetupForm>) => {},
    handleTraineeSetupNext: (traineeForm: Partial<ProfileSetupForm>) => {}
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
            console.log(newState);
            return newState;
        case 'TRAINEE_NEXT':
            const tState = {
                ...state,
                height: action.form.height,
                weight: action.form.weight,
                age: action.form.age,
                dob: action.form.dob
            };
            console.log(tState);
            return tState; 
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

    const handleTraineeSetupNext = (traineeForm: Partial<ProfileSetupForm>) => {
        dispatch({
            type: 'TRAINEE_NEXT',
            form : {
                height: traineeForm.height,
                weight: traineeForm.weight,
                age: traineeForm.age,
                dob: traineeForm.dob
            }
        })
    }

    const contextValue = {
        form: state,
        handleProfileSetupNext: handleProfileSetupNext,
        handleTraineeSetupNext: handleTraineeSetupNext
    };

    return <ProfileSetupContext.Provider value = {contextValue}> { children } </ProfileSetupContext.Provider>
}