import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Paper } from '@mui/material'
import { nanoid } from 'nanoid'

import { fetchReviews, paginateReviews } from '../../features/reviews/slice'
import { selectItems, selectTotal } from '../../features/reviews/selectors'
import { Review } from '../Review'
import { Pagination } from '../../components/Pagination'

import styles from './Reviews.module.css'
import { PER_PAGE } from '../../constants'

export const Reviews: React.FC = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectItems)
  const total = useSelector(selectTotal)

  const [page, setPage] = useState(1)

  useEffect(() => {
    dispatch(fetchReviews())
    dispatch(paginateReviews({ page }))
  }, [])

  const handlePageChange = (curPage: number) => {
    setPage(curPage)
    dispatch(paginateReviews({ page: curPage }))
  }

  return (
    <Fragment>
      <p className={styles.id}>ID: 091021</p>
      <h1 className={styles.header}>La Casa de las Flores</h1>
      <Paper className={styles.paper}>
        <h1 className={styles.title}>{total} reviews</h1>
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
        <Pagination
          current={page}
          pages={total / PER_PAGE}
          onChange={handlePageChange}
        />
      </Paper>
    </Fragment>
  )
}
