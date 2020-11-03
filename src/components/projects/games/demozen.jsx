import React from 'react';
import { ImageGroup, Image } from 'react-fullscreen-image';
import demozenPic1 from '../../../images/projects/demozen/demozen.png';
import demozenPic2 from '../../../images/projects/demozen/demozen2.png';
import axisPic from '../../../images/projects/demozen/axis.png';
import levelLayoutPic from '../../../images/projects/demozen/level-layout.png';
import levelSolarSysPic from '../../../images/projects/demozen/level-solar-system.png';
import solarSysPic from '../../../images/projects/demozen/solar-system.png';
import worldDiagramPic from '../../../images/projects/demozen/world-diagram.png';


class Demozen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showSpoilers: false
        }
        this.spoilerDisplay = this.spoilerDisplay.bind(this);
        this.buttonDisplay = this.buttonDisplay.bind(this);
        this.spoilerToggle = this.spoilerToggle.bind(this);
    }

    buttonDisplay() {
        return this.state.showSpoilers ? "Hide" : "Show"
    }

    spoilerDisplay() {
        const images = [
            axisPic,
            levelLayoutPic,
            levelSolarSysPic,
            solarSysPic,
            worldDiagramPic
        ]

        return this.state.showSpoilers ? (
            <ImageGroup>
                {images.map(i => (
                    <li key={i}>
                        <Image src={i} alt="" />
                    </li>
                ))}
            </ImageGroup>
        ) : (
            <div></div>
        )
    }

    spoilerToggle() {
        this.setState({ showSpoilers: !this.state.showSpoilers })
    }

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
                            <div className="fullscreen-container expand-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={demozenPic2} alt="demozen starting point" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                            <br /><h4 className="list-title">Opening Scene:</h4>
                            <div className="fullscreen-container expand-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={demozenPic1} alt="demozen loading screen" />
                                        </li>
                                    </ul>
                                </ImageGroup>
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
                        </div>
                        <div className="col-sm-1" />
                    </div>
                    {/* <div className="row">
                        <div className="col-sm-1" />
                        <div className="col-sm-10 text-center">
                            <div className="list-spoiler-box">
                                <h4 className="list-title">Details (Contains Spoilers!): </h4>
                                <button className="list-title-button" onClick={() => this.spoilerToggle()}>
                                    {this.buttonDisplay()}
                                </button>
                            </div>
                        </div> 
                        <div className="col-sm-1" />
                    </div>
                    <div className="row">
                        <div className="col-sm-1" />
                        <div className="col-sm-5 text-center">
                            <div className="spoiler-photobox">
                                {this.spoilerDisplay()}
                            </div>
                        </div>
                        <div className="col-sm-5 text-left">

                        </div> 
                        <div className="col-sm-1" />
                    </div> */}
                </div>
            </div>
        )
    }
}

export default Demozen;