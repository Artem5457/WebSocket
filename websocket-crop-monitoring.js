'use strict';

const cropWebSocket = new WebSocket('wss://crop-monitoring.eos.com/service/notifications/ws/b8a247b4c6718be614802057e722987da9f1bdca/crop-monitoring')

cropWebSocket.addEventListener('open', () => {
 console.log('Hello Server!');
});

cropWebSocket.addEventListener('error', (event) => {
  console.log(event);
 });

// Listen for messages
cropWebSocket.addEventListener('message', (event) => {
  console.log('Message from server ', event.data);
})

cropWebSocket.send()


