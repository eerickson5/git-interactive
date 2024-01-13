import React, {createContext, useState} from "react";

export const GitContext = createContext();
export function GitProvider({children}){

    const [directoryDiffs, setDirectoryDiffs] = useState([])
    const [stagedDiffs, setStagedDiffs] = useState([])
    const [localCommits, setLocalCommits] = useState([])
    const [remoteCommits, setRemoteCommits] = useState([])

    const addFileToDirectory = (fileName) => {
        if(!directoryDiffs.includes(fileName)){
            setDirectoryDiffs([...directoryDiffs, fileName])
        }
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