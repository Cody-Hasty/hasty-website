import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { AiFillCloseCircle } from "react-icons/ai"
import emailList from "../../../assets/json/emails.json"
import EmailTree from "./emailTree"
import EmailType from "../../../types/emailType"
import { dateDisplay, compareDates} from '../../../utils/dateUtils'

export default function Email() {
  const defaultEmail = {
    to: "",
    from: "",
    subject: "",
    date: "",
    folder: "inbox",
    schedule: 0,
    read: 'y',
    description: ""   
  }

  const [emails, setEmails] = useState<EmailType[]>([])
  const [unread, setUnread] = useState(0)
  const [readEmails, setReadEmails] = useState<EmailType[]>([])
  const [currFolder, selectFolder] = useState("inbox")
  const [selectedEmail, selectEmail] = useState<EmailType>(
    emailList[0] || defaultEmail
  )

  useEffect(() => {
    setEmails([])
    setUnread(0)
    setReadEmails([])

    const scheduledEmails: NodeJS.Timeout[] = []

    const sendEmail = (email: EmailType, task: NodeJS.Timeout) => {
      email.date = new Date().toString()
      setEmails(prevState => [...prevState, email])
      setUnread(prevState => prevState + 1)
      const idx = scheduledEmails.indexOf(task)
      scheduledEmails.splice(idx, 1)
    }


    emailList.forEach((email: EmailType) => {
      if (email.schedule === 0) {
        if (email.date === ""){
          email.date = new Date().toString()
        }

        if (email.read === "y") {
          setReadEmails(prevState => [...prevState, email])
        }

        setEmails(prevState => [...prevState, email])        
      } else {
        const task: NodeJS.Timeout = setTimeout(() => {
          sendEmail(email, task)
        }, email.schedule)
        scheduledEmails.push(task)   
      }
    })

    return () => {
      scheduledEmails.forEach(task => {
        clearTimeout(task)
      })
    }
  }, [])

  const indexClick = (email: EmailType) => {
    if (!readEmails.includes(email)){
      setUnread(unread - 1)
      setReadEmails(readEmails.concat(email))
    }
    selectEmail(email)
  }
  
  const displayIndex = () => {
    return (
      <div className="email-index">
        <div className="email-idx-header">
          <p className="subject">Subject</p>
          <p className="author">Correspondents</p>
          <p className="date">Date</p>
        </div>
        <div className="email-list">
          {emails.filter(email => email.folder === currFolder)
            .sort((e1, e2) => compareDates(e1.date, e2.date))
            .map((email, idx) => (
              <div className={"single-email " + 
                (readEmails.includes(email) ? "read" : "unread")} key={idx} 
                onClick={() => indexClick(email)}>
              <p className="subject">{email.subject}</p>
              <p className="author">{email.from}</p>
              <p className="date">{dateDisplay(new Date(email.date))}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const displayEmailTextBody = (body: string) => {
    return body.split('\n').map((line, idx) => {
      const htmlSplitIdx = line.indexOf("[del]")
      const htmlSplitIdxEnd = line.lastIndexOf("[del]")
      
      if (htmlSplitIdx !== -1 && htmlSplitIdx !== htmlSplitIdxEnd) {
        const stringStart = line.slice(0, htmlSplitIdx)
        const stringMiddle = line.slice(htmlSplitIdx + 5, htmlSplitIdxEnd)
        const stringEnd = line.slice(htmlSplitIdxEnd + 5, line.length)

        return (
          <p key={idx}>
            {stringStart}
            <del>{stringMiddle}</del>
            {stringEnd}
            <br />
          </p>
        )
      } else {           
        return (
          <p key={idx}>
            {line}
            <br />
          </p>
        )
      }
    })
  }
  
  const displayShow = () => {
    return (
      <div className="email-show">
        <div className="email-show-info">
          <div>
            <strong>From: </strong>
            <p>{selectedEmail.from}</p>
          </div>
          <div>
            <strong>Subject: </strong>
            <p>{selectedEmail.subject}</p>
          </div>
          <div>
            <strong>To: </strong>
            <p>{selectedEmail.to}</p>
          </div>
          <div>
            <strong>Date: </strong>
            <p>{dateDisplay(new Date(selectedEmail.date))}</p>
          </div>
        </div>
        <div className="email-body-text">
          {displayEmailTextBody(selectedEmail.description)}
        </div>
      </div>
    )
  }
  
  return (
    <div className="email">
      <div className="top-bar">
        <div className="tabs">
          <p>Inbox - Brittany.R.Hasty@gmail.com</p>
        </div>
        <div className="exit-button" >
          <Link to="/">
            <AiFillCloseCircle className="exit-icon" />
          </Link>
        </div>
      </div>
      <div className="email-sidebar">
        <EmailTree unread={unread} changeFolder={selectFolder}/>
      </div>
      {displayIndex()}
      {emails.length > 0 ? 
        displayShow() : <div className="email-show" />}
    </div>
  )
}
