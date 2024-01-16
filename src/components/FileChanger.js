import React, {useState, useContext} from "react";
import { Input } from 'semantic-ui-react'
import { GitContext } from "../GitProvider";

export default function FileChanger({onSetConsole}){

  const [fileName, setFileName] = useState("")
  const {addFileToDirectory} = useContext(GitContext)

  const handleInputChange = (input) =>{
    input = input.replace(/\s+/g, '');
    setFileName(input)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const message = addFileToDirectory(fileName)
    onSetConsole(message)
    setFileName("")
  }

    return (
        <form onSubmit={handleSubmit}>
          <Input
            placeholder='file name'
            name='name'
            label={{ basic: true, content: 'Make changes to a file...' }}
            action={"submit"}
            value={fileName}
            onChange={ (e) => handleInputChange(e.target.value)}
          />
      </form>
    )
}