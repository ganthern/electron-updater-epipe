const autoUpdater = require("electron-updater").autoUpdater
const electron = require("electron")

console.log(electron.app.getVersion())

autoUpdater.allowDowngrade = false
autoUpdater.autoDownload = false
autoUpdater.autoInstallOnAppQuit = false

autoUpdater
	.on("update-available", () => autoUpdater.downloadUpdate())
	.on("update-downloaded", () => autoUpdater.quitAndInstall(false, true))
	.checkForUpdates()
