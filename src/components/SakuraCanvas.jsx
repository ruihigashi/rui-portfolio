import { useEffect, useRef } from "react";

export default function SakuraCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const sakuraCount = 120; // 増量：以前は 50
    const sakuraList = Array.from({ length: sakuraCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 3 + 1,
      d: Math.random() + 1
    }));

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255, 182, 193, 0.8)";
      ctx.beginPath();
      sakuraList.forEach((p) => {
        ctx.moveTo(p.x, p.y);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2, true);
      });
      ctx.fill();
      update();
    }

    function update() {
      sakuraList.forEach((p) => {
        p.y += p.d;
        p.x += Math.sin(p.y * 0.01);
        if (p.y > height) {
          p.y = 0;
          p.x = Math.random() * width;
        }
      });
    }

    function animate() {
      draw();
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none"
    ></canvas>
  );
}
