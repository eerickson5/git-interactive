import React, {useContext} from "react";
import { GitContext } from "./GitProvider";
import { List } from "semantic-ui-react";
import Version from "./Version";
import { Segment } from 'semantic-ui-react'

export default function RepoArea({type}){
    const versions = React.useContext(GitContext)[type]
    return(
        <div>
            <h2>{type}</h2>
            <Segment raised className="area">
                <List divided animated relaxed>
                    {!!versions
                    ? versions.map( v => <Version version={v}  key={v.sha}/>)
                    : <p>...</p>}
                </List>
            </Segment>
        </div>
        
    )
}