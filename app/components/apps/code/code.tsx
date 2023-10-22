"use client"

import React, { useState } from 'react'
import Link from '@/utils/Link'
import { AiFillCloseCircle } from "react-icons/ai"
import Projects from "../../../assets/json/projects.json"

export default function Code() {
  const url = "https://github1s.com/Cody-Hasty/hasty-website"
  const [src, setSrc] = useState(url)
  const [title, setTitle] = useState("My Website")
  type ProjectType = Record<string, Record<"src" | "title", string>>
  const projects: ProjectType = Projects

  const switchSource = (key: string) => {
    setSrc(projects[key].src)
    setTitle(projects[key].title)
  }

  return (
    <div className="code">
      <div className="top-bar">
        <div className="tabs">
          {Object.entries(Projects).map((val) => (
            <div key={val[0]} onClick={() => switchSource(val[0])}
              className={val[1].src === src ? "active-tab" : "inactive-tab"}>
              {val[1].title}
            </div>
          ))}
        </div>
        <div className="exit-button">
          <Link to="/">
            <AiFillCloseCircle className="exit-icon" />
          </Link>
        </div>
      </div>
      <iframe src={src} title={title} />
    </div>
  )
}
