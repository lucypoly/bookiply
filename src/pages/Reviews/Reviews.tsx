import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { nanoid } from 'nanoid'

import { filterReviews, paginateReviews } from '../../features/reviews/slice'
import {
  selectFilters,
  selectItems,
  selectTotal,
} from '../../features/reviews/selectors'
import { Review } from '../Review'
import { ID, PER_PAGE } from '../../constants'
import { Filters, Pagination } from '../../components'
import { Filters as FiltersType } from '../../features/reviews/types'

import styles from './Reviews.module.css'

export const Reviews: React.FC = React.memo(() => {
  const dispatch = useDispatch()
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)
  const filtersState = useSelector(selectFilters)

  const [page, setPage] = useState(1)

  useEffect(() => {
    if (!items.length) {
      dispatch(filterReviews({ filters: filtersState }))
      dispatch(paginateReviews({ page }))
    }
  }, [dispatch, filtersState, items.length, page])

  const handlePageChange = useCallback(
    (value: number) => {
      setPage(value)
      dispatch(paginateReviews({ page: value }))
    },
    [dispatch]
  )

  const handleFiltersChange = useCallback(
    async (filters: FiltersType) => {
      setPage(1)
      await dispatch(filterReviews({ filters }))
      await dispatch(paginateReviews({ page: 1 }))
    },
    [dispatch]
  )

  return (
    <>
      <p className={styles.id}>ID: {ID}</p>
      <h1 className={styles.header}>La Casa de las Flores</h1>
      <div className={styles.paper}>
        {!!total && <h1 className={styles.title}>{total} reviews</h1>}
        <Filters onFiltersChange={handleFiltersChange} />
        {!!items.length ? (
          <div className={styles.reviews}>
            {items.map((item) => (
              <Review
                key={nanoid()}
                headline={item.headline}
                score={item.score}
                author={item.author}
                channel={item.channel}
                comment={item.comment}
                negativeFeedback={item.negativeFeedback}
                positiveFeedback={item.positiveFeedback}
                publishedAt={item.publishedAt}
              />
            ))}
            <div className={styles.pagination}>
              <Pagination
                current={page}
                pages={Math.ceil(total / PER_PAGE)}
                onChange={handlePageChange}
              />
            </div>
          </div>
        ) : (
          <p className={styles.empty}>No such reviews</p>
        )}
      </div>
    </>
  )
})
