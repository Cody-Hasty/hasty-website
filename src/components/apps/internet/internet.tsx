import React, { useState } from 'react'
import Webpages from '../../../assets/json/webpages.json'
import { Link } from 'react-router-dom'
import { AiFillCloseCircle } from "react-icons/ai"
import { BsLockFill } from "react-icons/bs"

export default function Internet() {
  const [currentFile, setCurrentFile] = useState("linkedin")
  type WebpagesType = Record<string, 
    { 
      type: string, 
      src: string[], 
      url: string, 
      icon: string, 
      title: string, 
      banner?: string 
    }
  >
  const webpages: WebpagesType = Webpages
  const url = "https://www.hastycreations.com/src/assets/images"

  const displayTabs = () => {
    return (
      <div className="tabs">
        {Object.entries(webpages).map((val) => (
          <div
            key={val[0]}
            onClick={() => setCurrentFile(val[0])}
            className={currentFile === val[0] ? "active-tab" : "inactive-tab"}>
            <img 
              src={`${url}/${val[1].icon}`} 
              alt={val[1].icon} />
            <p>{val[1].title}</p>
          </div>
        ))}
      </div>
    )
  }

  const displayPage = () => {
    const wpIdx = webpages[currentFile]
    const type = wpIdx.type
    const src = wpIdx.src

    if (type === "img") {
      return (
        <img src={`${url}/${src}`} 
          alt={currentFile} className="webpage-img" />
      )
    } else if (type === "embed") {
      return (
        <div>
          {wpIdx?.banner ? (
            <img 
              src={`${url}/${wpIdx.banner}`}
              alt={wpIdx.banner} className="banner" />
          ) : (
            <div />
          )}
          <div className="webpage-embed">
            {src.map((x) => (
              <embed src={x} title={currentFile} key={x}/>
            ))}
          </div>
        </div>
      )
    }

  }

  return (
    <div className="internet">
      <div className="internet-nav">
        <div className="top-bar">
          {displayTabs()}
          <div className="exit-button" >
            <Link to="/">
              <AiFillCloseCircle className="exit-icon" />
            </Link>
          </div>
        </div>
        <div className="internet-url">
          <BsLockFill className="secure-url" />
          <p>{webpages[currentFile].url}</p>
        </div>
      </div>
      {displayPage()}
    </div>
  )
}