import { WebSocket } from "ws";
import readline from "readline";

const ws = new WebSocket('ws://localhost:8080');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let username = '';

ws.on('open', () => {
    r1.question('Enter your name to join the auction: ', (answer) => {
        username = answer.trim();
        console.log(`Welcome ${username}! You can place your bid`);
        r1.setPrompt('Your Bid: ');
        r1.prompt();
    })

    r1.on('line', (input) => {
        const bid = parseInt(input.trim())
        if (!isNaN(bid)) {
            ws.send(`${username}:${bid}`);
        } else {
            console.log('Please enter a valid number');
        }
        r1.prompt();
    });
});

ws.on('message', (data) => {
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log(data.toString());
    r1.prompt(true);
});

ws.on('close', ()=>{
    console.log('Connection closed by server');
    process.exit(0);
})