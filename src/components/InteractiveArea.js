import React from "react";
import RepoArea from "./RepoArea";
import DiffsArea from "./DiffsArea";

export default function InteractiveArea(){

    return(
        <div className={"areas-container"}>
            <DiffsArea type="working-directory" name="Working Directory"/>
            <DiffsArea type="staging-area" name="Staging Area"/>
            <RepoArea type="local-repo"  name="Local Repo"/>
            <RepoArea type="remote-repo" name="Remote Repo"/>
        </div>
    )
}