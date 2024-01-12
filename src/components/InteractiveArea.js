import React, {useState} from "react";
import RepoArea from "./RepoArea";
import DiffsArea from "./DiffsArea";

export default function InteractiveArea(){
    const [directoryDiffs, setDirectoryDiffs] = useState(["fileA", "fileB", "fileC"])

    return(
        <div className={"area-container"}>
            <DiffsArea type="working-directory" diffs={directoryDiffs}/>
            <DiffsArea type="staging-area"/>
            <RepoArea type="commits"/>
            <RepoArea type="remote-repo"/>
        </div>
    )
}