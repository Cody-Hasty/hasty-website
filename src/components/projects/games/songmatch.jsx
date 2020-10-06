import React from 'react';
import ReactGA from 'react-ga'
import songMatchPic1 from '../../../images/projects/songMatchIcon.png';
import songMatchPic2 from '../../../images/projects/Sample-Dialogue.png';
import songMatchPic3 from '../../../images/projects/Song-Match.png';

class SongMatch extends React.Component {
    componentDidMount() {
        ReactGA.pageview(window.location.pathname)
    }

    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h2><strong>Song Match</strong></h2><br/>
                        <p>"As part of a coding interview, I was asked to develop an Alexa skill for the Amazon Echo. Given a user's favorite music artist, the skill would then ask 3 questions which would select that artist's song that best matches the user's personality."</p>
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
                            <h4 className="list-title">Concept:</h4>
                            <ul>

                            </ul><br/>
                            <h4 className="list-title">Technology:</h4>
                            <ul>
                                
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