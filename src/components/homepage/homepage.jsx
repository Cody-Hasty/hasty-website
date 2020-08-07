import React from 'react';

class Homepage extends React.Component {
    render() {
        return (
            <div className="page">
                <div class="alert alert-info">
                    <strong>Site Changes!</strong> Website is currently being updated, changes should be completed by 8/14/2020. Please check back in later for full projects and their descriptions.
                </div>
                <div className="jumbotron">
                    <div className="container text-center">
                        <h1>My Portfolio</h1>
                        <p>I am a software engineer in San Francisco with experience in Javascript, Node.js, C++, C#, Unity, Ruby, Rails, Redux, React, MongoDB, PostgreSQL, Express, and more. I am most passionate about gaming and upcoming technology, and I'm ready to take them both to the next level. With me on your side, I'll make us the tech dream team that the world has been waiting for. </p>
                    </div>
                </div>

                <div className="container-fluid bg-3 text-center">    
                    <h3>Some of my Work</h3><br />
                    <div className="row">
                        <div className="col-sm-3">
                            <p>Demozen</p>
                            <img src="src/images/projects/demozen.png" className="img-responsive" style={{width: '100%'}} alt="Image" />
                        </div>
                        <div className="col-sm-3"> 
                            <p>LOOT</p>
                            <img src="src/images/projects/loot.png" className="img-responsive" style={{width: '100%'}} alt="Image" />
                        </div>
                        <div className="col-sm-3"> 
                            <p>Query</p>
                            <img src="src/images/projects/query.png" className="img-responsive" style={{width: '100%'}} alt="Image" />
                        </div>
                        <div className="col-sm-3">
                            <p>Song Match</p>
                            <img src="src/images/projects/songMatchIcon.png" className="img-responsive" style={{width: '100%'}} alt="Image" />
                        </div>
                    </div>
                </div><br />

                <div className="container-fluid bg-3 text-center">    
                <div className="row">
                    <div className="col-sm-3">
                        <p>Ultra Heated</p>
                        <img src="src/images/projects/ultraheated.png" className="img-responsive" style={{width: '100%'}} alt="Image" />
                    </div>
                    <div className="col-sm-3"> 
                        <p>ARPOM</p>
                            <img src="src/images/projects/arpom.png" className="img-responsive" style={{width: '100%'}} alt="Image" />
                    </div>
                    <div className="col-sm-3"> 
                        <p>ARAGE</p>
                            <img src="src/images/projects/arage.png" className="img-responsive" style={{width: '100%'}} alt="Image" />
                    </div>
                    <div className="col-sm-3">
                        <p>QWERTY</p>
                        <img src="src/images/projects/qwerty.png" className="img-responsive" style={{width: '100%'}} alt="Image" />
                    </div>
                </div>
                </div><br /><br />
            </div>
        )
    }
}

export default Homepage;