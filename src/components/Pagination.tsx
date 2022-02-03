import React, { useCallback } from 'react'
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
  const handleChange = useCallback(
    (e: React.ChangeEvent<unknown>, page: number) => {
      onChange(page)
    },
    [onChange]
  )

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
