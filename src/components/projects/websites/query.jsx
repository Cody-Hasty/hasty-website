import React from 'react';
import queryPic1 from '../../../images/projects/query/query.png';
import queryPic2 from '../../../images/projects/query/query2.png';

class Query extends React.Component {
    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h4><a href="https://queerquery.herokuapp.com/#/" className="link-left">Website</a></h4>
                        <h4><a href="https://github.com/Brittany-Hasty/query" className="link-right">Github</a></h4>
                        <h2><strong>Query</strong></h2><br/>
                        <p>"Welcome to Que(e)ry - A safe place to ask open and honest questions (Quora inspired project)"</p>
                    </div>
                </div>
                <div className="container-fluid bg-3 text-center">
                    <div className="row">
                        <div className="col-sm-1" />
                        <div className="col-sm-5 text-center">
                            <h4 className="list-title">Home Page:</h4>
                            <div className="expand-element">
                                <img src={queryPic1} alt="query homepage" />
                            </div>
                            <br /><h4 className="list-title">Front Page:</h4>
                            <div className="expand-element">
                                <img src={queryPic2} alt="query frontpage" />
                            </div>
                        </div>
                        <div className="col-sm-5 text-left">
                            <h4 className="list-title">Overview:</h4>
                            <ul>
                                Please check back later for description.
                            </ul><br />
                            <h4 className="list-title">Technology:</h4>
                            <ul>
                                <li>Ruby on Rails</li>
                                <li>Javascript</li>
                                <li>React</li>
                                <li>Redux</li>
                                <li>CSS3</li>
                                <li>Webpack</li>
                                <li>PostgreSQL</li>
                                <li>Git</li>
                                <li>Heroku</li>
                            </ul>
                        </div>
                        <div className="col-sm-1" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Query;