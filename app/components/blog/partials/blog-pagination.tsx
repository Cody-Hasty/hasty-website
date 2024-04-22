"use client"

import { PaginatedPostsType } from "@/types/pagination";
import { useRouter } from "next/navigation";
import Pagination from 'react-bootstrap/Pagination';

type BlogPaginationBarProps = {
  props: PaginatedPostsType
}

export default function BlogPaginationBar({ props }: BlogPaginationBarProps) {
  const include2PreviousPosts = !props.hasNextPage && props.currentPage > 2
  const include2NextPosts = !props.hasPrevPage && props.currentPage + 1 < props.totalPages
  const router = useRouter()
  const navigationFn = (page: number) => {
    router.push(`?page=${page}`)
  }

  return (
    <Pagination>
      <Pagination.First disabled={!props.hasPrevPage} onClick={() => navigationFn(1)} />
      <Pagination.Prev disabled={!props.hasPrevPage} onClick={() => navigationFn(props.currentPage - 1)} />
      {props.currentPage > 3 && <Pagination.Ellipsis />}
      {include2PreviousPosts && <Pagination.Item onClick={() => navigationFn(props.currentPage - 2)}>{props.currentPage - 2}</Pagination.Item>}
      {props.hasPrevPage && <Pagination.Item onClick={() => navigationFn(props.currentPage - 1)}>{props.currentPage - 1}</Pagination.Item>}
      <Pagination.Item active>{props.currentPage}</Pagination.Item>
      {props.hasNextPage && <Pagination.Item onClick={() => navigationFn(props.currentPage + 1)}>{props.currentPage + 1}</Pagination.Item>}
      {include2NextPosts && <Pagination.Item onClick={() => navigationFn(props.currentPage + 2)}>{props.currentPage + 2}</Pagination.Item>}
      {props.currentPage + 2 < props.totalPages && <Pagination.Ellipsis />}
      <Pagination.Next disabled={!props.hasNextPage} onClick={() => navigationFn(props.currentPage + 1)} />
      <Pagination.Last disabled={!props.hasNextPage} onClick={() => navigationFn(props.totalPages)} />
    </Pagination>
  )
}