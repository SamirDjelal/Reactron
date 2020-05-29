const electron = require('electron');
const {app, Menu, Tray, BrowserWindow, ipcMain} = require('electron');
const {autoUpdater} = require('electron-updater');
const log = require('electron-log');

// const axios = require("axios");
const path = require('path');
const isDev = require('electron-is-dev');
const globalShortcut = electron.globalShortcut


// autoUpdater.logger = log;
// autoUpdater.logger.transports.file.level = 'info';


app.allowRendererProcessReuse = true;
let mainWindow;

function createWindow() {
	mainWindow = new BrowserWindow({
		// width: 950,
		// height: 600,
		width: 800,
		height: 550,
		minWidth: 800,
		minHeight: 550,
		show: false,
		// fullscreen: false,
		// maximizable: false,
		frame: false,
		// titleBarStyle: 'hidden',
		// transparent: true,
		// resizable: false,
		icon: path.join(__dirname, (process.platform === 'darwin') ? 'icons/app.icns' : 'icons/app.png'),
		webPreferences: {
			nodeIntegration: true,
			preload: __dirname + '/preload.js',
			// webSecurity: false,
			// allowRunningInsecureContent: true,
			// webviewTag: true,
			// javascript: true
		}
	});
	mainWindow.show();
	mainWindow.setMenu(null);
	
	mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`).then(r => console.log(r));
	mainWindow.on('closed', () => mainWindow = null);
	
	if (process.platform !== 'darwin') global.appTray = new Tray(path.join(__dirname, 'icons/256x256.png'))
	else global.appTray = new Tray(path.join(__dirname, 'icons/16x16.png'));
	
	const contextMenu = Menu.buildFromTemplate([
		{
			label: 'Reload', click: () => {
				mainWindow.reload();
			}
		}, {
			label: 'Hide', click: () => {
				mainWindow.hide();
			}
		}, {
			label: 'Show', accelerator: '', click: () => {
				mainWindow.show();
				mainWindow.focus();
			}
		},
		{label: 'Quit', role: 'quit'}
	])
	global.appTray.setContextMenu(contextMenu)
	
	
	globalShortcut.register('CommandOrControl+R', function () {
		console.log('CommandOrControl+R is pressed')
		mainWindow.reload()
	})
	
	if (isDev) {
		mainWindow.webContents.openDevTools();
		const {default: installExtension, REACT_DEVELOPER_TOOLS, REDUX_DEVTOOLS} = require('electron-devtools-installer');
		try {
			installExtension(REACT_DEVELOPER_TOOLS).then((name) => {
				console.log(`Added Extension:  ${name}`);
			}).catch((err) => {
				console.log('An error occurred: ', err)
			});
			installExtension(REDUX_DEVTOOLS).then((name) => {
				console.log(`Added Extension:  ${name}`);
			}).catch((err) => {
				console.log('An error occurred: ', err)
			});
		} catch (e) {
		}
	} else {
		autoUpdater.checkForUpdates().then(r => console.log(r));
	}
	
}

// app.on('ready', createWindow);
app.whenReady().then(() => {
	createWindow();
})


app.on('window-all-closed', () => {
	// if (process.platform !== 'darwin') {
	app.quit();
	// }
});

app.on('certificate-error', (event, webContents, url, error, certificate, callback) => {
	event.preventDefault();
	callback(true);
});

app.on('activate', () => {
	if (mainWindow === null) {
		createWindow();
	}
});


/*
* Auto updater functionality.
*/

ipcMain.on('CHECK_UPDATE', (event, arg) => {
	autoUpdater.checkForUpdates().then(r => console.log(r));
})


ipcMain.on('IINSTALL_UPDATE', (event, arg) => {
	autoUpdater.quitAndInstall();
})

autoUpdater.on('checking-for-update', () => {
	console.log('checking-for-update');
	mainWindow.webContents.send('UPDATE_STATUS', {type: 'checking-for-update', payload: ''});
	
})
autoUpdater.on('update-available', (event, info) => {
	console.log('update-available: ', info);
	mainWindow.webContents.send('UPDATE_STATUS', {type: 'update-available', payload: info});
	
})
autoUpdater.on('update-not-available', (event, info) => {
	console.log('update-not-available: ', info);
	mainWindow.webContents.send('UPDATE_STATUS', {type: 'update-not-available', payload: info});
	
})
autoUpdater.on('error', (event, err) => {
	console.log('error: ', err);
	mainWindow.webContents.send('UPDATE_STATUS', {type: 'error', payload: ''});
	
})
autoUpdater.on('download-progress', (event, progressObj) => {
	console.log('download-progress: ', progressObj);
	mainWindow.webContents.send('UPDATE_STATUS', {type: 'download-progress', payload: progressObj});
	
})
autoUpdater.on('update-downloaded', (event, info) => {
	console.log('update-downloaded: ', info);
	mainWindow.webContents.send('UPDATE_STATUS', {type: 'update-downloaded', payload: info});
	
	// Wait 5 seconds, then quit and install
	// In your application, you don't need to wait 5 seconds.
	// You could call autoUpdater.quitAndInstall(); immediately
	// setTimeout(function () {
	// 	autoUpdater.quitAndInstall();
	// }, 5000)
});
