import { configureStore } from "@reduxjs/toolkit";

import modules from "@renderer/modules";
import { thunk } from "redux-thunk";

const store = configureStore({
    reducer: modules,
    preloadedState: {},
    // Disable serializablecheck
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }).concat(thunk)
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export default store;
