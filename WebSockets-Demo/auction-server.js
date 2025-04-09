import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

let timeLeft = 60;
let highestBid = 0;
let highestBidder = 'No One';

function broadcast(message) {
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(message);
        }
    })
}

wss.on('connection', (ws) => {
    console.log('New bidder joined');

    ws.send(`Auction started! Time left: ${timeLeft}`);
    ws.send(`Current highest bid: ${highestBid} by ${highestBidder}`);

    ws.on('message', (msg) => {
        const [name, bidAmount] = msg.toString().split(':');
        const bid = parseInt(bidAmount);
        if (bid > highestBid) {
            highestBid = bid;
            highestBidder = name;
            broadcast(`New highest bid: ${highestBid} by ${highestBidder}`);
        } else {
            ws.send(`Your bid of ${bid} is too low. Current highest bid is ${highestBid}`)
        }
    });
});

const countdown = setInterval(() => {
    timeLeft--;
    broadcast(`Time Left: ${timeLeft}`);

    if (timeLeft <= 0) {
        clearInterval(countdown);
        broadcast(`Auction ended! Winner is ${highestBidder} with ${highestBid}`);
        wss.close();
        process.exit(0);
    }
}, 2000);