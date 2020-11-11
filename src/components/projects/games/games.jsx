import React from 'react';
import { Link } from 'react-router-dom';
import demozenLogo from '../../../images/projects/demozen/thumbnail.png'
import ultraheatedLogo from '../../../images/projects/ultraheated/thumbnail.png'
import songmatchLogo from '../../../images/projects/songmatch/songMatchIcon.png'
import dicerollLogo from '../../../images/projects/diceroll/diceroll.png'
import repeatthatLogo from '../../../images/projects/repeatthat/thumbnail.png';

class Games extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h2><strong>Games</strong></h2>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 text-center">
                            <Link to="/projects/games/demozen">
                                <h3 className="h3-link">Demozen
                                    <img src={demozenLogo} className="img-responsive" alt="demozen" />
                                </h3>
                            </Link>
                            <br />
                            <p className="caption"><strong>Demozen</strong> is a three-dimensional 
                            abstract world exploration game using three.js and 
                            WebGL</p>
                        </div>
                        <div className="col-sm-6 text-center">
                            <Link to="/projects/games/ultraheated">
                                <h3 className="h3-link">Ultra Heated
                                    <img src={ultraheatedLogo} className="img-responsive" alt="ultra heated" />
                                </h3>
                            </Link>
                            <br />
                            <p className="caption"><strong>Ultra Heated</strong> is a 2-dimensional 
                            Unity game inspired by SUPERHOT, where time only 
                            moves when you do.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-6 text-center">
                            <Link to="/projects/games/repeatthat">
                                <h3 className="h3-link">Repeat That
                                    <img src={repeatthatLogo} className="img-responsive" alt="repeat that" />
                                </h3>
                            </Link>
                            <br />
                            <p className="caption"><strong>Repeat That</strong> is a 
                            repeat-the-sequence style memory game using vanilla 
                            DOM manipulation.</p>
                        </div>
                        <div className="col-sm-6 text-center">
                            <Link to="/projects/games/diceroll">
                                <h3 className="h3-link">Dice Roll
                                    <img src={dicerollLogo} className="img-responsive" alt="dice roll" />
                                </h3>
                            </Link>
                            <br />
                            <p className="caption"><strong>Dice Roll</strong> is an Alexa game where 
                            the goal is to roll the greatest score.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-6 text-center">
                            <Link to="/projects/games/songmatch">
                                <h3 className="h3-link">Song Match
                                    <img src={songmatchLogo} className="img-responsive" alt="song match" />
                                </h3>
                            </Link>
                            <br />
                            <p className="caption"><strong>Song Match</strong> is an Alexa skill 
                            that matches your personality with a song from your 
                            favorite artist.</p>
                        </div>
                        <div className="col-sm-3"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Games;