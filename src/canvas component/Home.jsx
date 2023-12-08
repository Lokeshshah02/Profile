import React, { useEffect, useRef } from "react";

const Home = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Set canvas dimensions
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const balls = [];

    const getRandomInt = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const createBall = () => {
      const radius = getRandomInt(10, 30);
      const x = getRandomInt(radius, canvas.width - radius);
      const y = getRandomInt(radius, canvas.height - radius);
      const dx = (Math.random() - 0.5) * 2; // Random horizontal speed
      const dy = (Math.random() - 0.5) * 2; // Random vertical speed
      const color = "#FFD700"; // Yellow color

      balls.push({ x, y, radius, dx, dy, color });
    };

    const animateBalls = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      balls.forEach((ball) => {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = ball.color;
        ctx.fill();

        // Bounce off walls
        if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
          ball.dx = -ball.dx;
        }
        if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
          ball.dy = -ball.dy;
        }

        ball.x += ball.dx;
        ball.y += ball.dy;
      });

      requestAnimationFrame(animateBalls);
    };

    // Create initial balls
    for (let i = 0; i < 10; i++) {
      createBall();
    }

    animateBalls();

    // Cleanup on component unmount
    return () => cancelAnimationFrame(animateBalls);
  }, []);

  return <canvas ref={canvasRef} className="fixed top-0 left-0" />;
};

export default Home;
