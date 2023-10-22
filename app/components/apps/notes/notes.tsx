import React from 'react'
import Link from '@/utils/Link'
import { AiFillCloseCircle } from "react-icons/ai"
import NoteType from '@/types/noteType'
import noteList from "@/assets/json/notes.json"
import Image from 'next/image'

export default function Notes() {
  const notes: NoteType[] = noteList
  return (
    <div className="notes">
      <div className="top-bar">
        <div className="tabs"></div>
        <div className="exit-button" >
          <Link to="/">
            <AiFillCloseCircle className="exit-icon" />
          </Link>
        </div>
      </div>
      <div className="notes-frame">
        {notes.map((note: NoteType, noteIdx) => (
          <div className="notes-document" key={"note-" + noteIdx}>
            <h1 className="notes-header">{note.header}</h1>
            <hr />
            {note.body.map((paragraph, paragraphIdx) => (
              <p className='notes-paragraph' key={"paragraph-" + paragraphIdx}>{paragraph}</p>
            ))}
            {note.pictures && note.pictures.map((pic, picIdx) => (
              <Image className='notes-pic' src={`/images/notes/${pic.src}`} key={"picture-" + picIdx}
                alt={pic.alt} width={pic.width} height={pic.height} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
