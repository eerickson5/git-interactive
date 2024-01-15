import React, {useState} from "react";
import TerminalDashboard from "./TerminalDashboard";
import Terminal from "./Terminal";
 import { Button } from 'semantic-ui-react'

export default function TerminalsContainer(){
    const [isDashboard, setIsDashboard] = useState(true)

    // if(isDashboard){
    //     return (<TerminalDashboard/>)
    // } else {
    //     return(
    //         <Terminal/>
    //     )
    // }

    return(
        <div className="terminals-container">
            <Button 
            color='purple' 
            content='Switch Terminals' 
            icon='terminal' 
            labelPosition='left' 
            onClick={() => setIsDashboard(!isDashboard)}/>
            {isDashboard
            ? <TerminalDashboard/>
            : <Terminal/>
            }
        </div>
    )
}