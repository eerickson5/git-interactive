import React from "react";
import { ListItem, ListContent, ListIcon, ListHeader } from "semantic-ui-react";

export default function Version({version}){

    return(
        <ListItem>
            <ListIcon name='inbox'/>
            <ListContent >
                <ListHeader>
                    {version.sha}
                </ListHeader>
                <p>{version.diffs.join(", ")}</p>
            </ListContent>
        </ListItem>
    )
}