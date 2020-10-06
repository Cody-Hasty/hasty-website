import React from 'react';
import ReactGA from 'react-ga'
import { Link } from 'react-router-dom';
import demozenLogo from '../../../images/projects/demozen.png'
import ultraheatedLogo from '../../../images/projects/ultraheated.png'
import songmatchLogo from '../../../images/projects/songMatchIcon.png'

class Games extends React.Component {
    componentDidMount() {
        ReactGA.pageview(window.location.pathname)
    }

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
                                <h3 className="normal-link">Demozen</h3>
                                <img src={demozenLogo} className="img-responsive" alt="demozen" />
                            </Link>
                            <br />
                            <p>Demozen is a three-dimensional abstract world exploration game using three.js and WebGL</p>
                        </div>
                        <div className="col-sm-6 text-center">
                            <Link to="/projects/games/ultraheated">
                                <h3 className="normal-link">Ultra Heated</h3>
                                <img src={ultraheatedLogo} className="img-responsive" alt="ultra heated" />
                            </Link>
                            <br />
                            <p>Ultra Heated is a 2-dimensional Unity game inspired by SUPERHOT, where time only moves when you do.</p>
                        </div>
                        <div className="col-sm-6 text-center">
                            <Link to="/projects/games/songmatch">
                                <h3 className="normal-link">Song Match</h3>
                                <img src={songmatchLogo} className="img-responsive" alt="song match" />
                            </Link>
                            <br />
                            <p>Song Match is an Alexa skill that matches your personality with a song from your favorite artist.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Games;