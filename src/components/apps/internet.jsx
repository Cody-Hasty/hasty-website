import React from 'react';
import Webpages from './config/webpages.json'
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from "react-icons/ai"
import { BsLockFill } from "react-icons/bs"

class Internet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "currentFile": "linkedin",
        }
    }

    displayTabs() {
        const currFile = this.state.currentFile;

        return (
            <div className="tabs">
                {Object.entries(Webpages).map((val) => (
                    <div
                        key={val[0]}
                        onClick={() => this.setState({"currentFile": val[0]})}
                        className={currFile === val[0] ? "active-tab" : "inactive-tab"}>
                        <img src={require(`../../images/${val[1].icon}`)} alt={val[1].icon}/>
                        <p>{val[1].title}</p>
                    </div>
                ))}
            </div>
        )
    }

    displayPage() {
        const currFile = this.state.currentFile;
        const wpIdx = Webpages[currFile]
        const type = wpIdx.type;
        const src = wpIdx.src;

        if(type === "img"){
            return (
                <img src={require(`../../images/${src}`)} alt={currFile} className="webpage-img"/>
            )
        } else if (type === "embed") {
            return (
                <div>
                    {wpIdx?.banner ? (
                        <img src={require(`../../images/${wpIdx.banner}`)} 
                            alt={wpIdx.banner} className="banner" />
                    ) : (
                        <div />
                    )}
                    <div className="webpage-embed">
                        {src.map((x) => (
                            <embed src={x} title={this.state.currentFile} />
                        ))}
                    </div>
                </div>
            )
        }

    }

    render() {
        return (
            <div className="internet">
                <div className="internet-nav">
                    <div className="top-bar">
                        {this.displayTabs()}
                        <div className="exit-button" >
                            <Link to="/">
                                <AiFillCloseCircle className="exit-icon" />
                            </Link>
                        </div>
                    </div>
                    <div className="internet-url">
                        <BsLockFill className="secure-url" />
                        <p>{Webpages[this.state.currentFile].url}</p>
                    </div>
                </div>
                {this.displayPage()}
            </div>
        )
    }
}

export default Internet;