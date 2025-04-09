import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

console.log('Websocket server is running on port 8080');

wss.on('connection', (ws) => {
    console.log('Client connected');

    ws.isAlive = true;

    ws.on('pong', () => {
        ws.isAlive = true;
        console.log('Server received pong from client');
    });

    ws.on('message', (msg) => {
        console.log(msg.toString());
    })

});

// Ping clients every 10 seconds
const interval = setInterval(() => {
    wss.clients.forEach((ws) => {
        if (!ws.isAlive) {
            console.log('Terminating dead client');
            return ws.terminate();
        }

        ws.ping(); // Whenever I ping the client, it will trigger the pong response from client
    });
}, 10000);

wss.on('close', () => {
    clearInterval(interval);
})