import * as React from "react";
import { Link } from 'react-router-dom';
import internetPic from '../../icons/google-chrome.svg'
import githubPic from '../../icons/github-desktop.svg'
import terminalPic from '../../icons/terminal.svg'
import filesPic from '../../icons/system-file-manager.svg'
import codePic from '../../icons/code.svg'
import emailPic from '../../icons/evolution.svg'

class Sidebar extends React.Component {
    render() {
        return (
            <div id="sidebar">
                <Link to="/internet"><img src={internetPic} alt="Chrome"/></Link>
                {/* <a target="_blank" rel="noopener noreferrer" href="https://github.com/Brittany-Hasty">
                    <img src={githubPic} alt="Github"/>
                </a> */}
                <Link to="/github"><img src={githubPic} alt="Github"/></Link>
                <Link to="/terminal"><img src={terminalPic} alt="Terminal"/></Link>
                <Link to="/files"><img src={filesPic} alt="Files"/></Link>
                <Link to="/email"><img src={emailPic} alt="Email"/></Link>
                <Link to="/code"><img src={codePic} alt="Code"/></Link>
            </div>
        )
    }
}

export default Sidebar;