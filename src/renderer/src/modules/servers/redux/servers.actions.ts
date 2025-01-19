import { createAction } from "@reduxjs/toolkit";

import Server from "../classes/Server";
import * as serversSelectors from "./servers.selectors";
import { AppDispatch, RootState } from "@renderer/store";

export const fetchServersStart = createAction("servers/fetchServersStart");
export type FetchServersSuccessType = { servers: Server[] };
export const fetchServersSuccess = createAction<FetchServersSuccessType>(
    "servers/fetchServersSuccess"
);
export type FetchServersFailureType = { error: Error };
export const fetchServersFailure = createAction<FetchServersFailureType>(
    "servers/fetchServersFailure"
);

export const refreshServersStart = createAction("servers/refreshServersStart");
export type RefreshServersSuccessType = { servers: Server[] };
export const refreshServersSuccess = createAction<RefreshServersSuccessType>(
    "servers/refreshServersSuccess"
);
export type RefreshServersFailureType = { error: Error };
export const refreshServersFailure = createAction<RefreshServersFailureType>(
    "servers/refreshServersFailure"
);

export const fetchServers = () => async (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(fetchServersStart());
    try {
        const steamServerQuery = window.api.steamServerQuery;
        const serversIpAndPort = await steamServerQuery.queryMasterServer(
            "hl2master.steampowered.com:27011",
            steamServerQuery.REGIONS.ALL,
            { empty: 1, appid: 550 },
            30 * 1000,
            1
        );
        const servers: Server[] = serversIpAndPort.map(
            (serverIpAndPort) => new Server(serverIpAndPort)
        );
        dispatch(fetchServersSuccess({ servers }));
    } catch (error) {
        if (error instanceof Error) dispatch(fetchServersFailure({ error }));
    }
};

export const refreshServers = () => (dispatch: AppDispatch, getState: () => RootState) => {
    dispatch(refreshServersStart());
    try {
        const oldServers: Server[] = serversSelectors.getServersSelector(getState());
        const servers: Server[] = oldServers.map(
            (server) => new Server("refreshed-" + server.ipAndPort)
        );
        dispatch(refreshServersSuccess({ servers }));
    } catch (error) {
        if (error instanceof Error) dispatch(refreshServersFailure({ error }));
    }
};
