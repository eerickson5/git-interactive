import React from "react";
import { Button, Segment } from 'semantic-ui-react'
import FileChanger from "./FileChanger";

export default function TerminalDashboard({consoleOutput}){
    return (
        <Segment raised inverted className="terminal-dashboard">

            <h2>Terminal Dashboard</h2>
            <FileChanger/>
            <div className="buttons-container">
                <Button color='purple'>git add</Button>
                <Button color='purple'>git commit</Button>
                <Button color='purple'>git push</Button>
            </div>
            <h3>[console] No files to add.</h3>
        </Segment>
    )
}