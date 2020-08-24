import React from 'react';

class Qwerty extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h2><strong>QWERTY</strong></h2>
                        <br/>
                        <p>"This is a side project I have been working on in my free time. Once fully coded, QWERTY will be an interactive AI pet fox with the ability to learn new people, objects, and environments."</p>
                    </div>
                </div>
                <br/>
                <div className="container text-center">
                    <p>Current 3D model</p>
                    <iframe height='420' width='620' frameborder='0' src='https://render.githubusercontent.com/view/3d?url=https://raw.githubusercontent.com/brittany-hasty/hasty-website/master/src/components/projects/others/QWERTY.stl' title='QWERTY.stl'></iframe>
                </div>
                <br/>
            </div>
        )
    }
}

export default Qwerty;