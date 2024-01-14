import React, {useContext, useState} from "react";
import { Button, Segment, Input } from 'semantic-ui-react'
import FileChanger from "./FileChanger";
import { GitContext } from "./GitProvider";

export default function Terminal(){

    const { moveFilesToStaging, commitFilesToLocal, commitFilesToRemote } = useContext(GitContext)
    const [consoleMessage, setConsoleMessage] = useState("")
    const [terminalInput, setTerminalInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(terminalInput.slice(0, 7) === "git add"){
            const endSlice = terminalInput.slice(7).trim()
            endSlice === "."
            ? setConsoleMessage(moveFilesToStaging())
            : setConsoleMessage("[console] adding individual files is not yet supported. Use ' git add . ' instead")
        } else if (terminalInput.slice(0, 10) === "git commit"){
            const endSlice = terminalInput.slice(10)

            endSlice.slice(0, 4) === " -m " && endSlice.length > 4
            ? setConsoleMessage(commitFilesToLocal)
            //add the message!!
            : setConsoleMessage("[console] Aborting commit due to empty commit message.")
        } else if (terminalInput.trim() === "git push"){
            setConsoleMessage(commitFilesToRemote())
        } else {
            setConsoleMessage(`[console] ' ${terminalInput} ' is not a git command.`)
        }
        setTerminalInput("")
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