import React from 'react';
import { Link } from 'react-router-dom';
import lootLogo from '../../../images/projects/loot/thumbnail.png'
import queryLogo from '../../../images/projects/query/thumbnail.png'

class Websites extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
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
                                <h3 className="h3-link">LOOT
                                    <img src={lootLogo} className="img-responsive" alt="loot logo" />
                                </h3>
                            </Link>
                            <br />
                            <p className="caption"><strong>LOOT</strong> is a website based on 
                            building recursive recipe tree diagrams for gamers 
                            playing crafting video games.</p>
                        </div>
                        <div className="col-sm-6 text-center">
                            <Link to="/projects/websites/query">
                                <h3 className="h3-link">Query
                                    <img src={queryLogo} className="img-responsive" alt="query logo" />
                                </h3>
                            </Link>
                            <br />
                            <p className="caption"><strong>Query</strong> is a Q&A style website 
                            inspired by Quora</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Websites;