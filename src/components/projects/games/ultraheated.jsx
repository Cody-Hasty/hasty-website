import React from 'react';
import { ImageGroup, Image } from 'react-fullscreen-image';
import Unity, { UnityContent } from 'react-unity-webgl'
import thumbnail from '../../../images/projects/ultraheated/thumbnail.png';
import ultraHeatedPic1 from '../../../images/projects/ultraheated/ultraheated.png';

class UltraHeated extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
    render() {
        const unityContent = new UnityContent(
            "./Build/Compressed.json",
            "./Build/UnityLoader.js"
        );
        
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h2><strong>Ultra Heated</strong></h2><br/>
                        <p>"Ultra Heated is a 2-dimensional clone of the popular 
                            game "SuperHot". The physics of the game were 
                            entirely hard-coded, as the player's movement 
                            (or lack thereof!) determined the speed of the 
                            enemies and their projectiles."</p>
                    </div>
                </div>
                <div className="container-fluid bg-3 text-center">
                    <div className="row">
                        <div className="col-sm-1" />
                        <div className="col-sm-5 text-center">
                            <h4 className="list-title">Thumbnail:</h4>
                            <div className="fullscreen-container expand-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={thumbnail} alt="ultra heated thumbnail" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                            <br /><h4 className="list-title">Sample Level Start:</h4>
                            <div className="fullscreen-container expand-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={ultraHeatedPic1} alt="ultra heated level 5" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                        </div>
                        <div className="col-sm-5 text-left">
                            <h4 className="list-title">Overview:</h4>
                            <ul>
                                Please check back later for description.
                            </ul><br />
                            <h4 className="list-title">Technology:</h4>
                            <ul>
                                <li>Unity</li>
                                <li>C# Scripting</li>
                            </ul>
                        </div>
                        <div className="col-sm-1" />
                    </div>
                </div>
                <div className="container-fluid bg-3 text-center">
                    <div className="row">
                        <div className="col-sm-1" />
                        <div className="col-sm-10">
                            <br/><br/>
                            <h4 className="list-title">Full Game:</h4>
                            <br/><p>Game includes sound effects so please be prepared for audio!</p><br/>
                            <Unity unityContent={unityContent} />
                        </div>
                        <div className="col-sm-1" />
                    </div>
                </div>
            </div>
        )
    }
}

export default UltraHeated;