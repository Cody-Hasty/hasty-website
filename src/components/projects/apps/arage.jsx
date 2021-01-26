import React from 'react';
import { Link } from 'react-router-dom';
import { ImageGroup, Image } from 'react-fullscreen-image';
import aragePic1 from '../../../images/projects/arage/arage.png';

class Arage extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
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
                            <div className="fullscreen-container expand-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={aragePic1} alt="arage logo" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                            <br />
                            <h4 className="list-title">Product Pitch:</h4>
                            <div className="expand-element">
                                <iframe 
                                src="https://www.youtube.com/embed/c86a7WR4E2Y" 
                                title="ARAGE Pitch" 
                                frameBorder="0" />
                            </div>
                            <br />
                            <h4 className="list-title">Full Demo:</h4>
                            <div className="expand-element">
                                <iframe 
                                src="https://www.youtube.com/embed/Oegt41RhrHo" 
                                title="ARAGE Demo" 
                                frameBorder="0" />
                            </div>
                        </div>
                        <div className="col-sm-5 text-left">
                            <h4 className="list-title">Overview:</h4>
                            <ul>
                                <p>
                                    ARAGE (The Augmented Reality Aerospace 
                                    Ground Equipment Tool) is the result of a 
                                    SBIR (Small Business Initiative Research) 
                                    grant into the use of augmented reality 
                                    within the air force. Similarly to its 
                                    predecessor (see <Link
                                        to="/projects/apps/arpom"
                                       > ARPOM
                                    </Link>), this app was designed to 
                                    facilitate ground crew working on heavy 
                                    equipment for the US Air Force. Unlike 
                                    ARPOM, ARAGE focused on the upkeep and 
                                    repair of equipment instead of pre-operation 
                                    checklists. In addition to Unity and 
                                    Vuforia, Blender was also used in this 
                                    project for the purpose of creating 
                                    animations of each step in the requested 
                                    procedure. 
                                </p>
                                <p>                                
                                    Upon pointing a mobile device at the 
                                    equipment, the various procedures for upkeep 
                                    and repair would be displayed as a list, and 
                                    once selected, the checklist for that 
                                    procedure would display, much like in ARPOM. 
                                    However, instead of displaying a floating 
                                    white sphere beside the next checklist item, 
                                    ARAGE would show an arrow directing the 
                                    technician to the appropriate area, and then 
                                    display the corresponding animation of the 
                                    current checklist item. 
                                </p>
                                <p>
                                    ARAGE’s prototype involved the photo of a 
                                    generator taken at an air force base and 
                                    displayed the procedure to replace a 
                                    split-rim tire on the equipment. When 
                                    pointed at the photo, different animations 
                                    would play, from the loosening of bolts on 
                                    the tire, to the disassembly of the removed 
                                    tire. 
                                </p>
                                <p>
                                    Similarly to ARPOM, my work on this effort 
                                    was the entire implementation of this idea,
                                    providing deliverables and updates on 
                                    schedule with predetermined deadlines, 
                                    setting up the augmented reality 
                                    detection and displays, integrating it with 
                                    a simple user interface, and exporting it as 
                                    a cross-platform app for iOS and Android 
                                    devices, with the addition of animating 
                                    every maintenance step within Blender. 
                                </p>
                                <p>
                                    In the end, I met all of our deadlines once 
                                    again, and reestablished our company as a 
                                    leader in emerging augmented reality 
                                    teaching technology.
                                </p>
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
                            </ul><br />
                            <h4 className="list-title">Award:</h4>
                            <ul>
                                <p>
                                    Phase I SBIR Research Grant (FA300219PA141): 
                                    Air Force Research Laboratory research grant 
                                    awarded for the development of the Augmented 
                                    Reality Aerospace Ground Equipment Tool 
                                    (ARAGE) in February 2019.
                                </p>
                            </ul>
                        </div>
                        <div className="col-sm-1" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Arage;