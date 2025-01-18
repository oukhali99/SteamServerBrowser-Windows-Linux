const { contextBridge, ipcRenderer } = require('electron')
const steamServerQuery = require("steam-server-query");

contextBridge.exposeInMainWorld('electron', {
    steamServerQuery
})
