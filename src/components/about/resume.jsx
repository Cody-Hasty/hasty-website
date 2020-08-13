import React from 'react';
import resume from './resume.pdf';

class Resume extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="container-fluid bg-3 text-center">  
                    <div className="jumbotron">
                        <div className="container text-center">
                            <h2><strong>My Resume</strong></h2>
                        </div>
                    </div>
                    <div className="document">
                        <iframe src={resume} title="Resume Window" width="800" height="1000px"></iframe>
                    </div>
                    <br /><br />
                </div>
            </div>
        )
    }
}

export default Resume;