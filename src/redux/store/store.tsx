import {configureStore} from "@reduxjs/toolkit";
import {authLoginReducer} from "../reducer/userLogin";

export const store = configureStore({
  reducer: {
    userLogin: authLoginReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;