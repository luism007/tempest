import { Dropdown } from "primereact/dropdown";
import React, { useContext, useState } from "react"
import { ProfileSetupContext } from "../../store/ProfileSetupStore";
import { useForm } from "../../hooks/useForm";
import { List } from "../generics/List";
import { GymApi } from "../../apis/GymsApi";
import { Card } from "../generics/Card";
import { Button } from "primereact/button";

export const SelectGym = () => {
    const dropdownOptions = ['Boxing', 'Bouldering'];
    const {form, handleGymSetupNext} = useContext(ProfileSetupContext);
    const [gyms, setGyms] = useState<React.JSX.Element[]>([]);
    const [chosenGym, setChosenGym] = useState<Gym>();
    
    const selectedGym = (e: Gym) => {
        setChosenGym(e);
        console.log(e);
        let gym = {
            gymId: e.id,
            gymName: e.name,
            gymType: e.type,
            gymCity: e.city,
            gymStreet: e.street,
            gymZip: e.zip,
            gymDescription: e.description
        };
        handleGymSetupNext(gym);
        console.log('Form State', formState);
    }
    const submit = (e) => {
        e.preventDefault();
        GymApi.getGymsOfType('boxing')
        .then((gyms) => {
            const cards = gyms.gyms.map((g: Gym) => <Card title={g.name} subtitles={[g.type, g.street, g.city, g.zip]} description={g.description} onClick={() => selectedGym(g)}/>)
            setGyms(cards);
        }).catch(e => {
            console.log(e);
        });
    }
    const rules = new Map<string, Rule>();
    rules.set('gymType', { validation: null, required: true});
    
    const {formState, elementValue, handleDropdownChange, handleSubmit} = useForm(submit, rules);
    return(
        <>
            <h1> Select Your Gym </h1>
            <form>
                <Dropdown name = "gymType" required placeholder="Gym Type" options={dropdownOptions} onChange={handleDropdownChange} value={elementValue}/>
                <Button label = "Find Gyms" onClick={submit}/>
                { gyms?.length > 0 && <List data = {gyms}></List> }
                { gyms?.entries.length > 0 && <p>hellowworld </p>}
            </form>
        </>
    )
}