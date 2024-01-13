import React, {useState, useContext} from "react";
import { Input } from 'semantic-ui-react'
import { GitContext } from "./GitProvider";

export default function FileChanger(){

  const [fileName, setFileName] = useState("")
  const {addFile} = useContext(GitContext)

    return (
        <form onSubmit={e => {
            e.preventDefault()
            addFile(fileName)
            setFileName("")
          }
        }>
          <Input
            placeholder='file name'
            name='name'
            label={{ basic: true, content: 'Make changes to a file...' }}
            inline
            action={"submit"}
            value={fileName}
            onChange={ (e) => setFileName(e.target.value)}
          />
      </form>
    )
}