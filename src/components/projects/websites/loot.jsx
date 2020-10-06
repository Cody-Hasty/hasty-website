import React from 'react';
import ReactGA from 'react-ga'
import lootPic1 from '../../../images/projects/loot.png';

class Loot extends React.Component {
    componentDidMount() {
        ReactGA.pageview(window.location.pathname)
    }

    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h4><a href="https://lootncraft.net/" className="link-left">Website</a></h4>
                        <h4><a href="https://github.com/Brittany-Hasty/loot" className="link-right">Github</a></h4>
                        <h2><strong>LOOT</strong></h2><br/>
                        <p>"If you've ever played a video game that is based on crafting - you've probably needed to make some item using a set of ingredients. You then have to take that item, and use a number of them to make some greater object later, but alas - you already have a few of the items you need- what more do you need to collect to make that item you want?"</p>
                    </div>
                </div>
                    <div className="container-fluid bg-3 text-center">
                        <div className="row">
                            <div className="col-sm-1" />
                            <div className="col-sm-5 text-center">
                                <h4 className="list-title">Home Page:</h4>
                                <div className="expand-element">
                                    <img src={lootPic1} alt="loot homepage" />
                                </div>
                            </div>
                            <div className="col-sm-5 text-left">
                                <h4 className="list-title">Concept:</h4>
                                <ul>

                                </ul><br />
                                <h4 className="list-title">Technology:</h4>
                                <ul>

                                </ul>
                            </div>
                            <div className="col-sm-1" />
                        </div>
                    </div>
            </div>
        )
    }
}

export default Loot;