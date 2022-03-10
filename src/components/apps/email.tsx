import * as React from "react";
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from "react-icons/ai"
import emailList from "./config/emails.json"
import EmailTree from "./emailTree"

interface EmailType {
    to: string;
    from: string;
    subject: string;
    date: string;
    folder: string;
    schedule: number;
    read: boolean | string;
    description: string;
}

interface EmailStateTypes {
    emails: EmailType[];
    scheduled: NodeJS.Timeout[];
    unread: number;
    currFolder: string;
    selectedEmail: EmailType;
    readEmails: EmailType[];
}

const blankEmail: EmailType = {
    to: "",
    from: "",
    subject: "",
    date: "",
    folder: "inbox",
    schedule: 0,
    read: 'y',
    description: ""
}

type EmailPropTypes = History;

class Email extends React.Component<EmailPropTypes, EmailStateTypes> {
    constructor(props: EmailPropTypes) {
        super(props);
        this.state = {
            "emails": [],
            "scheduled": [],
            "unread": 0,
            "currFolder": "inbox",
            "selectedEmail": blankEmail,
            "readEmails": []
        }
        this.changeFolder = this.changeFolder.bind(this);
    }
    
    componentDidMount() {
        emailList.forEach((email: EmailType, idx) => {
            if(idx === 0){this.setState({"selectedEmail": email})}
            if(email.schedule === 0){
                if (email.date === ""){
                    email.date = new Date().toString();
                }
                let emails = this.state.emails;
                if(email.read === "y"){this.state.readEmails.push(email)}
                this.setState({"emails": emails ? emails.concat(email) : [email]}) 
            } else {
                const task: NodeJS.Timeout = setTimeout(() => this.sendEmail(email, task), email.schedule)
                this.state.scheduled.push(task);
            }
        })
    }
    
    componentWillUnmount() {
        this.state.scheduled.forEach(task => {
            clearTimeout(task)
        })
    }

    dateDisplay(date: Date) {
        const h = date.getHours();
        const m = date.getMinutes();
        const parsed = date.getMonth() + 1 + "/" + date.getDate() + "/" 
            + date.getFullYear() + ", " + (h > 12 ? h - 12 : h) + ":" 
            + (m < 10 ? "0" + m : m) + (h > 11 ? " PM" : " AM");
        return parsed;
    }

    sendEmail(email: EmailType, task: NodeJS.Timeout) {
        const unread = this.state.unread;
        const idx = this.state.scheduled.indexOf(task)
        const emails = this.state.emails;
        email.date = new Date().toString();
        this.setState({"emails": emails ? emails.concat(email) : [email]}) 
        this.setState({"unread": unread + 1})
        this.state.scheduled.splice(idx, 1)
    }

    indexClick(email: EmailType) {
        const rEmails = this.state.readEmails
        if(!rEmails.includes(email)){
            this.setState({
                "unread": this.state.unread - 1, 
                "selectedEmail": email,
                "readEmails": rEmails ? rEmails.concat(email) : [email]
            })
        } else {
            this.setState({"selectedEmail": email});
        }
    }
    
    displayIndex() {
        const rEmails = this.state.readEmails;
        return (
            <div className="email-index">
                <div className="email-idx-header">
                    <p className="subject">Subject</p>
                    <p className="author">Correspondents</p>
                    <p className="date">Date</p>
                </div>
                <div className="email-list">
                    {this.state.emails.filter(
                        email => email.folder === this.state.currFolder
                        ).sort((e1, e2) => this.compareDates(e1.date, e2.date)).map((email, idx) => (
                        <div className={"single-email " + (rEmails.includes(email) ? "read" : "unread")} key={idx} 
                            onClick={() => this.indexClick(email)}>
                            <p className="subject">{email.subject}</p>
                            <p className="author">{email.from}</p>
                            <p className="date">{this.dateDisplay(new Date(email.date))}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }

    compareDates(d1: string | Date, d2: string | Date){
        if (d1 > d2){
            return 1;
        } else if (d1 === d2) {
            return 0;
        } else {
            return -1;
        }
    }

    displayEmailTextBody(body: string) {
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
    
    displayShow() {
        const email: EmailType = this.state.selectedEmail;
        return (
            <div className="email-show">
                <div className="email-show-info">
                    <div>
                        <strong>From: </strong>
                        <p>{email.from}</p>
                    </div>
                    <div>
                        <strong>Subject: </strong>
                        <p>{email.subject}</p>
                    </div>
                    <div>
                        <strong>To: </strong>
                        <p>{email.to}</p>
                    </div>
                    <div>
                        <strong>Date: </strong>
                        <p>{this.dateDisplay(new Date(email.date))}</p>
                    </div>
                </div>
                <div className="email-body-text">
                    {this.displayEmailTextBody(email.description)}
                </div>
            </div>
        )
    }

    changeFolder(folder: string) {
        this.setState({"currFolder": folder})
    }
    
    render() {
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
                    <EmailTree unread={this.state.unread} changeFolder={this.changeFolder}/>
                </div>
                {this.displayIndex()}
                {this.state.emails.length > 0 ? 
                    this.displayShow() : <div className="email-show" />}
            </div>
        )
    }
}

export default Email;