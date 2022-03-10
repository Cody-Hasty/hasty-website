import * as React from "react";
import { Link } from 'react-router-dom';
import { AiFillCloseCircle } from "react-icons/ai"
import githubPic from "../../images/github.png"
import { fetchRepoFromGit, Repo } from "./config/git-repo-api";
import { fetchUserFromGit, User } from "./config/git-user-api";

interface GithubStateTypes {
    user: User;
    repos: Repo[];
}

class Github extends React.Component<History, GithubStateTypes> {    
    componentDidMount() {
        fetchUserFromGit().then(data => this.setState({user: data}));
        fetchRepoFromGit().then(data => this.setState({repos: data}));
    }

    displayGithub() {
        const user = this.state?.user;
        return (
            !this.state?.user ? (
                <div className="github-frame">
                    <div className="github-profile" />
                    <div className="repo-index" />
                </div>
            ) : (
                <div className="github-frame">
                    <div className="github-profile">
                        <img src={user.avatar_url} alt="github-profile-pic"/>
                        <h3>{user.login}</h3>
                        <p className="note">"To see these repositories, try opening up my code editor in the sidebar!"</p>
                        <p>{`Public Repositories: ${user.public_repos}`}</p>
                    </div>
                    <div className="repo-index">
                        {this.displayRepos()}
                    </div>
                </div>
            )
        )
    }

    displayRepos() {
        const reposExist = !!this.state?.repos;
        return (
            reposExist ? (
                this.state.repos.map(repo => (
                    <ul className="single-repo" key={repo.name}>
                        <h3>{repo.name}</h3>
                        <p>
                            <strong>Created: </strong>
                            {new Date(repo.created_at).toDateString()}
                        </p>
                        <p>
                            <strong>Last Updated: </strong>
                            {new Date(repo.updated_at).toDateString()}
                        </p>
                        <p>
                            <strong>Language: </strong>
                            {(repo.language === null ? "Unknown" : repo.language)}
                        </p>
                        <p>
                            <strong>Description: </strong>
                            {(repo.description === null ? "None" : repo.description)}
                        </p>
                    </ul>
                ))
            ) : (
                <div></div>
            )
        )
    }

    render() {
        return (
            <div className="github">
                <div className="top-bar">
                    <div className="github-nav">
                        <img src={githubPic} alt="github icon"/>
                    </div>
                    <div className="exit-button" >
                        <Link to="/">
                            <AiFillCloseCircle className="exit-icon" />
                        </Link>
                    </div>
                </div>
                {this.displayGithub()}
            </div>
        )
    }
}

export default Github;