import React from 'react';

class Post extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: {},
        }

        // example
        // this.props.getPost().then(() => {
        //     this.setState({ post: this.props.post });
        // })

    }

    render() {
        return (
            <div className="page">
                <div className="jumbotron">
                    <div className="container text-center">
                        <h2><strong>Post Example</strong></h2>
                        <p>Work in progress</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Post;