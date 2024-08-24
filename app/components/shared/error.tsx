"use client"
import ErrorPage from 'next/error'

type ErrorProps = {
  statusCode?: number
}

export default function Error({ statusCode }: ErrorProps) {
  return (
    <div className='container mx-auto sm:px-5 sm:pt-5'>
      <ErrorPage statusCode={statusCode || 500} />
    </div>
  )
}