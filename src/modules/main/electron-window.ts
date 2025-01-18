import steamServerQueryBase from "steam-server-query";

declare global {
    interface Window {
        electron: {
            steamServerQuery: typeof steamServerQueryBase;
        };
    }
}

export default () => window.electron;
