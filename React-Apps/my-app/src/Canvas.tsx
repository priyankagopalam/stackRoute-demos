import React, { useRef, useEffect } from 'react'

export default function Canvas() {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        let canvas;
        let ctx: any;
        function init() {
            canvas = canvasRef.current;
            if (!canvas) return;

            ctx = canvas.getContext('2d');
            if (!ctx) return;

            setInterval(draw, 10);
        }


        // ctx.beginPath();
        // ctx.moveTo(0, 0);
        // ctx.lineTo(200, 100);
        // ctx.lineTo(80, 100);
        // ctx.lineWidth = 4;
        // ctx.stroke();

        // ctx.rect(10, 10, 100, 80);
        // ctx.fill();

        // ctx.fillStyle = 'Red';
        // ctx.fillRect(50, 50, 100, 80);

        // ctx.strokeStyle = 'Green';
        // ctx.strokeRect(100, 100, 200, 150);

        // ctx.arc(200, 200, 100, 0, Math.PI, true);
        // ctx.fillStyle = 'Red';
        // ctx.fill();

        // ctx.font = "50px Arial";
        // ctx.lineWidth = 4;
        // ctx.strokeText('Hello World', 100, 100);
        // ctx.fillStyle = 'Red';
        // ctx.fillText('Hello World', 100, 100);

        // ctx.beginPath();
        // ctx.fillStyle = 'Red';
        // ctx.rect(10, 10, 100, 100);
        // ctx.fill();

        // ctx.beginPath();
        // ctx.fillStyle = 'Green';
        // ctx.rect(50, 50, 100, 100);
        // ctx.fill();

        // const grad = ctx.createLinearGradient(0, 0, 500, 0);
        // grad.addColorStop(0, 'Red');
        // grad.addColorStop(0.2, 'Blue');
        // grad.addColorStop(1, 'Green');

        // ctx.fillStyle = grad;
        // ctx.fillRect(50, 50, 300, 100);

        // const grad = ctx.createRadialGradient(150, 75, 20, 150, 75, 150);
        // grad.addColorStop(0, "lightgrey");
        // grad.addColorStop(1, "Black");

        // ctx.fillStyle = grad;
        // ctx.fillRect(10, 10, 300, 150);


        let x = 10;
        let y = 50;
        let dx = 2;
        let dy = 4;
        let width = 500;
        let height = 500;

        function circle() {
            if (!ctx) return;
            ctx.beginPath();
            ctx.fillStyle = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
            ctx.arc(x, y, 10, 0, Math.PI * 2);
            ctx.fill();
            ctx.closePath();
        }

        function clear() {
            if (!ctx) return;
            ctx.clearRect(0, 0, width, height);
        }

        function draw() {
            clear();
            circle();
            if (x > width || x < 0)
                dx = -dx;
            if (y > height || y < 0)
                dy = -dy;
            x += dx;
            y += dy;
        }

        init();

    }, [])


    return (
        <canvas ref={canvasRef} style={{ border: '2px solid blue' }} width="500" height="500"></canvas>
    )
}
