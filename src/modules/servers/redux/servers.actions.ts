import { createAction } from "@reduxjs/toolkit";

import Server from "../classes/Server";

export const fetchServersStart = createAction("servers/fetchServersStart");
export type FetchServersSuccessType = { servers: Server[] };
export const fetchServersSuccess = createAction<FetchServersSuccessType>(
    "servers/fetchServersSuccess",
);
export type FetchServersFailureType = { error: any };
export const fetchServersFailure = createAction<FetchServersFailureType>(
    "servers/fetchServersFailure",
);

export const refreshServersStart = createAction("servers/refreshServersStart");
export type RefreshServersSuccessType = { servers: Server[] };
export const refreshServersSuccess = createAction<RefreshServersSuccessType>(
    "servers/refreshServersSuccess",
);
export type RefreshServersFailureType = { error: any };
export const refreshServersFailure = createAction<RefreshServersFailureType>(
    "servers/refreshServersFailure",
);
