import React from 'react';
import ReactGA from 'react-ga'
import arpomPic1 from '../../../images/projects/arpom.png';

class Arpom extends React.Component {
    componentDidMount() {
        ReactGA.pageview(window.location.pathname)
    }

    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h2><strong>ARPOM</strong></h2>
                        <br />
                        <p>"ARPOM is an augmented reality app designed 
                        to help heavy equipment operators stay safe and 
                        easily access pre-operation checklists."</p>
                    </div>
                </div>
                <div className="container-fluid bg-3 text-center">
                    <div className="row">
                        <div className="col-sm-1" />
                        <div className="col-sm-5 text-center">
                            <h4 className="list-title">Logo:</h4>
                            <div className="expand-element">
                                <img src={arpomPic1} alt="arpom logo" />
                            </div>
                            <br /><h4 className="list-title">Product Pitch:</h4>
                            <div className="expand-element">
                                <iframe src="https://www.youtube.com/embed/whykdv8uMl4" title="ARPOM Demo" frameBorder="0" />
                            </div>
                        </div>
                        <div className="col-sm-5 text-left">
                            <h4 className="list-title">Concept:</h4>
                            <ul>

                            </ul><br />
                            <h4 className="list-title">Technology:</h4>
                            <ul>
                                <li>Unity with C# Scripting</li>
                                <li>Vuforia for Augmented Reality</li>
                                <li>Xcode and Android Studio for mobile app</li>
                            </ul>
                        </div>
                        <div className="col-sm-1" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Arpom;