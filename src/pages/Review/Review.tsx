import React from 'react'

import { TOTAL_SCORE } from '../../constants'
import { Review as ReviewProps } from '../../features/reviews/types'
import ThumbUp from '../../images/thumb-up.svg'
import ThumbDown from '../../images/thumb-down.svg'
import { getChannelImage, getDate } from './utils'

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
}) => (
  <div className={styles.review}>
    <div className={styles.title}>
      <div className={styles.score}>
        <span className={styles.curScore}>{score} </span>/ {TOTAL_SCORE}
      </div>
      <img
        className={styles.channel}
        src={getChannelImage(channel)}
        alt="channel"
      />
    </div>
    <h2 className={styles.headline}>{headline}</h2>
    {comment && <p className={styles.comment}>{comment}</p>}
    {positiveFeedback && (
      <div className={styles.feedback}>
        <img src={ThumbUp} alt="positive" />
        <p className={styles.positiveFeedback}>{positiveFeedback}</p>
      </div>
    )}
    {negativeFeedback && (
      <div className={styles.feedback}>
        <img src={ThumbDown} alt="negative" />
        <p className={styles.negativeFeedback}>{negativeFeedback}</p>
      </div>
    )}
    <p className={styles.author}>{author}</p>
    <p className={styles.publishedAt}>Reviewed {getDate(publishedAt)}</p>
    <div className={styles.line} />
  </div>
)
