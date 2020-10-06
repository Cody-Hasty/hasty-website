import React from 'react';
import ReactGA from 'react-ga'
import qwertyPic1 from '../../../images/projects/qwerty.png';

class Qwerty extends React.Component {
    componentDidMount() {
        ReactGA.pageview(window.location.pathname)
    }

    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h2><strong>QWERTY</strong></h2><br/>
                        <p>"This is a side project I have been working on in my free time. Once fully coded, QWERTY will be an interactive AI pet fox with the ability to learn new people, objects, and environments."</p>
                    </div>
                </div>
                <div className="container-fluid bg-3 text-center">
                    <div className="row">
                        <div className="col-sm-1" />
                        <div className="col-sm-5 text-center">
                            <h4 className="list-title">3D Model Overview:</h4>
                            <div className="expand-element">
                                <img src={qwertyPic1} alt="qwerty" />
                            </div>
                        </div>
                        <div className="col-sm-5 text-left">
                            <h4 className="list-title">Concept:</h4>
                            <ul>

                            </ul><br />
                            <h4 className="list-title">Technology:</h4>
                            <ul>
                                
                            </ul><br/>
                            <h4 className="list-title">Current 3D model:</h4>
                            <div className="expand-element">
                                <iframe src='https://render.githubusercontent.com/view/3d?url=https://raw.githubusercontent.com/brittany-hasty/hasty-website/master/src/components/projects/others/QWERTY.stl' title='QWERTY.stl' frameBorder="0" />
                            </div>
                        </div>
                        <div className="col-sm-1" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Qwerty;