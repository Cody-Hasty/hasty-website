import React from 'react';
import resume from './resume.pdf';

class Resume extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="container-fluid bg-3 text-center">  
                    <div className="jumbotron">
                        <div className="container text-center">
                            <h2><strong>My </strong><strong className="orange">Resume</strong></h2>
                        </div>
                    </div>
                    <div className="container-fluid bg-3 text-center">
                        <div className="row">
                            <div className="col-sm-2" />
                            <div className="col-sm-8">
                                <div className="expand-document">
                                    <iframe src={resume} title="Resume Window" width="800" height="1000px"></iframe>
                                </div>
                            </div>
                            <div className="col-sm-2" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Resume;