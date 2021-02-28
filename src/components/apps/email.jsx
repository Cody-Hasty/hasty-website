import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from "react-icons/ai"
import emailList from "./config/emails.json"
import EmailTree from "./emailTree"

class Email extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "emails": [],
            "scheduled": [],
            "unread": 0,
            "currFolder": "inbox",
            "selectedEmail": {},
            "readEmails": []
        }
        this.changeFolder = this.changeFolder.bind(this);
    }
    
    componentDidMount() {
        emailList.forEach((email, idx) => {
            if(idx === 0){this.setState({"selectedEmail": email})}
            if(email.schedule === 0){
                email.date = email.date === "" ? 
                new Date() : new Date(email.date)
                let emails = this.state.emails;
                if(email.read === "y"){this.state.readEmails.push(email)}
                this.setState({"emails": emails ? emails.concat(email) : [email]}) 
            } else {
                const task = setTimeout(() => this.sendEmail(email, task), email.schedule)
                this.state.scheduled.push(task);
            }
        })
    }
    
    componentWillUnmount() {
        this.state.scheduled.forEach(task => {
            clearTimeout(task)
        })
    }

    dateDisplay(date) {
        const h = date.getHours();
        const m = date.getMinutes();
        const parsed = date.getMonth() + 1 + "/" + date.getDate() + "/" 
            + date.getFullYear() + ", " + (h > 12 ? h - 12 : h) + ":" 
            + (m < 10 ? "0" + m : m) + (h > 11 ? " PM" : " AM");
        return parsed;
    }

    sendEmail(email, task) {
        const unread = this.state.unread;
        const idx = this.state.scheduled.indexOf(task)
        const emails = this.state.emails;
        email.date = new Date();
        this.setState({"emails": emails ? emails.concat(email) : [email]}) 
        this.setState({"unread": unread + 1})
        this.state.scheduled.splice(idx, 1)
    }

    indexClick(email) {
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
                        ).sort((e1, e2) => e1.date > e2.date).map((email, idx) => (
                        <div className={"single-email " + (rEmails.includes(email) ? "read" : "unread")} key={idx} 
                            onClick={() => this.indexClick(email, idx)}>
                            <p className="subject">{email.subject}</p>
                            <p className="author">{email.from}</p>
                            <p className="date">{this.dateDisplay(email.date)}</p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
    
    displayShow() {
        const email = this.state.selectedEmail;
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
                        <p>{this.dateDisplay(email.date)}</p>
                    </div>
                </div>
                <div className="email-body-text">
                    {email.description.split('\n').map((line, idx) => (
                        <p key={idx}>
                            {line} 
                            <br />
                        </p>
                    ))}
                </div>
            </div>
        )
    }

    changeFolder(folder) {
        this.setState({"currFolder": folder})
    }
    
    render() {
        const unread = this.state.unread > 0 ? this.state.unread.toString() : "";
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
                    <EmailTree unread={unread} changeFolder={this.changeFolder}/>
                </div>
                {this.displayIndex()}
                {this.state.emails.length > 0 ? 
                    this.displayShow() : <div className="email-show" />}
            </div>
        )
    }
}

export default Email;