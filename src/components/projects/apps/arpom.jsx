import React from 'react';
import { Link } from 'react-router-dom';
import { ImageGroup, Image } from 'react-fullscreen-image';
import arpomPic1 from '../../../images/projects/arpom/arpom.png';

class Arpom extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
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
                            <div className="fullscreen-container expand-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={arpomPic1} alt="arpom logo" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                            <br /><h4 className="list-title">Product Pitch:</h4>
                            <div className="expand-element">
                                <iframe src="https://www.youtube.com/embed/whykdv8uMl4" title="ARPOM Demo" frameBorder="0" />
                            </div>                            
                            <br />
                            <h4 className="list-title">Full Demo:</h4>
                            <div className="expand-element">
                                <iframe
                                    src="https://www.youtube.com/embed/29mmbOcuTRk"
                                    title="ARPOM Demo"
                                    frameBorder="0" />
                            </div>
                        </div>
                        <div className="col-sm-5 text-left">
                            <h4 className="list-title">Overview:</h4>
                            <ul>
                                <p>
                                    ARPOM (The Augmented Reality Pre-Operations 
                                    Maintenance Tool) is the result of a SBIR 
                                    (Small Business Initiative Research) grant 
                                    into the use of augmented reality within the 
                                    air force. Heavy equipment operators need to 
                                    complete checklists before operation can 
                                    take place according to OSHA (Occupational 
                                    Safety and Health Administration). Through 
                                    the app, operators would point their camera 
                                    at the equipment they were about to use, and 
                                    a checklist would appear for that specific 
                                    piece of equipment. As they completed each 
                                    checklist item, a simple white sphere would 
                                    hover beside the location on the equipment 
                                    of the next item on the checklist, along 
                                    with any specific instructions they might 
                                    need to complete that step.  
                                </p>
                                <p>
                                    ARPOM’s prototype was developed for a 
                                    standard Air Force forklift, through a 
                                    combination of Unity and Vuforia, an addon 
                                    for Unity that provided augmented reality 
                                    support. The biggest problem facing ARPOM's 
                                    development was detecting the heavy
                                    equipment, as Vuforia was made to detect 
                                    models smaller than a piece of printer 
                                    paper.  
                                </p>
                                <p> 
                                    As the only technical member of the team,
                                    I was in charge of setting up the augmented 
                                    reality detection and displays, integrating 
                                    it with a simple user interface, solving the 
                                    heavy equipment detection problem, and 
                                    exporting it as a cross-platform app for 
                                    iOS and Android devices. Due to the nature
                                    of the grant, I worked within strict 
                                    deadlines for different stages of its 
                                    development and provided deliverables on
                                    schedule. In addition, I developed a working
                                    prototype within a month and presented it at 
                                    a conference between our team and an Air 
                                    Force wing that was instrumental in its 
                                    further development.
                                </p>
                                <p>
                                    In the end, I met all of our deadlines and 
                                    devised a solution to detecting the heavy 
                                    equipment. By using a 20:1 model of the 
                                    forklift sold by the manufacturer, Vuforia
                                    was able to recognise the forklift and our 
                                    conference with the Air Force was a massive
                                    success. As a result, our team won another 
                                    SBIR grant (see <Link 
                                        to="/projects/apps/arage" 
                                       > ARAGE
                                    </Link>).
                                </p>
                            </ul><br />
                            <h4 className="list-title">Technology:</h4>
                            <ul>
                                <li>C# Scripting</li>
                                <li>Unity</li>
                                <li>Vuforia</li>
                                <li>Augmented Reality</li>
                                <li>Xcode</li>
                                <li>Android Studio</li>
                            </ul><br />
                            <h4 className="list-title">Award:</h4>
                            <ul>
                                <p>
                                    Phase I SBIR Research Grant (FA865019P5046): 
                                    AFWERX research grant awarded for the 
                                    development of the Augmented Reality 
                                    Pre-Operations Maintenance Tool (ARPOM) in 
                                    September 2018.
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

export default Arpom;