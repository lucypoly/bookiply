import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

import styles from './List.module.css'

export const List: React.FC = () => (
  <Fragment>
    <h1 className={styles.header}>Reviews</h1>
    <Link to="/review/1" className={styles.button}>
      La Casa de las Flores
    </Link>
  </Fragment>
)
