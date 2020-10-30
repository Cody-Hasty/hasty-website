import React from 'react';
import repeatthatLogo from '../../../images/projects/repeatthat/repeatthat.png';

class RepeatThat extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h4><a href="https://repeat-that.herokuapp.com/#/" className="link-left">Website</a></h4>
                        <h4><a href="https://github.com/Brittany-Hasty/repeat-that" className="link-right">Github</a></h4>
                        <h2><strong>Repeat That</strong></h2><br />
                        <p>"Repeat That is a repeat-the-sequence style game, 
                            with each correctly repeated sequence adding one to 
                            the player's score."</p>
                    </div>
                </div>
                <div className="container-fluid bg-3 text-center">
                    <div className="row">
                        <div className="col-sm-1" />
                        <div className="col-sm-5 text-center">
                            <h4 className="list-title">Logo:</h4>
                            <div className="expand-element">
                                <img src={repeatthatLogo} alt="repeat that logo" />
                            </div>
                        </div>
                        <div className="col-sm-5 text-left">
                            <h4 className="list-title">Overview:</h4>
                            <ul>
                                Please check back later for description.
                            </ul><br />
                            <h4 className="list-title">Technology:</h4>
                            <ul>
                                <li>React</li>
                                <li>Redux</li>
                                <li>Node.js</li>
                                <li>MongoDB</li>
                                <li>Express</li>
                                <li>Heroku</li>
                                <li>Git</li>
                            </ul>
                        </div>
                        <div className="col-sm-1" />
                    </div>
                </div>
            </div>
        )
    }
}

export default RepeatThat;