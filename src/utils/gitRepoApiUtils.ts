import { Repo } from "../types/gitRepoTypes"

export function toRepo(json: string): Repo[] {
  return JSON.parse(json)
}

export function repoToJson(value: Repo[]): string {
  return JSON.stringify(value)
}

export function fetchRepoFromGit(abortSignal: AbortSignal) {
  return fetch(("https://api.github.com/users/Brittany-Hasty/repos"), {
    signal: abortSignal
  })
    .then(res => res.text())
    .then(data => toRepo(data))
}
