import React, {useContext, useState} from "react";
import { Button, Segment } from 'semantic-ui-react'
import FileChanger from "./FileChanger";
import { GitContext } from "./GitProvider";

export default function TerminalDashboard({consoleOutput}){

    const { moveFilesToStaging, commitFilesToLocal, commitFilesToRemote } = useContext(GitContext)

    return (
        <Segment raised inverted className="terminal-dashboard">

            <h2>Terminal Dashboard</h2>
            <FileChanger/>
            <div className="buttons-container">
                <Button color='purple' onClick={moveFilesToStaging}>git add</Button>
                <Button color='purple' onClick={commitFilesToLocal}>git commit</Button>
                <Button color='purple' onClick={commitFilesToRemote}>git push</Button>
            </div>
            <h3>[console] No files to add.</h3>
        </Segment>
    )
}