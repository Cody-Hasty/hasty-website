import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  const projects = await fetch("https://api.github.com/users/Cody-Hasty/repos")
    .then(res => res.json())
    .catch(() => null)
  return NextResponse.json(projects, { status: projects ? 200 : 500 })
}