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
            return("[console]   No changes to add.")
        }
        setStagedDiffs([...stagedDiffs, ...directoryDiffs]);
        setDirectoryDiffs([])
        return("")
    }

    const commitFilesToLocal = () => {
        if(stagedDiffs.length < 1){
            return("[console]   Changes not staged for commit. No changes added to commit (use \"git add\")")
        }

        const newCommit = {
            sha: Math.random().toString(36).slice(2, 8),
            diffs: stagedDiffs
        }

        setLocalCommits([...localCommits, newCommit])
        setStagedDiffs([])
        return(`[main ${newCommit.sha}]   ${newCommit.diffs.length} files changed. Your branch is ahead of 'origin/main' by ${localCommits.length} commits.
        (use "git push" to publish your local commits)`)
    }

    const commitFilesToRemote = () => {
        if(localCommits.length < 1){
            return("Everything up-to-date")
        }

        const firstCommit = localCommits[0].sha
        const lastCommit = localCommits[localCommits.length - 1].sha

        setRemoteCommits([...remoteCommits, ...localCommits])
        setLocalCommits([])
        
        return(`${firstCommit}..${lastCommit}  main -> main`)
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