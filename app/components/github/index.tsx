"use client"

import React, { useState, useEffect } from 'react'
import { Repo, User } from "@/types/gitApi"
import Image from 'next/image'
import CodeRepositoryComponent from './code-repository'
import { FaGithub } from 'react-icons/fa'
import { fetchGithubProjects, fetchGithubUser } from '@/utils/gitApiUtils'
import PlaceHolderComponent from "@/components/shared/placeholder"

export default function ProjectsIndexComponent() {
  const [user, setUser] = useState<User | null>(null)
  const [userDataFetched, setUserDataFetched] = useState(false)
  const [repos, setRepos] = useState<Repo[] | null>(null)
  const [repoDataFetched, setRepoDataFetched] = useState(false)

  const blankGithubUserBanner = (
    <div className='flex flex-row flex-wrap items-center w-full border-0 justify-center mb-4 gap-x-8'>
      <div className="card w-80 max-w-80 lg:w-96 lg:max-w-96 bg-transparent border-0 text-center items-center">
        <div className='card-img-top mt-4 max-w-[200px] h-[200px] placeholder rounded' />
        <div className='card-body flex flex-col gap-y-2 col-7'>
          <div className='flex flex-row gap-x-2 min-h-fit items-center'>
            <FaGithub className='h-8 w-8' /><PlaceHolderComponent />
          </div>
          <PlaceHolderComponent />
        </div>
      </div>
      <div className='w-80 max-w-80 lg:w-96 lg:max-w-96 flex flex-col justify-center content-center'>
        <h3>Github Projects</h3>
        <blockquote className="text-black/70 pl-6 border-l-[5px] border-l-black/10 my-[1.2em]">A collection of the side projects I&apos;ve been working on in my free time</blockquote>
      </div>
    </div>
  )

  useEffect(() => {
    fetchGithubProjects().then(res => {
      setRepos(res)
      setRepoDataFetched(true)
    })
    fetchGithubUser().then(res => {
      setUser(res)
      setUserDataFetched(true)
    })
  }, [])

  function displayGithubUser() {
    return !user || !userDataFetched ? blankGithubUserBanner : (
      <div className='flex flex-col sm:flex-row items-center w-full border-0 justify-center mb-4'>
        <div className="card w-80 max-w-80 lg:w-96 lg:max-w-96 bg-transparent border-0 text-center">
          <Image src={user.avatar_url} className='card-img-top max-w-max mt-4 mx-auto w-[200px] h-[200px]' alt="github profile pic" width={200} height={200} />
          <div className='card-body mx-auto'>
            <div className='flex flex-row gap-2 h-8'>
              <FaGithub className='h-8 w-8' /><h3 className='flex-shrink-0'>{user.login}</h3>
            </div>
            <p>{`Public Repositories: ${user.public_repos}`}</p>
          </div>
        </div>
        <div className='w-80 max-w-80 lg:w-96 lg:max-w-96 flex flex-col justify-center content-center'>
          <h3>Github Projects</h3>
          <blockquote className="text-black/70 pl-6 border-l-[5px] border-l-black/10 my-[1.2em]">A collection of the side projects I&apos;ve been working on in my free time</blockquote>
        </div>
      </div>
    )
  }

  function displayGithubProjects() {
    const projectRepos = repoDataFetched && repos && repos.length > 0 ? repos : Array(6).fill(null)
    return (
      <ul className="list-group list-group-horizontal flex-wrap justify-center py-4">
        {displayGithubUser()}
        {projectRepos.map((repo, i) => <CodeRepositoryComponent repo={repo} key={i} />)}
      </ul>
    )
  }

  return (
    <div className='rounded-bottom'>
      {displayGithubProjects()}
    </div>
  )
}