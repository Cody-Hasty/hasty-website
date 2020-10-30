import React from 'react';
import songMatchPic1 from '../../../images/projects/songmatch/songMatchIcon.png';
import songMatchPic2 from '../../../images/projects/songmatch/Sample-Dialogue.png';
import songMatchPic3 from '../../../images/projects/songmatch/Song-Match.png';

class SongMatch extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h2><strong>Song Match</strong></h2><br/>
                        <p>"Song Match is an Alexa skill for the Amazon Echo. 
                            Given a user's favorite music artist, the skill 
                            would then ask 3 questions which would select that 
                            artist's song that best matches the user's 
                            personality."</p>
                    </div>
                </div>
                <div className="container-fluid bg-3 text-center">
                    <div className="row">
                        <div className="col-sm-1" />
                        <div className="col-sm-5 text-center">
                            <h4 className="list-title">Logo:</h4>
                            <div className="expand-element">
                                <img src={songMatchPic1} alt="song match logo" />
                            </div>
                            <br /><h4 className="list-title">Dialogue Sample:</h4>
                            <div className="expand-tall-element">
                                <img src={songMatchPic2} alt="song match dialogue example" />
                            </div>
                            <br /><h4 className="list-title">Full Demo:</h4>
                            <div className="expand-element">
                                <iframe src="https://www.youtube.com/embed/ZhkyZi1b0qo" title="Song Match Demo" frameBorder="0" />
                            </div>
                        </div>
                        <div className="col-sm-5 text-left">
                            <h4 className="list-title">Overview:</h4>
                            <ul>
                                Please check back later for description.
                            </ul><br/>
                            <h4 className="list-title">Technology:</h4>
                            <ul>
                                <li>Alexa SDK</li>
                                <li>Spotify API</li>
                                <li>Alexa Developer Console</li>
                            </ul>
                        </div>
                        <div className="col-sm-1" />
                    </div>
                </div>
                <div className="container-fluid bg-3 text-center">
                    <div className="row">
                        <div className="col-sm-1" />
                        <div className="col-sm-10">
                            <h4 className="list-title">Full Dialogue Model:</h4>
                            <div className="expand-mega-element">
                                <img src={songMatchPic3} alt="song match dialogue graph" />
                            </div>                            
                        </div>
                        <div className="col-sm-1" />
                    </div>
                </div>
            </div>
        )
    }
}

export default SongMatch;