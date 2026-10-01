const liveServerSocket = new WebSocket('ws://127.0.0.1:5500/ws');
liveServerSocket.addEventListener('message', (msg) => {
  if (msg.data == 'refreshcss') {
    console.log('Refreshing CSS');
    Vencord.Api.Settings.Settings.themeLinks = [...Vencord.Api.Settings.Settings.themeLinks]
  }
});