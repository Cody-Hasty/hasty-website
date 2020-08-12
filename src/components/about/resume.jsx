import React from 'react';
import resume from './resume.pdf';

class Resume extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="container-fluid bg-3 text-center">  
                    <br /><br />
                    <h2>My Resume</h2>
                    <br /><br />
                    <div className="document">
                        <iframe src={resume} width="800" height="1000px"></iframe>
                    </div>
                    <br /><br />
                </div>
            </div>
        )
    }
}

export default Resume;