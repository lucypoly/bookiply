import React from 'react'
import { Pagination as MuiPagination } from '@mui/material'

interface PaginationProps {
  current: number
  pages: number
  onChange(page: number): void
}

export const Pagination: React.FC<PaginationProps> = ({
  current,
  pages,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<unknown>, page: number) => {
    onChange(page)
  }

  return (
    <MuiPagination
      count={pages}
      shape="rounded"
      color="primary"
      page={current}
      onChange={handleChange}
    />
  )
}
