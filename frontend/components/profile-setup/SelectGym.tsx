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
    const submit = () => {
        GymApi.getGymsOfType('boxing')
        .then((gyms) => {
            const cards = gyms.gyms.map((g: Gym) => <Card key = {g.id} title={g.name} subtitles={[g.type, g.street, g.city, g.zip]} description={g.description} />)
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
            <form onSubmit={handleSubmit}>
                <Dropdown name = "gymType" required placeholder="Gym Type" options={dropdownOptions} onChange={handleDropdownChange} value={elementValue}/>
                <Button label = "Find Gyms"/>
                { gyms?.length > 0 && <List data = {gyms}></List> }
            </form>
        </>
    )
}