import { Divider } from "primereact/divider";
import React from "react";
import { notEnoughCharacters, missingNumericChar, missingUppercaseChar, missingSpecialCharacter } from "../../../constants/constants";

const SignupFormPasswordFooter: React.FC<{password: string}> = (props) => {
    return (<>
        <Divider/>
        <p className="mt-2"> Suggestions </p>
        <ul className= "pl-2 ml-2 mt-0 line-height-3">
            <li style = {{ color: `${ (notEnoughCharacters(props.password) ? 'red' : 'green')}`}}> At least 13 characters long. </li>
            <li style = {{ color: `${ (missingNumericChar(props.password) ? 'red' : 'green')}`}}> At least one numeric character.</li>
            <li style = {{ color: `${ (missingUppercaseChar(props.password) ? 'red' : 'green')}`}}> At least one uppercase letter. </li>
            <li style = {{ color: `${ (missingSpecialCharacter(props.password) ? 'red' : 'green')}`}}> At least one special character (ex: @, !, #). </li>
        </ul>
    </>)
};
export default SignupFormPasswordFooter;