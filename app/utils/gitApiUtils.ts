import { Repo, User } from "@/types/gitApi"

export function repoNameTitle(name: string): string {
  return name.replace(/-|_/g, ' ').split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}

export function toRepo(json: string): Repo[] {
  return JSON.parse(json)
}

export function toUser(json: string): User {
  return JSON.parse(json)
}

export function repoToJson(value: Repo[]): string {
  return JSON.stringify(value)
}

export function userToJson(value: User): string {
  return JSON.stringify(value)
}

export async function fetchGithubProjects(): Promise<Repo[]> {
  return (await fetch("/api/github/projects")).json()
}

export async function fetchGithubUser(): Promise<User> {
  return (await fetch("/api/github/user")).json()
}