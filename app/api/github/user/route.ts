import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest, response: NextResponse) {
  const user = await fetch("https://api.github.com/users/Cody-Hasty")
    .then(res => res.json())
    .catch(() => null)
  return NextResponse.json(user, { status: user ? 200 : 500 })
}