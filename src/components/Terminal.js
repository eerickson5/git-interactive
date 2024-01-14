import React, {useContext, useState} from "react";
import { Segment, Input } from 'semantic-ui-react'
import FileChanger from "./FileChanger";
import { GitContext } from "./GitProvider";

export default function Terminal(){

    const { moveFilesToStaging, commitFilesToLocal, commitFilesToRemote } = useContext(GitContext)
    const [consoleMessage, setConsoleMessage] = useState("")
    const [terminalInput, setTerminalInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(terminalInput.slice(0, 7) === "git add"){
            handleAsAdd(terminalInput.slice(7).trim())
        } else if (terminalInput.slice(0, 10) === "git commit"){
            handleAsCommit(terminalInput.slice(10))
        } else if (terminalInput.trim() === "git push"){
            setConsoleMessage(commitFilesToRemote())
        } else {
            setConsoleMessage(`[console] ' ${terminalInput} ' is not a git command.`)
        }
        setTerminalInput("")
    }

    const handleAsAdd = (endSlice) => {
        endSlice === "."
        ? setConsoleMessage(moveFilesToStaging())
        : setConsoleMessage("[console] adding individual files is not yet supported. Use ' git add . ' instead")
    }

    const handleAsCommit = (endSlice) => {
        if (endSlice.slice(0, 4) === " -m " && endSlice.length > 6){

            const possibleMessage = endSlice.slice(4).trim()
            if(possibleMessage.length > 2
                && possibleMessage.at(0) === possibleMessage.at(-1) 
                && (possibleMessage.at(0) === "'" || possibleMessage.at(0) === '"')
                ){

                const message = possibleMessage.slice(1, -1)
                setConsoleMessage(commitFilesToLocal(message))
            } else {
                setConsoleMessage(`Please wrap your message in quotes.`)
            }
        } else {
            setConsoleMessage("[console] Aborting commit due to empty commit message.")
        }
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