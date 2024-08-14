"use client"

import React, { useState, useEffect } from 'react'
import { Repo, User } from "@/types/gitApi"
import Image from 'next/image'
import ProjectRowComponent from './project-row'
import { FaGithub } from 'react-icons/fa'
import { fetchGithubProjects, fetchGithubUser } from '@/utils/gitApiUtils'

export default function ProjectsIndexComponent() {
  const [user, setUser] = useState<User | null>(null)
  const [repos, setRepos] = useState<Repo[] | null>(null)

  useEffect(() => {
    fetchGithubProjects().then(res => {
      setRepos(res)
    })
    fetchGithubUser().then(res => {
      setUser(res)
    })
  }, [])

  function displayGithubUser() {
    return (
      user && (
        <div className='flex flex-col sm:flex-row items-center w-full border-0 justify-center mb-4'>
          <div className="card w-80 max-w-80 lg:w-96 lg:max-w-96 bg-transparent border-0 text-center">
            <Image src={user.avatar_url} className='card-img-top max-w-max mt-4 mx-auto' alt="github profile pic" width={200} height={200} />
            <div className='card-body mx-auto'>
              <div className='flex flex-row gap-2'>
                <FaGithub className='h-8 w-8' /><h3 className='flex-shrink-0'>{user.login}</h3>
              </div>
              <p>{`Public Repositories: ${user.public_repos}`}</p>
            </div>
          </div>
          <div className='w-80 max-w-80 lg:w-96 lg:max-w-96 flex flex-col justify-center content-center'>
            <h3>Github Projects</h3>
            <p>Here are some of the side projects I&apos;ve been working on in my free time</p>
          </div>
        </div>
      )
    )
  }

  function displayGithubProjects() {
    return (
      repos && repos.length > 0 && (
        <ul className="list-group list-group-horizontal flex-wrap justify-center py-4">
          {displayGithubUser()}
          {repos.map(repo => (
            <ProjectRowComponent repo={repo} key={repo.id} />
          ))}
        </ul>
      )
    )
  }

  return (
    <div className='rounded-bottom'>
      {displayGithubProjects()}
    </div>
  )
}