import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from './slices/countriesSlice'
import countriesSlice from '../store/slices/countriesSliceTestTest'
import countriesAllSlice from './slices/countriesAllSlice'
// ...

export const store = configureStore({
  reducer: {
    countries : countriesSlice,
    countriesAll : countriesAllSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch