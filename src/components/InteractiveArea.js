import React from "react";
import RepoArea from "./RepoArea";
import ChangesArea from "./ChangesArea";

export default function InteractiveArea(){
    return(
        <div className={"area-container"}>
            <ChangesArea type="working-directory"/>
            <ChangesArea type="staging-area"/>
            <RepoArea type="commits"/>
            <RepoArea type="remote-repo"/>
        </div>
    )
}