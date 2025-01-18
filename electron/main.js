const { app, BrowserWindow } = require("electron");
const serve = require("electron-serve");

const serveBuild = serve({ directory: "build" });

function isDev() {
    return !app.isPackaged;
}

let browserWindow;

app.on("ready", () => {
    browserWindow = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
        },
        show: false,
    });

    if (isDev()) browserWindow.loadURL("http://localhost:3000");
    else serveBuild(browserWindow);

    //browserWindow.webContents.openDevTools();

    browserWindow.once("ready-to-show", () => browserWindow.show());

    browserWindow.on("closed", () => (browserWindow = null));
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
