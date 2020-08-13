import React from 'react';
import { Link } from 'react-router-dom';
import demozenLogo from '../../../images/projects/demozen.png'
import ultraheatedLogo from '../../../images/projects/ultraheated.png'
import songmatchLogo from '../../../images/projects/songMatchIcon.png'

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
                                <h3 className="page-link"><strong>Demozen</strong></h3>
                                <img src={demozenLogo} className="img-responsive" alt="" />
                            </Link>
                            <br />
                            <p>Demozen is </p>
                        </div>
                        <div className="col-sm-6 text-center">
                            <Link to="/projects/games/ultraheated">
                                <h3 className="page-link"><strong>Ultra Heated</strong></h3>
                                <img src={ultraheatedLogo} className="img-responsive" alt="" />
                            </Link>
                            <br />
                            <p>Ultra Heated is </p>
                        </div>
                        <div className="col-sm-6 text-center">
                            <Link to="/projects/games/songmatch">
                                <h3 className="page-link"><strong>Song Match</strong></h3>
                                <img src={songmatchLogo} className="img-responsive" alt="" />
                            </Link>
                            <br />
                            <p>Song Match is </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Games;