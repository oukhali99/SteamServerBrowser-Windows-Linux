import { ElectronAPI } from "@electron-toolkit/preload";
import * as steamServerQuery from "steam-server-query";

declare global {
    interface Window {
        electron: ElectronAPI;
        api: { steamServerQuery: typeof steamServerQuery };
    }
}
