import React from 'react'
import Link from '@/utils/Link'
import internetIcon from '@icons/google-chrome.svg'
import githubIcon from '@icons/github-desktop.svg'
import terminalIcon from '@icons/terminal.svg'
import filesIcon from '@icons/system-file-manager.svg'
import codeIcon from '@icons/code.svg'
import emailIcon from '@icons/evolution.svg'
import Image from 'next/image'

export default function Sidebar() {
  return (
    <div id="sidebar">
      <Link to="/internet"><Image src={internetIcon} alt="Chrome" width={39} height={39} /></Link>
      <Link to="/github"><Image src={githubIcon} alt="Github" width={39} height={39} /></Link>
      <Link to="/terminal"><Image src={terminalIcon} alt="Terminal" width={39} height={39} /></Link>
      <Link to="/files"><Image src={filesIcon} alt="Files" width={39} height={39} /></Link>
      <Link to="/email"><Image src={emailIcon} alt="Email" width={39} height={39} /></Link>
      <Link to="/code"><Image src={codeIcon} alt="Code" width={39} height={39} /></Link>
    </div>
  )
}
