import React from 'react';
import oduBanner from '../../images/icons/odubanner.png';
import aaBanner from '../../images/icons/appacademybanner.png';

class Education extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h2><strong>Education</strong></h2>
                    </div>
                </div>
                <div className="container-fluid bg-3 text-center">
                    <div className="row">
                        <div className="col-sm-1" />
                        <div className="col-sm-5 text-left">
                            <a href="https://www.odu.edu/">
                                <img src={oduBanner} className="img-responsive banner" alt="odu banner" />
                            </a>
                            <p>
                                I have completed 93 credit hours in Computer 
                                Engineering / Modeling and Simulation 
                                Engineering including the following courses:
                            </p>
                            <ul>
                                <li>CS250 - Problem Solving and Programming</li>
                                <li>CS252 - Intro to Unix</li>
                                <li>CS330 - Object Oriented Programming and Design</li>
                                <li>CS361 - Advanced Data Structures and Algorithms</li>
                                <li>CS495 - Machine Learning for Pattern Recognition within Molecular Imaging</li>
                                <li>MSIM205 - Discrete Event Simulation</li>
                                <li>MSIM320 - Continuous Simulation</li>
                            </ul>
                        </div>
                        <div className="col-sm-5 text-left">
                            <a href="https://www.appacademy.io/">
                                <img src={aaBanner} className="img-responsive banner" alt="app academy banner" />
                            </a>
                            <p>Rigorous 1000+ hour software 
                                development course with a less than three 
                                percent acceptance rate which encompasses 
                                full-stack development: Ruby On Rails, SQL, 
                                Javascript, React, TDD, algorithms, design 
                                patterns, and programming best practices.
                            </p>
                            <ul>
                                <p></p>
                            </ul>
                        </div>
                        <div className="col-sm-1" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Education;