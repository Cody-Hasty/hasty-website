import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link to="/" className="navbar-brand">Brittany Hasty's Portfolio</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to="/">Home</Link></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">About
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/about/resume">Resume</Link></li>
                                    <li><Link to="/about/repository">Repository</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Projects
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/projects/apps">Apps</Link></li>
                                    <li><Link to="/projects/websites">Websites</Link></li>
                                    <li><Link to="/projects/games">Games</Link></li>
                                    <li><Link to="/projects/others">Others</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/about/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;