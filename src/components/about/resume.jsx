import React from 'react';

class Resume extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="container-fluid bg-3 text-center">  
                    <br /><br />
                    <h2>My Resume</h2>
                    <br /><br />
                    <div className="document">
                        <iframe src="src/assets/resume.pdf" width="800" height="1000px"></iframe>
                    </div>
                    <br /><br />
                </div>
            </div>
        )
    }
}

export default Resume;