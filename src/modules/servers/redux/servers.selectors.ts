import { createSelector } from "@reduxjs/toolkit";

export const getServers = createSelector(
    (state) => state.servers.servers,
    (servers) => servers,
);
