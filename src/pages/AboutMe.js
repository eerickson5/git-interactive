import React from "react";
import { Container } from "semantic-ui-react";

export default function AboutMe(){
    return(
        <Container>
            <h1 style={{marginTop: '5vh'}}>about git-interactive</h1>
            <h5> 
                My name is Elise and I'm currently studying software engineering at Flatiron School.  
                We learned that GitHub is a make-or-break platform for developers, but we had little instruction about how it actually worked.
                We learned the git commands, but it was hard for me to remember them without understanding what they actually did.
            </h5>

            <iframe title="thinking lady" src="https://giphy.com/embed/WRQBXSCnEFJIuxktnw" width="240" height="153" frameBorder="0" class="giphy-embed"></iframe>
            <p><a href="https://giphy.com/gifs/math-lady-meme-WRQBXSCnEFJIuxktnw">me trying to understand git</a></p>

            <h5>
                My solution was the tool I wish I had: <span className="ui bold">git-interactive, </span> 
                a visual representation of how git version managers work behind the scenes.
            </h5>
            <h5>
                It doesn't tap into your computer to make any actual changes, 
                but it will help you learn how to make those changes yourself.
            </h5>

            <iframe title="ohhhh" src="https://giphy.com/embed/TCRIimkpZXoaEUiLEq" width="240" height="160" frameBorder="0" class="giphy-embed"></iframe>
            <p><a href="https://giphy.com/gifs/metahitt-wow-ok-i-get-it-now-TCRIimkpZXoaEUiLEq">me after researching, building, and using git-interactive</a></p>

            <h5>
                At the moment, git-interactive only supports git add, commit, and push.
                However, I would love to add support for some of git's other features, such as git restore, reset, and revert.
                Take a look at <a href="https://github.com/eerickson5/git-interactive">the repo</a> and send me a pull request if you want to help improve git-interactive. I'd love the chance to learn that process too!
            </h5>

            <iframe title="so you're smart" src="https://giphy.com/embed/3o6Zt7dGWFhIfyaGwE" width="240" height="135" frameBorder="0" class="giphy-embed" ></iframe>
            <p style={{paddingBottom: '5vh'}}><a href="https://giphy.com/gifs/idiocracy-3o6Zt7dGWFhIfyaGwE">me looking for a coding buddy</a></p>

        </Container>
    )
}