import React, {useContext, useState} from "react";
import { Button, Segment } from 'semantic-ui-react'
import FileChanger from "./FileChanger";
import { GitContext } from "./GitProvider";

export default function TerminalDashboard(){

    const { moveFilesToStaging, commitFilesToLocal, commitFilesToRemote } = useContext(GitContext)
    const [consoleMessage, setConsoleMessage] = useState("")

    const handleClick = (gitFunction) => {
        const message = gitFunction()
        setConsoleMessage(message)
    }

    return (
        <Segment raised inverted className="terminal-dashboard">

            <h1>Terminal Dashboard</h1>
            <FileChanger onSetConsole={setConsoleMessage}/>
            <div className="buttons-container">
                <Button color='purple' onClick={() => handleClick(moveFilesToStaging)}>git add</Button>
                <Button color='purple' onClick={() => handleClick(commitFilesToLocal)}>git commit</Button>
                <Button color='purple' onClick={() => handleClick(commitFilesToRemote)}>git push</Button>
            </div>
            <h3>{consoleMessage}</h3>
        </Segment>
    )
}