import React from "react";
import { Container } from "semantic-ui-react";

export default function AboutGit(){
    return(
        <Container>
            <h1 style={{marginTop: '5vh'}}>Learning Git</h1>
            <h5>
                Version control with Git is an invaluable skill for students and 
                learning it is necessary for success as a developer.
            </h5>
            <h5>
                These are some tools I used to learn while building git-interactive.  
                Hopefully they can help you in your education as well!
            </h5>
            <ul style={{textAlign: 'left'}}>
                <li>
                    <a href="https://dev.to/olawanle_joel/git-github-explained-like-i-m-five-58f2">Github Explained Like I'm Five</a>
                </li>
                <li>
                    <a href="https://medium.com/sliit-foss/the-beginners-guide-to-version-control-with-github-82384e4b9a19">Understanding Terminology</a>
                </li>
                <li>
                    <a href="https://hackernoon.com/mastering-git-and-version-control-a-beginners-guide">Descriptions of Commands</a>
                </li>
                <li>
                    <a href="https://docs.github.com/en/get-started/using-git/about-git">GitHub Docs</a>
                </li>
            </ul>
        </Container>
    )
}