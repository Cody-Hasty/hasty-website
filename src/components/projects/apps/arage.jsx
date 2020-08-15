import React from 'react';

class Arage extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h2><strong>ARAGE</strong></h2>
                    </div>
                </div>
                <br></br>
                <div className="container text-center">
                    <iframe width="800" height="500" src="https://www.youtube.com/embed/c86a7WR4E2Y" title="ARAGE Pitch" frameBorder="0"></iframe>
                    <br></br>
                    <iframe width="800" height="500" src="https://www.youtube.com/embed/Oegt41RhrHo" title="ARAGE Demo" frameBorder="0"></iframe>
                </div>
            </div>
        )
    }
}

export default Arage;