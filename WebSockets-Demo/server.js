import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

console.log('Websocket server is running on port 8080');

wss.on('connection', (ws) => {
    console.log('Client Connected');

    // Receive message
    ws.on('message', (message) => {
        console.log(message.toString());

        //Broadcast to all other clients
        wss.clients.forEach((client) => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message.toString());
            }
        })
    });

    ws.on('close', () => {
        console.log('Client Disconnected');
    })
});