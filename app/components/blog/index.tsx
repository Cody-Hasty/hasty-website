"use client"

import { useSearchParams } from "next/navigation"
import { Suspense } from "react"

export default function BlogIndex({ blogPages }: { blogPages: JSX.Element[] }) {
  const searchParams = useSearchParams()
  const pageParam = searchParams.get('page')
  const currentPage = pageParam ? parseInt(pageParam) : 1

  return (
    <Suspense>
      {blogPages[currentPage - 1]}
    </Suspense>
  )
}