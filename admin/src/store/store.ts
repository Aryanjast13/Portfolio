import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../store/slices/authslice"
import sidebarReducer from "./slices/sidebarSlice/index"
import projectReducer from "./slices/projectSlice/index"
import toolReducer from "./slices/toolsSlice/index"
// ...

export const store = configureStore({
  reducer: {
    auth: authSlice,
    sidebar: sidebarReducer,
    project: projectReducer,
    tool:toolReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
