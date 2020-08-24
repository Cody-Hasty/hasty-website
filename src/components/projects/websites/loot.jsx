import React from 'react';

class Loot extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <a href="https://lootncraft.net/" className="link-left">Website</a>
                        <a href="https://github.com/Brittany-Hasty/loot" className="link-right">Github</a>
                        <h2><strong>LOOT</strong></h2>
                        <br/>
                        <p>"If you've ever played a video game that is based on crafting - you've probably needed to make some item using a set of ingredients. You then have to take that item, and use a number of them to make some greater object later, but alas - you already have a few of the items you need- what more do you need to collect to make that item you want?"</p>
                    </div>

                    <div className="container-fluid bg-3 text-center">
                        <div className="row">
                            <div className="col-sm-2" />
                            <div className="col-sm-8">
                                <p></p>
                            </div>
                            <div className="col-sm-2" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Loot;