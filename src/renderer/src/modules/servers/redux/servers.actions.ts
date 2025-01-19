import { createAction } from "@reduxjs/toolkit";

import Server from "../classes/Server";
import * as serversSelectors from "./servers.selectors";
import { AppDispatch, RootState } from "@renderer/store";

export const fetchServersStart = createAction("servers/fetchServersStart");
export type FetchServersSuccessType = { servers: Record<string, Server> };
export const fetchServersSuccess = createAction<FetchServersSuccessType>(
    "servers/fetchServersSuccess"
);
export type FetchServersFailureType = { error: Error };
export const fetchServersFailure = createAction<FetchServersFailureType>(
    "servers/fetchServersFailure"
);

export const refreshServersStart = createAction("servers/refreshServersStart");
export const refreshServersSuccess = createAction("servers/refreshServersSuccess");
export type RefreshServersFailureType = { error: Error };
export const refreshServersFailure = createAction<RefreshServersFailureType>(
    "servers/refreshServersFailure"
);

export type RefreshServerStartType = { server: Server };
export const refreshServerStart = createAction<RefreshServerStartType>(
    "servers/refreshServerStart"
);
export type RefreshServerSuccessType = { server: Server };
export const refreshServerSuccess = createAction<RefreshServerSuccessType>(
    "servers/refreshServerSuccess"
);
export type RefreshServerFailureType = { error: Error };
export const refreshServerFailure = createAction<RefreshServerFailureType>(
    "servers/refreshServerFailure"
);

export const fetchServers = () => async (dispatch: AppDispatch, getState: () => RootState) => {
    const steamServerQuery = window.api.steamServerQuery;

    dispatch(fetchServersStart());
    try {
        const serversIpAndPort = await steamServerQuery.queryMasterServer(
            "hl2master.steampowered.com:27011",
            steamServerQuery.REGIONS.ALL,
            { empty: 1, appid: 550 },
            10 * 1000,
            6000
        );
        const servers: Record<string, Server> = {};
        serversIpAndPort.forEach((ipAndPort) => (servers[ipAndPort] = new Server(ipAndPort)));
        dispatch(fetchServersSuccess({ servers }));
    } catch (error) {
        dispatch(fetchServersFailure({ error }));
    }
};

export const refreshServers = () => async (dispatch: AppDispatch, getState: () => RootState) => {
    const steamServerQuery = window.api.steamServerQuery;

    dispatch(refreshServersStart());
    try {
        const oldServers = serversSelectors.getServersSelector(getState());

        for (const ipAndPort in oldServers) {
            dispatch(refreshServerStart({ server: oldServers[ipAndPort] }));

            const server = oldServers[ipAndPort];
            try {
                const serverInfo = await steamServerQuery.queryGameServerInfo(ipAndPort, 30 * 1000);
                server.name = serverInfo.name;
                dispatch(refreshServerSuccess({ server }));
            } catch (error) {
                if (error instanceof Error) {
                    dispatch(refreshServerFailure({ error }));
                }
            }
        }

        dispatch(refreshServersSuccess());
    } catch (error) {
        if (error instanceof Error) dispatch(refreshServersFailure({ error }));
    }
};
