import React from "react";
import RepoArea from "./RepoArea";
import DiffsArea from "./DiffsArea";

export default function InteractiveArea(){

    return(
        <div className={"areas-container"}>
            <DiffsArea type="working-directory"/>
            <DiffsArea type="staging-area"/>
            <RepoArea type="local-repo"/>
            <RepoArea type="remote-repo"/>
        </div>
    )
}