"use client"

import { useSearchParams } from "next/navigation"
import { Suspense, useState } from "react"

export default function BlogIndex({ blogPages }: { blogPages: JSX.Element[] }) {
  const [currentPage, setCurrentPage] = useState(1)

  const PaginatedBlogPage = () => {
    const pageParam = useSearchParams().get('page')

    if (pageParam && isFinite(+pageParam)) {
      setCurrentPage(Number(pageParam))
    }

    return blogPages[currentPage - 1]
  }

  return (
    <Suspense>
      <PaginatedBlogPage />
    </Suspense>
  )
}