import React from 'react';
import { Link } from 'react-router-dom';
import lootLogo from '../../../images/projects/loot.png'
import queryLogo from '../../../images/projects/query.png'

class Websites extends React.Component {
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
                                <h3 className="page-link"><strong>LOOT</strong></h3>
                                <img src={lootLogo} className="img-responsive" alt="" />
                            </Link>
                            <br />
                            <p>LOOT is </p>
                        </div>
                        <div className="col-sm-6 text-center">
                            <Link to="/projects/websites/query">
                                <h3 className="page-link"><strong>Query</strong></h3>
                                <img src={queryLogo} className="img-responsive" alt="" />
                            </Link>
                            <br />
                            <p>Query is </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Websites;