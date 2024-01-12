import React, {useState} from "react";
import { List, ListItem, Segment} from "semantic-ui-react";

export default function DiffsArea({type, diffs}){
    return(
        <div>

            <h2>{type}</h2>
            <Segment raised className="area">
            <List divided relaxed animated verticalAlign='middle'>
                { !!diffs 
                ? diffs.map(diff => <ListItem icon='write' content={diff} key={diff}/>)
                : <p>...</p>
                }
            </List>
            </Segment>
        </div>
        
    )
}