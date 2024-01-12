import React, {useState} from "react";
import { List, ListItem, ListContent, ListIcon } from "semantic-ui-react";

export default function RepoArea({type}){

    const [versions, setVersions] = useState([])

    return(
        <div className="area">
            <h2>{type}</h2>
            <List>
                {versions.map( v => <ListItem>
                    <ListIcon name='mail'/>
                    <ListContent>{v.sha}</ListContent>
                </ListItem>)}
            </List>
        </div>
    )
}