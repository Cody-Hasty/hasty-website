import React from 'react';
import { ImageGroup, Image } from 'react-fullscreen-image';
import diceRollPic from '../../../images/projects/diceroll/diceroll.png';

class DiceRoll extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h2><strong>Dice Roll</strong></h2><br />
                        <p>"Dice Roll is an Alexa skill for the Amazon Echo. 
                            Upon rolling the dice, the number the player rolls 
                            is added to their score. However, I added a spin on 
                            it and made them D&D dice - so rolling a twenty 
                            doubles the player's score and rolling a one resets 
                            their score to zero."</p>
                    </div>
                </div>
                <div className="container-fluid bg-3 text-center">
                    <div className="row">
                        <div className="col-sm-1" />
                        <div className="col-sm-5 text-center">
                            <h4 className="list-title">Logo:</h4>
                            <div className="fullscreen-container expand-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={diceRollPic} alt="dice roll logo" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                            {/* <br /><h4 className="list-title">Full Demo:</h4> */}
                            {/* <div className="expand-element">
                                <iframe src="https://www.youtube.com/embed/ZhkyZi1b0qo" title="Song Match Demo" frameBorder="0" />
                            </div> */}
                        </div>
                        <div className="col-sm-5 text-left">
                            <h4 className="list-title">Overview:</h4>
                            <ul>
                                Please check back later for description.
                            </ul><br />
                            <h4 className="list-title">Technology:</h4>
                            <ul>
                                <li>Alexa SDK</li>
                                <li>Alexa Developer Console</li>
                                <li>DynamoDB</li>
                                <li>AWS S3</li>
                            </ul>
                        </div>
                        <div className="col-sm-1" />
                    </div>
                </div>
            </div>
        )
    }
}

export default DiceRoll;