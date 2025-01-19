import React from "react";
import { useSelector, useDispatch } from "react-redux";

import * as serversActions from "../redux/servers.actions";
import * as serversSelectors from "../redux/servers.selectors";
import Server from "../classes/Server";

const ServersRoot = () => {
    const dispatch = useDispatch();

    const isLoading = useSelector(serversSelectors.getLoadingSelector);
    const error: Error | null = useSelector(serversSelectors.getErrorSelector);

    return (
        <div>
            {isLoading ? (
                "Loading"
            ) : (
                <button onClick={() => serversActions.fetchServers(dispatch)}>Fetch servers</button>
            )}
            {error && <div>{error.message}</div>}
            <ul>
                {useSelector(serversSelectors.getServersSelector).map((server: Server) => (
                    <li key={server.ipAndPort}>{server.ipAndPort}</li>
                ))}
            </ul>
        </div>
    );
};

export default ServersRoot;
