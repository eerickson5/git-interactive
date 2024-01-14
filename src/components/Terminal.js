import React, {useContext, useState} from "react";
import { Button, Segment, Input } from 'semantic-ui-react'
import FileChanger from "./FileChanger";
import { GitContext } from "./GitProvider";

export default function Terminal(){

    const { moveFilesToStaging, commitFilesToLocal, commitFilesToRemote } = useContext(GitContext)
    const [consoleMessage, setConsoleMessage] = useState("")
    const [terminalInput, setTerminalInput] = useState("")

    const handleSubmit = () => {

    }

    return (
        <Segment raised inverted className="terminal-dashboard">

            <h1>Terminal</h1>
            <FileChanger onSetConsole={setConsoleMessage}/>
            <h3>then</h3>
            <form className={"terminal-input"} onSubmit={handleSubmit}>
                <Input
                placeholder='...'
                fluid
                inverted
                name='terminal'
                label={{ basic: true, content: '[CONSOLE]', color:'purple', }}
                size="big"
                action={"submit"}
                value={terminalInput}
                onChange={ (e) => setTerminalInput(e.target.value)}
                 />
            </form>
            <h3>{consoleMessage}</h3>
        </Segment>
    )
}