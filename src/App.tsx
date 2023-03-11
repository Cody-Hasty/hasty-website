import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'

import Desktop from './components/desktop/desktop'
import Navbar from './components/navbar/navbar'
import Sidebar from './components/sidebar/sidebar'
import Lock from './components/lock/lock'
// import Notes from './components/apps/notes'
import Code from './components/apps/code/code'
import Files from './components/apps/files/files'
import Github from './components/apps/github/github'
import Internet from './components/apps/internet/internet'
import Email from './components/apps/email/email'
import Terminal from './components/apps/terminal/terminal'

function App() {
  return (
    <div id="routes">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/code" element={<Code />} />
        <Route path="/files" element={<Files />} />
        <Route path="/github" element={<Github />} />
        <Route path="/internet" element={<Internet />} />
        {/* <Route path="/notes" element={<Notes />} /> */}
        <Route path="/email" element={<Email />} />
        <Route path="/terminal" element={<Terminal />} />
        <Route path="/locked" element={<Lock />} />
        <Route path="/" element={<Desktop />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App
