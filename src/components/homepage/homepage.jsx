import React from 'react';
import { Link } from 'react-router-dom';
import demozenLogo from '../../images/projects/demozen.png'
import lootLogo from '../../images/projects/loot.png'
import queryLogo from '../../images/projects/query.png'
import songmatchLogo from '../../images/projects/songMatchIcon.png'
import ultraheatedLogo from '../../images/projects/ultraheated.png'
import arpomLogo from '../../images/projects/arpom.png'
import arageLogo from '../../images/projects/arage.png'
import qwertyLogo from '../../images/projects/qwerty.png'
import repeatthatLogo from '../../images/projects/repeatthat.png';
import dicerollLogo from '../../images/projects/diceroll.png';

class Homepage extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h1>Brittany <strong className="orange">Hasty</strong></h1>
                        <p>I am a software engineer in San Francisco with experience in Javascript, Node.js, C++, C#, Unity, Ruby, Rails, Redux, React, MongoDB, PostgreSQL, Express, and more. I am most passionate about gaming and upcoming technology, and I'm ready to take them both to the next level. With me on your side, I'll make us the tech dream team that the world has been waiting for. </p>
                    </div>
                </div>
                <div className="container-fluid bg-3 text-center">    
                    <h3 className="caption">Some of my work:</h3><br />
                    <div className="row">
                        <div className="col-sm-3">
                            <Link to="/projects/games/demozen">
                                <p>Demozen</p>
                                <div className="expand-element">
                                    <img src={demozenLogo} className="img-responsive" style={{width: '100%'}} alt="demozen" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-3"> 
                            <Link to="/projects/websites/loot">
                                <p>LOOT</p>
                                <div className="expand-element">
                                    <img src={lootLogo} className="img-responsive" style={{width: '100%'}} alt="loot" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-3"> 
                            <Link to="/projects/websites/query">
                                <p>Query</p>
                                <div className="expand-element">
                                    <img src={queryLogo} className="img-responsive" style={{width: '100%'}} alt="query" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-3">
                            <Link to="/projects/games/repeatthat">
                                <p>Repeat That</p>
                                <div className="expand-element">
                                    <img src={repeatthatLogo} className="img-responsive" style={{ width: '100%' }} alt="repeat that" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div><br />

                <div className="container-fluid bg-3 text-center">    
                    <div className="row">
                        <div className="col-sm-3">
                            <Link to="/projects/games/ultraheated">
                                <p>Ultra Heated</p>
                                <div className="expand-element">
                                    <img src={ultraheatedLogo} className="img-responsive" style={{width: '100%'}} alt="ultra heated" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-3"> 
                            <Link to="/projects/apps/arpom">
                                <p>ARPOM</p>
                                <div className="expand-element">
                                    <img src={arpomLogo} className="img-responsive" style={{width: '100%'}} alt="arpom" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-3"> 
                            <Link to="/projects/apps/arage">
                                <p>ARAGE</p>
                                <div className="expand-element">
                                    <img src={arageLogo} className="img-responsive" style={{width: '100%'}} alt="arage" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-3">
                            <Link to="/projects/others/qwerty">
                                <p>QWERTY</p>
                                <div className="expand-element">
                                    <img src={qwertyLogo} className="img-responsive" style={{width: '100%'}} alt="qwerty" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div><br /><br />

                <div className="container-fluid bg-3 text-center">
                    <div className="row">
                        <div className="col-sm-3"></div>
                        <div className="col-sm-3">
                            <Link to="/projects/games/songmatch">
                                <p>Song Match</p>
                                <div className="expand-element">
                                    <img src={songmatchLogo} className="img-responsive" style={{ width: '100%' }} alt="song match" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-3">
                            <Link to="/projects/games/diceroll">
                                <p>Dice Roll</p>
                                <div className="expand-element">
                                    <img src={dicerollLogo} className="img-responsive" style={{ width: '100%' }} alt="dice roll" />
                                </div>
                            </Link>
                        </div>
                        <div className="col-sm-3"></div>
                    </div>
                </div><br /><br />
            </div>
        )
    }
}

export default Homepage;