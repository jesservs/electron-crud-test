const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    minWidth: 400,   // Define a largura mínima
    minHeight: 500,  // Define a altura mínima
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false, // Desabilitar o isolamento de contexto, para permitir o uso de require
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
