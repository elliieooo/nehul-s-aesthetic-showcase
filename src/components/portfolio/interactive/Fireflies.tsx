import { useEffect, useRef } from "react";

/** Floating fireflies that drift across the page and gently follow the cursor. */
export function Fireflies({ count = 28 }: { count?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.scale(dpr, dpr);

    const mouse = { x: w / 2, y: h / 2 };
    const flies = Array.from({ length: count }).map(() => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 1.6 + 0.6,
      phase: Math.random() * Math.PI * 2,
      hue: Math.random() > 0.5 ? "#e8b85a" : "#f3d27a",
    }));

    const onMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const onResize = () => {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.scale(dpr, dpr);
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("resize", onResize);

    let raf = 0;
    let t = 0;
    const tick = () => {
      t += 0.02;
      ctx.clearRect(0, 0, w, h);
      for (const f of flies) {
        const dx = mouse.x - f.x;
        const dy = mouse.y - f.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < 22000) {
          f.vx += (dx / Math.sqrt(d2 + 1)) * 0.02;
          f.vy += (dy / Math.sqrt(d2 + 1)) * 0.02;
        }
        f.vx += (Math.random() - 0.5) * 0.04;
        f.vy += (Math.random() - 0.5) * 0.04;
        f.vx *= 0.96;
        f.vy *= 0.96;
        f.x += f.vx;
        f.y += f.vy;
        if (f.x < -20) f.x = w + 20;
        if (f.x > w + 20) f.x = -20;
        if (f.y < -20) f.y = h + 20;
        if (f.y > h + 20) f.y = -20;

        const glow = 0.55 + Math.sin(t * 2 + f.phase) * 0.4;
        const grad = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, 24);
        grad.addColorStop(0, f.hue);
        grad.addColorStop(0.3, f.hue + "55");
        grad.addColorStop(1, "transparent");
        ctx.globalAlpha = glow * 0.7;
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(f.x, f.y, 24, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = glow;
        ctx.fillStyle = "#fff7d6";
        ctx.beginPath();
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", onResize);
    };
  }, [count]);

  return (
    <canvas
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[1] mix-blend-screen"
      aria-hidden
    />
  );
}
