import React, {createContext, useState} from "react";

export const GitContext = createContext();
export function GitProvider({children}){

    const [directoryDiffs, setDirectoryDiffs] = useState([])
    const [stagedDiffs, setStagedDiffs] = useState([])
    const [localCommits, setLocalCommits] = useState([])
    const [remoteCommits, setRemoteCommits] = useState([])

    const addFileToDirectory = (fileName) => {
        if(fileName.length < 5){
            return("[console]   File name is too short.")
        }

        if(!directoryDiffs.includes(fileName)){
            setDirectoryDiffs([...directoryDiffs, fileName])
            return("")
        }
    }

    const moveFilesToStaging = () => {
        if(directoryDiffs.length < 1){
            return("[console]   No files to add.")
        }
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
        return(`[main ${newCommit.sha}]   ${newCommit.diffs.length} files changed`)
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