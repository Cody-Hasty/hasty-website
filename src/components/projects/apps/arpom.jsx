import React from 'react';

class Arpom extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h2><strong>ARPOM</strong></h2>
                        <br />
                        <p>"ARPOM is an augmented reality app designed 
                        to help heavy equipment operators stay safe and 
                        easily access pre-operation checklists."</p>
                    </div>
                </div>
                <br></br>

                <div className="container text-center">
                    <iframe width="800" height="500" src="https://www.youtube.com/embed/whykdv8uMl4" title="ARPOM Demo" frameborder="0"></iframe>
                </div>
                <br></br>
            </div>
        )
    }
}

export default Arpom;