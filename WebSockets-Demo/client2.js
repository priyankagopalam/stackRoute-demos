import { WebSocket } from "ws";

const ws = new WebSocket('ws://localhost:8080');

ws.on('open', () => {
    console.log('Connected to server');

    // Send a message every 5 seconds
    setInterval(() => {
        ws.send('Hello from client');
    }, 5000);
});

ws.on('message', (msg) => {
    console.log('Message from server: ', msg)
});

ws.on('ping', () => {
    console.log('Client received ping from server');
});