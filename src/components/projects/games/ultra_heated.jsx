import React from 'react';

class UltraHeated extends React.Component {
    render() {
        var gameInstance;
        
        return (
            <div className="page">
                <h2>Ultra Heated - 2D Unity Game</h2>
                <p>As part of a programming challenge, I was asked to create a 2-dimensional clone of the popular game "SuperHot". The physics of the game were entirely hard-coded, as the player's movement (or lack thereof!) determined the speed of the enemies and their projectiles.</p>
                <br></br>
                <h5>Press escape or F5 to exit fullscreen, game includes sound effects so please be prepared for audio!</h5>
                <br></br>

                <div className="content">
                    <script src="src/assets/TemplateData/UnityProgress.js" type="text/javascript"></script>
                    <script src="src/assets/Build/UnityLoader.js" type="text/javascript"></script>
                    {() => {gameInstance = UnityLoader.instantiate("gameContainer", "assets/Build/assets.json", {onProgress: UnityProgress});}}
                    <div id="gameContainer" className="content"></div>
                    <br />
                    <div id="gameFooter">
                        <img src="assets/TemplateData/webgl-logo.png" alt="UnityLogo" />&nbsp;
                        <img src="assets/TemplateData/fullscreen.png" alt="FullScreen" onclick={gameInstance.SetFullscreen(1)} />
                    </div>
                    <br />
                </div>
            </div>


        )
    }
}

export default UltraHeated;