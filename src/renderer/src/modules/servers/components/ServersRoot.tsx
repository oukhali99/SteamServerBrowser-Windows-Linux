import { useSelector } from "react-redux";

import * as serversActions from "../redux/servers.actions";
import * as serversSelectors from "../redux/servers.selectors";
import Server from "../classes/Server";
import { AppDispatch, RootState } from "@renderer/store";
import { useAppDispatch, useAppSelector } from "@renderer/hooks";

const ServersRoot = () => {
    const dispatch = useAppDispatch();

    const isLoading = useSelector(serversSelectors.getLoadingSelector);
    const error: Error | null = useSelector(serversSelectors.getErrorSelector);

    return (
        <div>
            {isLoading ? (
                "Loading"
            ) : (
                <div>
                    <button onClick={() => dispatch(serversActions.fetchServers())}>
                        Fetch Servers
                    </button>
                    <button onClick={() => dispatch(serversActions.refreshServers())}>
                        Refresh Servers
                    </button>
                </div>
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
