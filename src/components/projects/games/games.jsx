import React from 'react';
import { Link } from 'react-router-dom';
import demozenLogo from '../../../images/projects/demozen.png'
import ultraheatedLogo from '../../../images/projects/ultraheated.png'
import songmatchLogo from '../../../images/projects/songMatchIcon.png'
import dicerollLogo from '../../../images/projects/diceroll.png'
import repeatthatLogo from '../../../images/projects/repeatthat.png';

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
                                <h3 className="h3-link">Demozen</h3>
                                <img src={demozenLogo} className="img-responsive" alt="demozen" />
                            </Link>
                            <br />
                            <p className="caption"><strong>Demozen</strong> is a three-dimensional 
                            abstract world exploration game using three.js and 
                            WebGL</p>
                        </div>
                        <div className="col-sm-6 text-center">
                            <Link to="/projects/games/ultraheated">
                                <h3 className="h3-link">Ultra Heated</h3>
                                <img src={ultraheatedLogo} className="img-responsive" alt="ultra heated" />
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
                                <h3 className="h3-link">Repeat That</h3>
                                <img src={repeatthatLogo} className="img-responsive" alt="repeat that" />
                            </Link>
                            <br />
                            <p className="caption"><strong>Repeat That</strong> is a 
                            repeat-the-sequence style memory game using vanilla 
                            DOM manipulation.</p>
                        </div>
                        <div className="col-sm-6 text-center">
                            <Link to="/projects/games/diceroll">
                                <h3 className="h3-link">Dice Roll</h3>
                                <img src={dicerollLogo} className="img-responsive" alt="dice roll" />
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
                                <h3 className="h3-link">Song Match</h3>
                                <img src={songmatchLogo} className="img-responsive" alt="song match" />
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