import React from 'react';
import Unity, { UnityContent } from 'react-unity-webgl';

class UltraHeated extends React.Component {
    render() {
        const unityContent = new UnityContent(
            "./Build/assets.json",
            "./Build/UnityLoader.js"
        );
        
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h2><strong>Ultra Heated</strong></h2>
                    </div>
                </div>
                <p>As part of a programming challenge, I was asked to create a 2-dimensional clone of the popular game "SuperHot". The physics of the game were entirely hard-coded, as the player's movement (or lack thereof!) determined the speed of the enemies and their projectiles.</p>
                <br></br>
                <h5>Press escape or F5 to exit fullscreen, game includes sound effects so please be prepared for audio!</h5>
                <br></br>

                <div className="container">
                    <Unity unityContent={unityContent} />
                </div>
            </div>


        )
    }
}

export default UltraHeated;