import {
  createAsyncThunk,
  createSlice,
  isPending,
  isRejected,
} from '@reduxjs/toolkit'

import { FILTER_REVIEWS, PAGINATE_REVIEWS } from './actionTypes'
import {
  FilterPayload,
  PaginationPayload,
  ReturnFilterPayload,
  ReturnPaginationPayload,
  Review,
  ReviewState,
} from './types'
import { RootState } from '../../store'
import { Channel, RequestStatus } from '../../constants'
import { getReviews } from './helpers'

export const paginateReviews = createAsyncThunk<
  ReturnPaginationPayload,
  PaginationPayload
>(PAGINATE_REVIEWS, async (payload, thunkApi) => {
  const { reviews } = thunkApi.getState() as RootState
  const { filters } = reviews
  const { page } = payload

  try {
    const response = await getReviews({ page, filters })
    return {
      data: response.data as Review[],
      page,
    }
  } catch (err) {
    return thunkApi.rejectWithValue({
      message: 'Failed to paginate reviews.',
    })
  }
})

export const filterReviews = createAsyncThunk<
  ReturnFilterPayload,
  FilterPayload
>(FILTER_REVIEWS, async (payload, thunkApi) => {
  const { filters } = payload

  try {
    const total = await getReviews({ page: null, filters })
    return {
      filters: filters,
      total: (total.data as Review[]).length,
    }
  } catch (err) {
    return thunkApi.rejectWithValue({
      message: 'Failed to filter reviews.',
    })
  }
})

export const initialReviewState: ReviewState = {
  items: [],
  total: 0,
  filters: {
    score: null,
    channels: [Channel.HOLIDU, Channel.BOOKINGCOM, Channel.AIRBNB],
  },
  page: null,
  status: RequestStatus.NotAsked,
  error: null,
}

const isRejectedAction = isRejected(paginateReviews, filterReviews)
const isPendingAction = isPending(paginateReviews, filterReviews)

export const reviewSlice = createSlice({
  name: 'reviews',
  initialState: initialReviewState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(paginateReviews.fulfilled, (state, { payload }) => {
      state.items = payload.data
      state.page = payload.page
      state.status = RequestStatus.Succeed
    })
    builder.addCase(filterReviews.fulfilled, (state, { payload }) => {
      state.filters = payload.filters
      state.total = payload.total
      state.status = RequestStatus.Succeed
    })
    builder.addMatcher(isRejectedAction, (state, { error }) => {
      state.error = error
      state.status = RequestStatus.Failed
    })
    builder.addMatcher(isPendingAction, (state) => {
      state.status = RequestStatus.Loading
    })
  },
})
