import * as React from "react";
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from "react-icons/ai"
import Projects from "./config/projects.json";

type ProjectType = Record<string, Record<"src" | "title", string>>

type ProjectPropTypes = History;

interface CodeStateType {
    src: string,
    title: string,
}

class Code extends React.Component<ProjectPropTypes, CodeStateType> {
    projects: ProjectType = Projects;

    constructor(props: ProjectPropTypes) {
        super(props);
        this.state = {
            "src": "https://github1s.com/Brittany-Hasty/hasty-website",
            "title": "My Website"
        }
    }

    switchSource(key: string) {
        this.setState({
            "src": this.projects[key].src,
            "title": this.projects[key].title
        })
    }

    render() {
        return (
            <div className="code">
                <div className="top-bar">
                    <div className="tabs">
                        {Object.entries(Projects).map((val) => (
                            <div key={val[0]} onClick={() => this.switchSource(val[0])} className={val[1].src===this.state.src ? "active-tab" : "inactive-tab"}>
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