import React from 'react';
import { Link } from 'react-router-dom';
import qwertyLogo from '../../../images/projects/qwerty.png'

class Others extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h2><strong>Other Projects</strong></h2>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 text-center">
                            <Link to="/projects/others/qwerty">
                                <h3 className="page-link"><strong>QWERTY</strong></h3>
                                <img src={qwertyLogo} className="img-responsive" alt="" />
                            </Link>
                            <br />
                            <p>QWERTY is </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Others;