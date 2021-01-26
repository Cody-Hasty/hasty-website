import React from 'react';
import { Link } from 'react-router-dom';
import githubIcon from '../../images/icons/github.png';
import linkedinIcon from '../../images/icons/linkedin.png';
import youtubeIcon from '../../images/icons/youtube.png';

class Footer extends React.Component {
    render() {
        return (
            <footer className="container-fluid text-center">
                <h4 className="orange">About</h4>
                <p><em>My name is Brittany Hasty, and I am a software engineer in San Francisco. To learn more about what I've worked on, please visit my "About" or "Projects" page. </em></p>
                <div>
                    <a href="https://github.com/Brittany-Hasty"><img src={githubIcon} alt="GitHub" title="Github" /></a>
                    <a href="https://www.linkedin.com/in/brittany-hasty-548317163/"><img src={linkedinIcon} alt="LinkedIn" title="Linkedin" /></a>
                    <a href="https://www.youtube.com/channel/UCkQHfRS7yBZY6xArGbsF_RA"><img src={youtubeIcon} alt="Youtube" title="Youtube" /></a>
                </div>
                Copyright © 2021 <Link to="/" className="footer-link">Hasty Creations</Link>
            </footer>
        )
    }
}

export default Footer;