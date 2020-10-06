import React from 'react';
import ReactGA from 'react-ga'

class Repository extends React.Component {
    componentDidMount() {
        ReactGA.pageview(window.location.pathname)
    }
    
    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h2><strong>My Github Repository</strong></h2>
                        <p>My open-source projects can be on my Github repository <a className="normal-link" href="https://github.com/Brittany-Hasty">here</a>.</p>
                        <br></br>
                    </div>
                </div>
            </div>
        )
    }
}

export default Repository;