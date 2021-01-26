import React from 'react';
import { ImageGroup, Image } from 'react-fullscreen-image';
import thumbnail from '../../../images/projects/demozen/thumbnail.png';
import demozenPic1 from '../../../images/projects/demozen/demozen.png';
import demozenPic2 from '../../../images/projects/demozen/demozen2.png';
import axisPic from '../../../images/projects/demozen/axis.png';
import levelLayoutPic from '../../../images/projects/demozen/level-layout.png';
import levelSolarSysPic from '../../../images/projects/demozen/level-solar-system.png';
import solarSysPic from '../../../images/projects/demozen/solar-system.png';
import worldDiagramPic from '../../../images/projects/demozen/world-diagram.png';

class Demozen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showSpoilers: true
        }
        this.spoilerDisplay = this.spoilerDisplay.bind(this);
        this.buttonDisplay = this.buttonDisplay.bind(this);
        this.spoilerToggle = this.spoilerToggle.bind(this);
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    buttonDisplay() {
        return this.state.showSpoilers ? "Hide" : "Show"
    }

    spoilerDisplay() {
        const images = [
            axisPic,
            levelLayoutPic,
            levelSolarSysPic,
            solarSysPic,
            worldDiagramPic
        ]

        return this.state.showSpoilers ? (
            <div className="indented">
                <h4 className="list-title">World Design (Click for fullscreen):</h4>
                <div className="fullscreen-container expand-element">
                    <ImageGroup>
                        <ul className="images">
                            {images.map(i => (
                                <li key={i}>
                                    <Image src={i} alt="" />
                                </li>
                            ))}
                        </ul>
                    </ImageGroup>
                </div>
                <br /><h4 className="list-title">Plot Formulation:</h4>
                <p>
                    The most important first step was to figure out what sort of 
                    game I wanted to make. At this time, the idea of a Demoscene 
                    denizen was the main inspiration, and I came up with a few 
                    different ideas that could play on that concept. Most 
                    importantly, this entity would be multi-dimensional in 
                    nature, so it might mix familiar and unfamiliar elements 
                    into the game world. 
  
                </p>
                <p>
                    The first idea involved a long chase scene where the player 
                    character tries to evade the Demozen through a series of 
                    noneuclidian scenes, M. C. Escher's staircase, for instance. 
                    Ultimately, this idea did not work for the same reason that 
                    it interested me - it would not be intuitive to our 
                    problem-solving skills as humans, and it would defy 
                    three-dimensional geometry. This would have made for an 
                    irritating game, as the level layout would be impossible to 
                    navigate for the player.
                </p>
                <p>
                    The second idea took the non-euclidian scene idea and 
                    tweaked it - instead of objects that could not be 
                    implemented in three-dimensional space, I would use 
                    euclidian objects with unique properties. To do this, I 
                    wanted to model the entire game world on top of a mobius 
                    strip. With the game world figured out, this still left the 
                    question of how I would introduce Demozen.
                </p>
                <p>
                    Finally, the problem of Demozen's introduction and the game 
                    events were solved in the answer to one question; Why is the 
                    player in this dimension? Something powerful had to bring
                    them in and it definitely wanted them alive. A curious alien
                    creature might abduct the player to conduct research or 
                    learn more about humans. However, they must not be very 
                    experienced in introducing themselves to other species if 
                    this is their first option. But that would be strange, a 
                    multidimensional creature would not have any problems 
                    finding societies like ours, much like we don't have any 
                    problems finding individual doodles on a sheet of paper.
                    The other reason could be that the Demozen is an alien 
                    child, too young to know better, and still learning.
                    So they would be a student, and that would provide a reason
                    that our player might meet them. 
                </p>
                <p>
                    This premise stuck, and now Demozen is an alien child 
                    cheating on his science project with the help of the player,
                    an inhabitant of the solar system that Demozen needs a model
                    of before next [insert galactic time unit here].
                </p>
                <br /><h4 className="list-title">Implementation:</h4>
                <p>
                    Because the world is set on a mobius strip, originally I imported a
                    3D model mobius strip to act as the world surface. In order
                    for this to work as designed, gravity would have to be 
                    adjusted to always pull the player towards the center of the 
                    mobus strip, a very expensive computation. This was further 
                    complicated by the massive interior hole present in the 3D
                    model, which would have limited level space immensely, and 
                    made the world difficult to navigate. Instead, I set the 
                    game to teleport the player to the other end of the world at 
                    a certain threshold on both the x and y axis, effectively 
                    causing the infinite looping surface seen with mobius 
                    strips. (To visualize this better, think of the original 
                    Pacman arcade game.) However, I left the original mobius 
                    strip in the game to alude to the world's layout. 
                </p>
                <p>
                    Gravity in the world is exclusively downward, and collisions
                    only occur if there is an object under the player. 
                </p>
            </div>
        ) : (
            <div></div>
        )
    }

    spoilerToggle() {
        // this.setState({ showSpoilers: !this.state.showSpoilers })
    }

    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h4><a href="https://brittany-hasty.github.io/demozen/" className="link-left">Website</a></h4>
                        <h4><a href="https://github.com/Brittany-Hasty/demozen" className="link-right">Github</a></h4>
                        <h2><strong>Demozen</strong></h2><br/>
                        <p>"Demozen is a three-dimensional abstract world 
                            exploration game implemented with three.js and 
                            WebGL."</p>
                    </div>
                </div>
                <div className="container-fluid bg-3 text-center">
                    <div className="row">
                        <div className="col-sm-1" />
                        <div className="col-sm-5 text-center">
                            <h4 className="list-title">Thumbnail:</h4>
                            <div className="fullscreen-container expand-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={thumbnail} alt="demozen thumbnail" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                            <br /><h4 className="list-title">Loading / Start Screen:</h4>
                            <div className="fullscreen-container expand-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={demozenPic2} alt="demozen starting point" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                            <br /><h4 className="list-title">Opening Scene:</h4>
                            <div className="fullscreen-container expand-element">
                                <ImageGroup>
                                    <ul className="images">
                                        <li>
                                            <Image src={demozenPic1} alt="demozen loading screen" />
                                        </li>
                                    </ul>
                                </ImageGroup>
                            </div>
                        </div>
                        <div className="col-sm-5 text-left">
                            <h4 className="list-title">Overview:</h4>
                            <ul>
                                <p>
                                    Demozen is a three-dimensional abstract world
                                    exploration game implemented with three.js and 
                                    WebGL. It was styled as a fusion 
                                    between <a href="https://en.wikipedia.org/wiki/Synthwave">Synthwave</a> and <a href="https://en.wikipedia.org/wiki/Demoscene">Demoscene</a> culture
                                    , where 'Demozen' refers to an in-game 
                                    character, a.k.a. the denizen of the Demoscene.
                                </p>
                            </ul><br/>
                            <h4 className="list-title">Technology:</h4>
                            <ul>
                                <li>Javascript</li>
                                <li>Three.js</li>
                                <li>HTML5</li>
                                <li>CSS3</li>
                                <li>Webpack</li>
                                <li>Git</li>
                            </ul>
                            <div className="list-spoiler-box">
                                <h4 className="list-title">Details (Contains Spoilers!): </h4>
                                <button className="list-title-button" onClick={() => this.spoilerToggle()}>
                                    {this.buttonDisplay()}
                                </button>
                            </div>
                            <div className="spoiler-photobox">
                                {this.spoilerDisplay()}
                            </div>
                        </div>
                        <div className="col-sm-1" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Demozen;