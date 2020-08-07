import React from 'react';

class SongMatch extends React.Component {
    render() {
        return (
            <div className="page">
                <h2>Song Match - Interactive Alexa Skill</h2>
                <p>As part of a programming challenge, I was asked to develop an Alexa skill for the Amazon Echo. Given a user's favorite music artist, the skill would then ask 3 questions which would select that artist's song that best matches the user's personality.</p>
                <br></br>
    
                <div className="content">
                    <iframe width="800" height="500" src="https://www.youtube.com/embed/ZhkyZi1b0qo" frameborder="0"></iframe>
                </div>
                <br></br>
            </div>
        )
    }
}

export default SongMatch;