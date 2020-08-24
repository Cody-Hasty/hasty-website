import React from 'react';

class SongMatch extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h2><strong>Song Match</strong></h2>
                        <br/>
                        <p>"As part of a programming challenge, I was asked to develop an Alexa skill for the Amazon Echo. Given a user's favorite music artist, the skill would then ask 3 questions which would select that artist's song that best matches the user's personality."</p>
                    </div>
                </div>
                <div className="container text-center">
                    <iframe width="800" height="500" src="https://www.youtube.com/embed/ZhkyZi1b0qo" title="Song Match Demo" frameborder="0"></iframe>
                </div>
                <br/>
            </div>
        )
    }
}

export default SongMatch;