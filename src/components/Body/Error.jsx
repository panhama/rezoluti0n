import { logDOM } from "@testing-library/react";
import Button2 from "../Buttons/Button 2";
import "./Skills.css";
export default function Error(props) {    
    return <div className="skills" style=
    {{padding:"25.5rem",
    textAlign:"center"}}>
    <h2>COMING SOON</h2>
    <Button2 type="button" onClick={()=>{
    window.location.href="#/"
    }} text="GO BACK">
    </Button2>
    </div>
}