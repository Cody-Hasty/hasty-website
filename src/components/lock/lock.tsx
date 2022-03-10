import * as React from "react";
import ubuntuPic from '../../icons/ubuntu-distro.png';
import { Link } from 'react-router-dom';
import { BiUser } from "react-icons/bi";

class Lock extends React.Component {
    render() {
        return (
            <div id="lock-page">
                <div>
                    <Link to="/" className="lock-user-screen-listing">
                        <BiUser className="user-icon"/>
                        <p>Guest</p>
                    </Link>
                </div>
                <img src={ubuntuPic} alt="ubuntu" className="distro" />
            </div>
        )
    }
}

export default Lock;