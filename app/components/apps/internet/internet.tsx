"use client"

import React, { useState } from 'react'
import Webpages from '@/config/webpages.json'
import Link from '@/utils/Link'
import { AiFillCloseCircle } from "react-icons/ai"
import { BsLockFill } from "react-icons/bs"
import Image from 'next/image'

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

  const displayTabs = () => {
    return (
      <div className="tabs">
        {Object.entries(webpages).map((val) => (
          <div
            key={val[0]}
            onClick={() => setCurrentFile(val[0])}
            className={currentFile === val[0] ? "active-tab" : "inactive-tab"}>
            <Image
              src={`/images/${val[1].icon}`}
              alt={val[1].icon} width={24} height={20} style={{ objectFit: "contain" }} />
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
        <Image src={`/images/${src}`}
          alt={currentFile} className="webpage-img" width={782} height={10000} style={{ height: "fit-content" }} />
      )
    } else if (type === "embed") {
      return (
        <div>
          {wpIdx?.banner ? (
            <Image
              src={`/images/${wpIdx.banner}`}
              alt={wpIdx.banner} className="banner" width={361} height={125} />
          ) : (
            <div />
          )}
          <div className="webpage-embed">
            {src.map((x) => (
              <embed src={x} title={currentFile} key={x} />
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
