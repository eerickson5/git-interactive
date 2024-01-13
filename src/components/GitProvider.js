import React, {createContext, useState} from "react";

export const GitContext = createContext();
export function GitProvider({children}){

    const [directoryDiffs, setDirectoryDiffs] = useState(["fileA", "fileB", "fileC"])
    const [stagedDiffs, setStagedDiffs] = useState(["fileD", "fileE", "fileF"])
    const [localCommits, setLocalCommits] = useState([
        {sha: "ABC", diffs: ["fileG", "fileH", "fileI"]},
        {sha: "DEF", diffs: ["fileG", "fileH", "fileI"]},
    ])
    const [remoteCommits, setRemoteCommits] = useState([{sha: "Hi", diffs: ["fileG", "fileH", "fileI"]}])

    const addFileToDirectory = (fileName) => {
        setDirectoryDiffs([...directoryDiffs, fileName])
    }

    const moveFilesToStaging = () => {
        setStagedDiffs([...stagedDiffs, ...directoryDiffs]);
        setDirectoryDiffs([])
    }

    const commitFilesToLocal = () => {
        const newCommit = {
            sha: Math.random().toString(36).slice(2, 8),
            diffs: stagedDiffs
        }

        setLocalCommits([...localCommits, newCommit])
        setStagedDiffs([])
    }

    const commitFilesToRemote = () => {
        setRemoteCommits([...remoteCommits, ...localCommits])
        setLocalCommits([])
    }


    const currentGit = {
        "working-directory": directoryDiffs,
        "staging-area": stagedDiffs,
        "local-repo": localCommits,
        "remote-repo": remoteCommits,
        addFileToDirectory,
        moveFilesToStaging,
        commitFilesToLocal,
        commitFilesToRemote
    }

    return(
        <GitContext.Provider value={currentGit}>
            {children}
        </GitContext.Provider>
    )
}