import { Review } from './types'
import { RootState } from '../../store'
import { createSelector } from '@reduxjs/toolkit'
import { RequestStatus } from '../../constants'

const selectReviews = ({ reviews }: RootState) => reviews

export const selectStatus = createSelector(
  selectReviews,
  ({ status }): RequestStatus => status
)
export const selectError = createSelector(
  selectReviews,
  ({ error }): unknown => error
)
export const selectItems = createSelector(
  selectReviews,
  ({ items }): Review[] => items
)

export const selectTotal = createSelector(
  selectReviews,
  ({ total }): number => total
)
