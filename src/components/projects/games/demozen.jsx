import React from 'react';
import demozenPic1 from '../../../images/projects/demozen/demozen.png';
import demozenPic2 from '../../../images/projects/demozen/demozen2.png';
import axisPic from '../../../images/projects/demozen/axis.png';
import levelLayoutPic from '../../../images/projects/demozen/level-layout.png';
import levelSolarSysPic from '../../../images/projects/demozen/level-solar-system.png';
import solarSysPic from '../../../images/projects/demozen/solar-system.png';
import worldDiagramPic from '../../../images/projects/demozen/world-diagram.png';


class Demozen extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h4><a href="https://brittany-hasty.github.io/demozen/" className="link-left">Website</a></h4>
                        <h4><a href="https://github.com/Brittany-Hasty/demozen" className="link-right">Github</a></h4>
                        <h2><strong>Demozen</strong></h2><br/>
                        <p>"Demozen is a three-dimensional abstract world 
                            exploration game using three.js and WebGL. 
                            It was styled as a fusion between <a href="https://en.wikipedia.org/wiki/Synthwave">Synthwave</a> and <a href="https://en.wikipedia.org/wiki/Demoscene">Demoscene</a> culture, 
                            where 'Demozen' refers to an in-game character, a.k.a. the denizen of the Demoscene."</p>
                    </div>
                </div>
                <div className="container-fluid bg-3 text-center">
                    <div className="row">
                        <div className="col-sm-1" />
                        <div className="col-sm-5 text-center">
                            <h4 className="list-title">Loading / Start Screen:</h4>
                            <div className="expand-element">
                                <img src={demozenPic2} alt="demozen starting point"/>
                            </div>
                            <br /><h4 className="list-title">Opening Scene:</h4>
                            <div className="expand-element">
                                <img src={demozenPic1} alt="demozen loading screen" />
                            </div>
                        </div>
                        <div className="col-sm-5 text-left">
                            <h4 className="list-title">Overview:</h4>
                            <ul>
                                Please check back later for description.
                            </ul><br/>
                            <h4 className="list-title">Technology:</h4>
                            <ul>
                                <li>Javascript</li>
                                <li>Three.js</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Webpack</li>
                                <li>Git</li>
                            </ul>
                            <div className="expand-element">
                                {/* <img src={} alt="" /> */}
                            </div>

                        </div>
                        <div className="col-sm-1" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Demozen;