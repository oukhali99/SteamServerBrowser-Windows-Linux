import { createAction, Dispatch } from "@reduxjs/toolkit";
import { getElectronWindow } from "modules/main";

import Server from "../classes/Server";

export const fetchServersStart = createAction("servers/fetchServersStart");
export type FetchServersSuccessType = { servers: Server[] };
export const fetchServersSuccess = createAction<FetchServersSuccessType>(
    "servers/fetchServersSuccess",
);
export type FetchServersFailureType = { error: Error };
export const fetchServersFailure = createAction<FetchServersFailureType>(
    "servers/fetchServersFailure",
);

export const refreshServersStart = createAction("servers/refreshServersStart");
export type RefreshServersSuccessType = { servers: Server[] };
export const refreshServersSuccess = createAction<RefreshServersSuccessType>(
    "servers/refreshServersSuccess",
);
export type RefreshServersFailureType = { error: Error };
export const refreshServersFailure = createAction<RefreshServersFailureType>(
    "servers/refreshServersFailure",
);

export const fetchServers = async (dispatch: Dispatch) => {
    dispatch(fetchServersStart());
    try {
        const serversIpAndPort = await getElectronWindow().steamServerQuery.queryMasterServer(
            "hl2master.steampowered.com:27011",
            getElectronWindow().steamServerQuery.REGIONS.ALL,
            { empty: 1, appid: 550 },
            30 * 1000,
            5000,
        );
        const servers: Server[] = serversIpAndPort.map(
            (serverIpAndPort) => new Server(serverIpAndPort),
        );
        dispatch(fetchServersSuccess({ servers }));
    } catch (error) {
        if (error instanceof Error) dispatch(fetchServersFailure({ error }));
    }
};
