"use client"

import { useSearchParams } from "next/navigation"

export default function BlogIndex({ blogPages }: { blogPages: JSX.Element[] }) {
  const searchParams = useSearchParams()
  const pageParam = searchParams.get('page')
  const currentPage = pageParam ? parseInt(pageParam) : 1

  return (
    <>{blogPages[currentPage - 1]}</>
  )
}