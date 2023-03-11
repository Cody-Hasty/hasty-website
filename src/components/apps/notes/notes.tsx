import React from 'react'
import { Link } from 'react-router-dom'
import { AiFillCloseCircle } from "react-icons/ai"
import NoteType from '../../../types/noteType'
import noteList from "../../../assets/json/notes.json"

export default function Notes() {
  const notes: NoteType[] = noteList
  const url = "https://www.hastycreations.com/src/assets/images/notes"
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
        {notes.map((note: NoteType) => (
          <div className="notes-document">
            <h1 className="notes-header">{note.header}</h1>
            <hr />
            {note.body.map((paragraph) => (
              <p className='notes-paragraph'>{paragraph}</p>
            ))}
            {note.pictures && note.pictures.map((pic) => (
              <img className='notes-pic' src={`${url}/${pic.src}`} 
                alt={pic.alt} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
