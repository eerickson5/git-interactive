import React, {useState} from "react";
import { List, ListItem, ListContent, ListIcon } from "semantic-ui-react";

export default function RepoArea({type}){

    return(
        <div className="area">
            <h2>{type}</h2>
            <List>
                <ListItem>
                    <ListIcon name='mail'/>
                    <ListContent>Change A</ListContent>
                </ListItem>
            </List>
        </div>
    )
}