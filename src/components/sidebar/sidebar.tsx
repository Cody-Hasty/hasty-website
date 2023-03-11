import React from 'react'
import { Link } from 'react-router-dom'
import internetIcon from '../../assets/icons/google-chrome.svg'
import githubIcon from '../../assets/icons/github-desktop.svg'
import terminalIcon from '../../assets/icons/terminal.svg'
import filesIcon from '../../assets/icons/system-file-manager.svg'
import codeIcon from '../../assets/icons/code.svg'
import emailIcon from '../../assets/icons/evolution.svg'

export default function Sidebar() {
  return (
    <div id="sidebar">
      <Link to="/internet"><img src={internetIcon} alt="Chrome"/></Link>
      <Link to="/github"><img src={githubIcon} alt="Github"/></Link>
      <Link to="/terminal"><img src={terminalIcon} alt="Terminal"/></Link>
      <Link to="/files"><img src={filesIcon} alt="Files"/></Link>
      <Link to="/email"><img src={emailIcon} alt="Email"/></Link>
      <Link to="/code"><img src={codeIcon} alt="Code"/></Link>
    </div>
  )
}
