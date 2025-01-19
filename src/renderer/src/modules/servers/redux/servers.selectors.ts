import { RootState } from "@renderer/store";

export const getServersSelector = (state: RootState) => state.servers.servers;
export const getLoadingSelector = (state: RootState): boolean => state.servers.loading;
export const getErrorSelector = (state: RootState): Error | null => state.servers.error;
