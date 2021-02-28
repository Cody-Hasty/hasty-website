import React from 'react';
import FileList from './config/filelist.json';
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from "react-icons/ai"
import { VscFilePdf } from "react-icons/vsc"
import { BsImage } from "react-icons/bs"

class Files extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "currentFile": "resume"
        }
        this.iconMap = {
            "pdf": <VscFilePdf className="file-icon" />,
            "img": <BsImage className="file-icon" />
        }
    }

    displayIndex() {
        return (
            <div className="file-entries">
                {Object.entries(FileList).map((val) => (
                    <ul 
                        key={val[0]}
                        onClick={() => this.setState({"currentFile": val[0]})}
                        className={this.state.currentFile === val[0] ? "active-file" : "inactive-file"}>
                        {this.iconMap[val[1].icon]} 
                        <p className="file-name">{val[1].name}</p>
                    </ul>
                ))}
            </div>
        )
    }

    displayShow() {
        const currFile = this.state.currentFile;
        const flIdx = FileList[currFile];

        return (
            <div className="file-view">
                {flIdx.type === "pdf" ? (
                    <iframe 
                        src={require(`../../files/${flIdx.document}`)} 
                        title={flIdx.name}  />
                ) : (
                    <img 
                        src={require(`../../images/${flIdx.document}`)}  
                        alt={flIdx.name} />
                )}
            </div>
        )
    }

    render() {
        return (
            <div className="files">
                <div className="top-bar">
                    <h2 className="file-header">Files</h2>
                    <div className="exit-button" >
                        <Link to="/">
                            <AiFillCloseCircle className="exit-icon" />
                        </Link>
                    </div>
                </div>
                {this.displayIndex()}
                {this.displayShow()}
            </div>
        )
    }
}

export default Files;