import { User } from "../types/gitUserTypes"

export function toUser(json: string): User {
  return JSON.parse(json)
}

export function userToJson(value: User): string {
  return JSON.stringify(value)
}

export function fetchUserFromGit(abortSignal: AbortSignal) {
  return fetch(("https://api.github.com/users/Cody-Hasty"), {
    signal: abortSignal
  })
    .then(res => res.text())
    .then(data => toUser(data))
}
