import React from "react";
import { Form, Input } from 'semantic-ui-react'

export default function FileChanger(name){
    return (
        <form>
          <Input
            placeholder='file name'
            name='name'
            label={{ basic: true, content: 'Make changes to a file...' }}
            inline
            action='Submit'
          />
      </form>
    )
}