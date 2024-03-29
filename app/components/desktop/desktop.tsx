import React from 'react'
import Link from '@/utils/Link'
import { VscFilePdf } from "react-icons/vsc"

export default function Desktop() {
  return (
    <div className="desktop">
      <div id="sticky-note">
        <div className="note-bar">
          <h3>Welcome to my desktop!</h3>
        </div>
        <div>
          <p>Try clicking icons on my sidebar to check out what
            I&apos;ve been working on.</p>
          <p>Alternatively, click the shortcuts on my desktop to skip
            to the important stuff.</p>
          <p>Enjoy!</p>
          <p>- Cody Hasty</p>
        </div>
      </div>
      <div id="shortcuts">
        <Link to="/files" className="file-shortcut">
          <VscFilePdf className="shortcut-icon" />
          <p>Resume</p>
        </Link>
      </div>
    </div>
  )
}