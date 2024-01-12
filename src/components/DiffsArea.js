import React, {useState} from "react";
import { List, ListItem} from "semantic-ui-react";

export default function DiffsArea({type, diffs}){

    return(
        <div>

            <h2>{type}</h2>
            <div className="area">
            <List divided inverted relaxed animated verticalAlign='middle'>
                { !!diffs 
                ? diffs.map(diff => <ListItem icon='write' content={diff} key={diff}/>)
                : <p>None yet</p>
                }
            </List>
            </div>
        </div>
        
    )
}