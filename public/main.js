
const electron = require('electron');
// const {app, Menu, Tray, BrowserWindow, ipcMain} = require('electron');
const {app, BrowserWindow} = require('electron');

// const axios = require("axios");
const path = require('path');
const isDev = require('electron-is-dev');
const globalShortcut = electron.globalShortcut


// if (isDev) {
//   BrowserWindow.addDevToolsExtension(
//     path.join(os.homedir(), '/Library/Application Support/Google/Chrome/Default/Extensions/fmkadmapgofadopljbjfkapdkoienihi/4.4.0_0')
//   )
// }

app.allowRendererProcessReuse = true;
let mainWindow;

function createWindow() {
	
	// if (process.platform === 'darwin') BrowserWindow.addDevToolsExtension(require('path').join(__dirname, '../react-dev-tools'))
	// console.log(mainWindow);
	// if (mainWindow !== undefined) {
	// }
	
	mainWindow = new BrowserWindow({
		width: 950,
		height: 620,
		minHeight: 570,
		minWidth: 800,
		show: false,
		// fullscreen: false,
		// maximizable: false,
		// frame: false,
		// transparent: true,
		// resizable: false,
		icon: path.join(__dirname, 'app.png'),
		// icon: path.join(__dirname, 'app.ico'),
		webPreferences: {
			nodeIntegration: true,
			// preload: __dirname + '/preload.js',
			// webSecurity: false,
			// allowRunningInsecureContent: true,
			// webviewTag: true,
			// javascript: true
		}
	});
	mainWindow.show();
	mainWindow.setMenu(null);
	
	if (isDev) mainWindow.webContents.openDevTools();
	mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`).then(r => console.log(r));
	mainWindow.on('closed', () => mainWindow = null);
	
	// if (process.platform !=='darwin') global.appTray = new Tray(path.join(__dirname, '256x256.png'))
	// else global.appTray = new Tray(path.join(__dirname, '22x22.png'));
	//
	// const contextMenu = Menu.buildFromTemplate([
	//   { label: 'Hide', click: (e) => { mainWindow.hide(); } },
	//   { label: 'Show', click: (e) => { mainWindow.show();  mainWindow.focus(); } },
	//   { label: 'Quit', role: 'quit' }
	// ])
	// global.appTray.setContextMenu(contextMenu)
	//
	
	globalShortcut.register('f5', function () {
		console.log('f5 is pressed')
		mainWindow.reload()
	})
	globalShortcut.register('CommandOrControl+R', function () {
		console.log('CommandOrControl+R is pressed')
		mainWindow.reload()
	})
	
	if (isDev) {
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
	}
}

app.on('ready', createWindow);

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

// if (isDev) { app.setAppUserModelId('com.samirdjelal.the_movie'); }

