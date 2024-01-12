import React, {useState} from "react";
import RepoArea from "./RepoArea";
import DiffsArea from "./DiffsArea";

export default function InteractiveArea(){
    const [directoryDiffs, setDirectoryDiffs] = useState(["fileA", "fileB", "fileC"])
    const [stagingDiffs, setStagingDiffs] = useState(["fileD", "fileE", "fileF"])
    const [localCommits, setLocalCommits] = useState([
        {sha: "Hi", diffs: ["fileG", "fileH", "fileI"]},
        {sha: "Bye", diffs: ["fileG", "fileH", "fileI"]},
    ])
    const [remoteCommits, setRemoteCommits] = useState([{sha: "Hi", diffs: ["fileG", "fileH", "fileI"]}])

    return(
        <div className={"area-container"}>
            <DiffsArea type="working-directory" diffs={directoryDiffs}/>
            <DiffsArea type="staging-area"/>
            <RepoArea type="local-repo" versions={localCommits}/>
            <RepoArea type="remote-repo"/>
        </div>
    )
}