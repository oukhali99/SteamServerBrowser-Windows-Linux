import { configureStore } from "@reduxjs/toolkit";

import modules from "modules";

export default configureStore({
    reducer: modules,
    preloadedState: {},
    // Disable serializablecheck
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }) as unknown as any,
});
