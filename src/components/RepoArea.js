import React from "react";
import { List, ListItem, ListContent, ListIcon, ListHeader } from "semantic-ui-react";

export default function RepoArea({type, versions}){
    console.log(versions)
    return(
        <div className="area">
            <h2>{type}</h2>
            <List celled animated inverted>
                {!!versions
                ? versions.map( v => <ListItem key={v}>
                    <ListIcon name='inbox'/>
                    <ListContent>
                        <ListHeader>
                            {v.sha}
                        </ListHeader>
                        {v.diffs.map(d => <p key={d}>{d}</p>)}
                    </ListContent>
                </ListItem>)
                : <p>None</p>}
            </List>
        </div>
    )
}