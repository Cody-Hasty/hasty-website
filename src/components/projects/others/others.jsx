import React from 'react';
import { Link } from 'react-router-dom';
import ionLogo from '../../../images/projects/ion/thumbnail.png';
import qwertyLogo from '../../../images/projects/qwerty/qwerty.png';

class Others extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    
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
                            <Link to="/projects/others/ion">
                                <h3 className="h3-link">Ion
                                    <img src={ionLogo} className="img-responsive" alt="ion ion"/>
                                </h3>
                            </Link>
                            <br />
                            <p className="caption"><strong>Ion</strong> is a 
                            math-intensive simulation of the electrons within a 
                            Lithium atom through MATLAB's Simulink.</p>
                        </div>
                        <div className="col-sm-6 text-center">
                            <Link to="/projects/others/qwerty">
                                <h3 className="h3-link">QWERTY
                                    <img src={qwertyLogo} className="img-responsive img-center" alt="qwerty" />
                                </h3>
                            </Link>
                            <br />
                            <p className="caption"><strong>QWERTY</strong> is an in-progress side 
                            project with the eventual goal being an autonomous 
                            interactive ai pet fox.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Others;