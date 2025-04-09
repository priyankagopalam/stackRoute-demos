import { WebSocket } from "ws";
import readline from "readline";

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const socket = new WebSocket('ws://localhost:8080');

socket.on('open', () => {
    console.log('Connected to chat server');

    r1.setPrompt('You: ');
    r1.prompt();

    r1.on('line', (input) => {
        socket.send(input);
        r1.prompt();
    });
});

socket.on('message', (data) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log(data.toString());
    r1.prompt(true);
});