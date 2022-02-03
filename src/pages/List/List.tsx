import React from 'react'
import { Link } from 'react-router-dom'

import { ID } from '../../constants'

import styles from './List.module.css'

export const List: React.FC = () => (
  <>
    <h1 className={styles.header}>Reviews</h1>
    <Link to={`/review/${ID}`} className={styles.button}>
      La Casa de las Flores
    </Link>
  </>
)
