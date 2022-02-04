import { configureStore } from '@reduxjs/toolkit'

import { reviewSlice } from './features/reviews/slice'

const store = configureStore({
  reducer: {
    reviews: reviewSlice.reducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export default store
