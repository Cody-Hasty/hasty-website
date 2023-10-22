"use client"

import React, { useState, useEffect } from 'react'
import Link from '@/utils/Link'
import { AiFillCloseCircle } from "react-icons/ai"
import githubPic from "@images/github.png"
import { fetchRepoFromGit } from "@/utils/gitRepoApiUtils"
import { fetchUserFromGit } from "@/utils/gitUserApiUtils"
import { Repo } from "@/types/gitRepoTypes"
import { User } from "@/types/gitUserTypes"
import Image from 'next/image'

export default function Github() {
  const [user, setUser] = useState<User | null>(null)
  const [repos, setRepos] = useState<Repo[] | null>(null)

  useEffect(() => {
    const fetchUserAbortController = new AbortController()
    const fetchRepoAbortController = new AbortController()
    // let userFetched = false
    // let repoFetched = false

    fetchUserFromGit(fetchUserAbortController.signal)
      .then(data => setUser(data))
      // .then(() => userFetched = true)
    fetchRepoFromGit(fetchRepoAbortController.signal)
      .then(data => setRepos(data))
      // .then(() => repoFetched = true)

    // return () => {
    //   if (!userFetched) {
    //     fetchUserAbortController.abort()
    //   }
    //   if (!repoFetched) {
    //     fetchRepoAbortController.abort()
    //   }
    // }
  }, [])

  const displayGithub = () => {
    return (
      !user ? (
        <div className="github-frame">
          <div className="github-profile" />
          <div className="repo-index" />
        </div>
      ) : (
        <div className="github-frame">
          <div className="github-profile">
              <Image src={user.avatar_url} alt="github-profile-pic" width={200} height={200} />
            <h3>{user.login}</h3>
              <p className="note">&quot;To see these repositories, try opening up my
                code editor in the sidebar!&quot;</p>
            <p>{`Public Repositories: ${user.public_repos}`}</p>
          </div>
          <div className="repo-index">
            {displayRepos()}
          </div>
        </div>
      )
    )
  }

  const displayRepos = () => {
    const reposExist = !!repos
    return (
      reposExist ? (
        repos.map(repo => (
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

  return (
    <div className="github">
      <div className="top-bar">
        <div className="github-nav">
          <Image src={githubPic} alt="github icon" width={32} height={32} />
        </div>
        <div className="exit-button">
          <Link to="/">
            <AiFillCloseCircle className="exit-icon" />
          </Link>
        </div>
      </div>
      {displayGithub()}
    </div>
  )
}
