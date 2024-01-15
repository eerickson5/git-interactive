import React from "react";
import { List, ListItem, Segment} from "semantic-ui-react";
import { GitContext } from "./GitProvider";

export default function DiffsArea({type, name}){

    const diffs = React.useContext(GitContext)[type]

    return(
        <div className='centered'>
            <h2>{name}</h2>
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