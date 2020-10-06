import React from 'react';
import ReactGA from 'react-ga'
import { Link } from 'react-router-dom';
import lootLogo from '../../../images/projects/loot.png'
import queryLogo from '../../../images/projects/query.png'

class Websites extends React.Component {
    componentDidMount() {
        ReactGA.pageview(window.location.pathname)
    }

    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h2><strong>Websites</strong></h2>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 text-center">
                            <Link to="/projects/websites/loot">
                                <h3 className="normal-link">LOOT</h3>
                                <img src={lootLogo} className="img-responsive" alt="loot logo" />
                            </Link>
                            <br />
                            <p>LOOT is a website based on building recursive recipe tree diagrams for gamers playing crafting video games.</p>
                        </div>
                        <div className="col-sm-6 text-center">
                            <Link to="/projects/websites/query">
                                <h3 className="normal-link">Query</h3>
                                <img src={queryLogo} className="img-responsive" alt="query logo" />
                            </Link>
                            <br />
                            <p>Query is a Q&A style website inspired by Quora</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Websites;