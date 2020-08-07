import React from 'react';
import { Link } from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (

            <footer className="container-fluid text-center">
                <h4>About</h4>
                <p><em>My name is Brittany Hasty, and I am a software engineer in San Francisco. To learn more about what I do, please visit my "About" or "Projects" page. </em></p>
                <div>
                    <a href="https://github.com/Brittany-Hasty"><img src="src/images/icons/github.png" alt="GitHub" title="github" /></a>
                    <a href="https://www.linkedin.com/in/brittany-hasty-548317163/"><img src="src/images/icons/linkedin.png" alt="LinkedIn" title="linkedin" /></a>
                    <a href="https://www.youtube.com/channel/UCkQHfRS7yBZY6xArGbsF_RA"><img src="src/images/icons/youtube.png" alt="Youtube" title="youtube" /></a>
                </div>
                Copyright © 2020 <Link to="/">Hasty Creations</Link>
            </footer>
        )
    }
}

export default Footer;