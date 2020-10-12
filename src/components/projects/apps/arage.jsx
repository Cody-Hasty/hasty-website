import React from 'react';
import aragePic1 from '../../../images/projects/arage.png';

class Arage extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h2><strong>ARAGE</strong></h2><br/>
                        <p>"ARAGE is an instructional augmented reality app 
                        designed to aid repairmen (and repairwomen) in 
                        performing common repair procedures."</p>
                    </div>
                </div>
                <div className="container-fluid bg-3 text-center">
                    <div className="row">
                        <div className="col-sm-1" />
                        <div className="col-sm-5 text-center">
                            <h4 className="list-title">Logo:</h4>
                            <div className="expand-element">
                                <img src={aragePic1} alt="arage logo"/>
                            </div>
                        </div>
                        <div className="col-sm-5 text-left">
                            <h4 className="list-title">Concept:</h4>
                            <ul>

                            </ul><br/>
                            <h4 className="list-title">Technology:</h4>
                            <ul>
                                <li>C# Scripting</li>
                                <li>Unity</li>
                                <li>Vuforia</li>
                                <li>Augmented Reality</li>
                                <li>Xcode</li>
                                <li>Android Studio</li>
                                <li>Blender</li>
                                <li>Autodesk TinkerCAD</li>
                            </ul>
                        </div>
                        <div className="col-sm-1" />
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-sm-1" />
                        <div className="col-sm-5 text-center">
                            <h4 className="list-title">Product Pitch:</h4>
                            <div className="expand-element">
                                <iframe src="https://www.youtube.com/embed/c86a7WR4E2Y" title="ARAGE Pitch" frameBorder="0" />
                            </div>
                        </div>
                        <div className="col-sm-5 text-center">
                            <h4 className="list-title">Full Demo:</h4>
                            <div className="expand-element">
                                <iframe src="https://www.youtube.com/embed/Oegt41RhrHo" title="ARAGE Demo" frameBorder="0" />
                            </div>
                        </div>
                        <div className="col-sm-1" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Arage;