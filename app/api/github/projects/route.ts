import { type NextRequest, NextResponse } from "next/server";

function projectsSortedBy(sortPreference: string, projects: any[]) {
  if (sortPreference === "updated") {
    return projects.sort((a, b) => new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime())
  } else if (sortPreference === "created") {
    return projects.sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
  } else if (sortPreference === "alphabetical") {
    return projects.sort((a, b) => a.name.localeCompare(b.name))
  } else {
    return projects
  }
}

export async function GET(request: NextRequest, response: NextResponse) {
  const projects = await fetch("https://api.github.com/users/Cody-Hasty/repos")
    .then(res => res.json())
    .catch(() => null)
  return NextResponse.json(projectsSortedBy("updated", projects), { status: projects ? 200 : 500 })
}