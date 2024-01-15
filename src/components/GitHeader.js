import React from "react";
import NavBar from "./NavBar";
import {Icon} from 'semantic-ui-react'

export default function GitHeader(){
    return(
        <div className="header-container">
            <div className="horizontal">
                    <h1>git-interactive</h1>
                <a href="https://github.com/eerickson5/git-interactive">
                    <Icon name='github' color="purple"/>
                </a>
            </div>
            
            {/* <NavBar/> */}

            <h4>a visual tool for understanding version control with git.</h4>
        </div>
    )
}