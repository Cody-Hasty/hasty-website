import React, { useState } from 'react'
import FileList from '../../../assets/json/filelist.json'
import { Link } from 'react-router-dom'
import { AiFillCloseCircle } from "react-icons/ai"
import { VscFilePdf } from "react-icons/vsc"
import { BsImage } from "react-icons/bs"

export default function Files() {
  const [currentFile, setCurrentFile] = useState("resume")
  type FileListType = Record<string, 
    Record<"icon" | "name" | "type" | "document", string>>
  const parsedFiles: FileListType = FileList
  const iconMap: Record<string, JSX.Element> = {
    "pdf": <VscFilePdf className="file-icon" />,
    "img": <BsImage className="file-icon" />
  }

  const displayIndex = () => {
    return (
      <div className="file-entries">
        {Object.entries(parsedFiles).map((val) => (
          <ul 
            key={val[0]}
            onClick={() => setCurrentFile(val[0])}
            className={currentFile === val[0] 
              ? "active-file" : "inactive-file"}>
            {iconMap[val[1].icon]} 
            <p className="file-name">{val[1].name}</p>
          </ul>
        ))}
      </div>
    )
  }

  const displayShow = () => {
    const flIdx = parsedFiles[currentFile]
    const url = "https://www.hastycreations.com/src/assets"
    return (
      <div className="file-view">
        {flIdx.type === "pdf" ? (
          <iframe 
            src={`${url}/pdfs/${flIdx.document}`}
            title={flIdx.name}  />
        ) : (
          <img 
              src={`${url}//images/${flIdx.document}`}
            alt={flIdx.name} />
        )}
      </div>
    )
  }

  return (
    <div className="files">
      <div className="top-bar">
        <h2 className="file-header">Files</h2>
        <div className="exit-button" >
          <Link to="/">
            <AiFillCloseCircle className="exit-icon" />
          </Link>
        </div>
      </div>
      {displayIndex()}
      {displayShow()}
    </div>
  )
}
