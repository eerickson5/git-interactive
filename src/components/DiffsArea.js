import React, {useContext} from "react";
import { List, ListItem, Segment} from "semantic-ui-react";
import { GitContext } from "./GitProvider";

export default function DiffsArea({type}){

    const [diffs, setDiffs] = React.useContext(GitContext)[type]

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