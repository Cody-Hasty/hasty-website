import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from "react-icons/ai"
import Projects from "./config/projects.json";

class Code extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "src": "https://github1s.com/Brittany-Hasty/hasty-website",
            "title": "My Website"
        }
    }

    switchSource(key) {
        this.setState({
            "src": Projects[key].src,
            "title": Projects[key].title
        })
    }

    render() {
        return (
            <div className="code">
                <div className="top-bar">
                    <div className="tabs">
                        {Object.entries(Projects).map((val) => (
                            <div onClick={() => this.switchSource(val[0])} className={val[1].src===this.state.src ? "active-tab" : "inactive-tab"}>
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
                <iframe src={this.state.src} title={this.state.title}/>
            </div>
        )
    }
}

export default Code;