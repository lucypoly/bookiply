import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Paper } from '@mui/material'

import { filterReviews } from '../../features/reviews/slice'
import {
  selectError,
  selectItems,
  selectStatus,
} from '../../features/reviews/selectors'
import { Review } from '../Review/Review'
import { Channel } from '../../constants'

import styles from './Reviews.module.css'

export const Reviews: React.FC = () => {
  const dispatch = useDispatch()
  const items = useSelector(selectItems)
  const status = useSelector(selectStatus)
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(
      filterReviews({
        filters: { channels: [Channel.HOLIDU, Channel.AIRBNB], score: 3.1 },
      })
    )
  }, [])

  if (items?.length) {
    console.log(items)
    console.log(status)
    console.log(error)
  }

  return (
    <Fragment>
      <p className={styles.id}>ID: 091021</p>
      <h1 className={styles.header}>La Casa de las Flores</h1>
      <Paper className={styles.paper}>
        <h1 className={styles.title}>{items?.length} reviews</h1>
        {items.map((item) => (
          <Review
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
      </Paper>
    </Fragment>
  )
}
