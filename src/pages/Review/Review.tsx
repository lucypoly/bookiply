import React from 'react'

import { TOTAL_SCORE } from '../../constants'
import { Review as ReviewProps } from '../../features/reviews/types'

import styles from './Review.module.css'

export const Review: React.FC<ReviewProps> = ({
  headline,
  comment,
  score,
  channel,
  positiveFeedback,
  negativeFeedback,
  author,
  publishedAt,
}) => {
  return (
    <div className={styles.review}>
      <div className={styles.score}>{`${score}/${TOTAL_SCORE}`}</div>
      <div className={styles.channel}>{channel}</div>
      <div className={styles.headline}>{headline}</div>
      <div className={styles.comment}>{comment}</div>
      <div className={styles.positiveFeedback}>{positiveFeedback}</div>
      <div className={styles.negativeFeedback}>{negativeFeedback}</div>
      <div className={styles.author}>{author}</div>
      <div className={styles.publishedAt}>{publishedAt}</div>
    </div>
  )
}
