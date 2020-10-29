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
                        <Link to="/" className="navbar-brand navlink">Brittany Hasty's Portfolio</Link>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><Link to="/" className="navlink">Home</Link></li>
                            <li className="dropdown">
                                <a className="dropdown-toggle navlink" data-toggle="dropdown" href="#">About
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/about/resume" className="navlink">Resume</Link></li>
                                    <li><Link to="/about/repository" className="navlink">Repository</Link></li>
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a className="dropdown-toggle navlink" data-toggle="dropdown" href="#">Projects
                                <span className="caret"></span></a>
                                <ul className="dropdown-menu">
                                    <li><Link to="/projects/apps" className="navlink">Apps</Link></li>
                                    <li><Link to="/projects/websites" className="navlink">Websites</Link></li>
                                    <li><Link to="/projects/games" className="navlink">Games</Link></li>
                                    <li><Link to="/projects/others" className="navlink">Others</Link></li>
                                </ul>
                            </li>
                            <li><Link to="/about/contact" className="navlink">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;