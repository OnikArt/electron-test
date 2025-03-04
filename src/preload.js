const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('electron', {
	fetchData: (url) => ipcRenderer.invoke("fetch-data", url)
})