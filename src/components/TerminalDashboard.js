import React from "react";
import { Button, Segment } from 'semantic-ui-react'

export default function TerminalDashboard(){
    return (
        <div className="terminal-dashboard">
            <div className="buttons-container">
                <Button color='purple'>git add</Button>
                <Button color='purple'>git commit</Button>
                <Button color='purple'>git push</Button>
            </div>
        
        <Segment raised>
            <h2>Console Output</h2>
        </Segment>
            
        </div>
    )
}