import * as serversActions from "../redux/servers.actions";
import * as serversSelectors from "../redux/servers.selectors";
import Server from "../classes/Server";
import { useAppDispatch, useAppSelector } from "@renderer/hooks";

const ServersRoot = () => {
    const dispatch = useAppDispatch();

    const isLoading = useAppSelector(serversSelectors.getLoadingSelector);
    const error: Error | null = useAppSelector(serversSelectors.getErrorSelector);
    const servers = useAppSelector(serversSelectors.getServersSelector);

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

            <table>
                <thead>
                    <tr>
                        <th>IP and Port</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.values(servers).map((server: Server) => (
                        <tr key={server.ipAndPort}>
                            <td>{server.ipAndPort}</td>
                            <td>{server.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ServersRoot;
