const electron = require('electron');

const { app, BrowserWindow } = electron;

// const mainWindow = new BrowserWindow({
//   webPreferences: { nodeIntegration: true, contextIsolation: false },
// });

app.on('ready', () => {
  const mainWindow = new BrowserWindow({});
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});
