import React from "react";

import {Icon} from 'semantic-ui-react'

export default function GitHeader(){
    return(
        <div className="header-container">
            <div className="horizontal">
                <h1>git-interactive</h1>
                <Icon name='github'/>
            </div>
            

            <h4>a visual tool for understanding version control with git.</h4>
        </div>
    )
}