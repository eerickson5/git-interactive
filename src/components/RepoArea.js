import React from "react";
import { List, ListItem, ListContent, ListIcon, ListHeader } from "semantic-ui-react";
import Version from "./Version";

export default function RepoArea({type, versions}){
    return(
        <div>
            <h2>{type}</h2>
            <div className="area">
            <List divided animated inverted relaxed>
                {!!versions
                ? versions.map( v => <Version version={v}  key={v.sha}/>)
                : <p>None</p>}
            </List>
            </div>
        </div>
        
    )
}