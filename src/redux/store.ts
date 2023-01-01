import { combineReducers, configureStore } from '@reduxjs/toolkit'
import studentReducer from './studentSlices';


export const rootReducer = combineReducers({
    students: studentReducer.reducer,
});


const store = configureStore({
  reducer: {
    students: rootReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const studentReducerState = (state: RootState) => {
  return state.students;
};

export default store;