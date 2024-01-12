import React, {createContext, useState} from "react";

const GitContext = React.createContext();
export default function GitProvider({children}){

    const [directoryDiffs, setDirectoryDiffs] = useState(["fileA", "fileB", "fileC"])
    const [stagedDiffs, setStagedDiffs] = useState(["fileD", "fileE", "fileF"])
    const [localCommits, setLocalCommits] = useState([
        {sha: "ABC", diffs: ["fileG", "fileH", "fileI"]},
        {sha: "DEF", diffs: ["fileG", "fileH", "fileI"]},
    ])
    const [remoteCommits, setRemoteCommits] = useState([{sha: "Hi", diffs: ["fileG", "fileH", "fileI"]}])

    const currentGit = {
        "working-directory": [directoryDiffs, setDirectoryDiffs],
        "staging-area": [stagedDiffs, setStagedDiffs],
        "local-repo": [localCommits, setLocalCommits],
        "remote-repo": [remoteCommits, setRemoteCommits],
    }

    return(
        <GitContext.Provider value={currentGit}>
            {children}
        </GitContext.Provider>
    )
}