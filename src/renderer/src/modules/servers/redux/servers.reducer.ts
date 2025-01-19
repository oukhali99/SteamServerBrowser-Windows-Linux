import { createReducer } from "@reduxjs/toolkit";

import * as serverActions from "./servers.actions";
import Server from "../classes/Server";

type InitialStateType = {
    servers: Record<string, Server>;
    loading: boolean;
    error: Error | null;
};

const initialState: InitialStateType = {
    servers: {},
    loading: false,
    error: null
};

export default createReducer(initialState, (builder) => {
    builder
        .addCase(serverActions.fetchServersStart, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(
            serverActions.fetchServersSuccess,
            (state, action: { payload: serverActions.FetchServersSuccessType }) => {
                const { servers }: serverActions.FetchServersSuccessType = action.payload;
                state.servers = servers;
                state.loading = false;
            }
        )
        .addCase(
            serverActions.fetchServersFailure,
            (state, action: { payload: serverActions.FetchServersFailureType }) => {
                const { error }: serverActions.FetchServersFailureType = action.payload;
                state.error = error;
                state.loading = false;
            }
        )
        .addCase(serverActions.refreshServersStart, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(serverActions.refreshServersSuccess, (state) => {
            state.loading = false;
        })
        .addCase(
            serverActions.refreshServersFailure,
            (state, action: { payload: serverActions.RefreshServersFailureType }) => {
                const { error }: serverActions.RefreshServersFailureType = action.payload;
                state.error = error;
                state.loading = false;
            }
        )
        .addCase(
            serverActions.refreshServerStart,
            (state, action: { payload: serverActions.RefreshServerStartType }) => {
                // Do nothing yet
            }
        )
        .addCase(
            serverActions.refreshServerSuccess,
            (state, action: { payload: serverActions.RefreshServerSuccessType }) => {
                const { server }: serverActions.RefreshServerSuccessType = action.payload;
                state.servers[server.ipAndPort] = server;
            }
        )
        .addCase(
            serverActions.refreshServerFailure,
            (state, action: { payload: serverActions.RefreshServerFailureType }) => {
                // Do nothing yet
            }
        );
});
