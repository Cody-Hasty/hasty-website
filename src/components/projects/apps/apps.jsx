import React from 'react';
import { Link } from 'react-router-dom';
import arpomLogo from '../../../images/projects/arpom.png'
import arageLogo from '../../../images/projects/arage.png'

class Apps extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h2><strong>Apps</strong></h2>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 text-center">
                            <Link to="/projects/apps/arpom">
                                <h3 className="normal-link">ARPOM</h3>
                                <img src={arpomLogo} className="img-responsive" alt="arpom logo" />
                            </Link>
                            <br/>
                            <p><strong>ARPOM</strong> is an augmented reality 
                                app designed to help heavy equipment operators 
                                stay safe and easily access pre-operation 
                                checklists.</p>
                        </div>
                        <div className="col-sm-6 text-center">
                            <Link to="/projects/apps/arage">
                                <h3 className="normal-link">ARAGE</h3>
                                <img src={arageLogo} className="img-responsive" alt="arage logo" />
                            </Link>
                            <br/>
                            <p><strong>ARAGE</strong> is an instructional 
                            augmented reality app designed to aid repairmen 
                            (and repairwomen) in performing common repair 
                            procedures.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Apps;