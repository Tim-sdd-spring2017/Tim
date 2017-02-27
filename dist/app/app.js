/****************************
 * File: app.js             *
 * Purpose: npm start file  *
 ****************************/
const {app, BrowserWindow} = require('electron');

// Global window variable (prevents deleted by garbage collection)
var mainWindow = null;

// Quit the application when the last window is closed
app.on('window-all-closed', function() {
  // Keep running in the background (OSX only)
  if (process.platform != 'darwin') {
    app.quit();
  }
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  // Create the main browser window.
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 500,
    'min-width': 500,
    'min-height': 500,
    'accept-first-mouse': true,
    'title-bar-style': 'hidden'
  });

  // Loads base page
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  // Open the DevTools.
  mainWindow.openDevTools();

  // Invoked when window is closed
  mainWindow.on('closed', function() {
    mainWindow = null;
  });
});
