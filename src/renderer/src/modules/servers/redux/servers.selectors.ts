import { createSelector } from "@reduxjs/toolkit";

import Server from "../classes/Server";

export const getServersSelector = (state: any): Server[] => state.servers.servers;
export const getLoadingSelector = (state: any): boolean => state.servers.loading;
export const getErrorSelector = (state: any): Error | null => state.servers.error;
