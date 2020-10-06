import React from 'react';
import ReactGA from 'react-ga'

class Contact extends React.Component {
    componentDidMount() {
        ReactGA.pageview(window.location.pathname)
    }

    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h2><strong>Contact Information</strong></h2>
                    </div>
                </div>
                <div className="container text-center">
                    <h4><strong>Brittany Hasty</strong></h4>
                    <br />
                    <strong>Phone:</strong> 757-650-5676<br />
                    <strong>Email:</strong> <a href="mailto:Brittany.R.Hasty@gmail.com">Brittany.R.Hasty@gmail.com</a> <br />
                </div>
            </div>
        )
    }
}

export default Contact;