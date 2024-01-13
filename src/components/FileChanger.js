import React, {useState, useContext} from "react";
import { Input } from 'semantic-ui-react'
import { GitContext } from "./GitProvider";

export default function FileChanger(){

  const [fileName, setFileName] = useState("")
  const {addFile} = useContext(GitContext)

  const handleInputChange = (input) =>{
    input = input.replace(/\s+/g, '');
    setFileName(input)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addFile(fileName)
    setFileName("")
  }

    return (
        <form onSubmit={handleSubmit}>
          <Input
            placeholder='file name'
            name='name'
            label={{ basic: true, content: 'Make changes to a file...' }}
            inline
            action={"submit"}
            value={fileName}
            onChange={ (e) => handleInputChange(e.target.value)}
          />
      </form>
    )
}