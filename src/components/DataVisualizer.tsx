import React, { useEffect, useRef } from 'react';

export const DataVisualizer: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Nodes setup
    interface Node {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      label?: string;
    }

    const nodeCount = Math.min(32, Math.floor((width * height) / 10000) + 12);
    const nodes: Node[] = [];
    const colors = ['#06b6d4', '#38bdf8', '#818cf8', '#a78bfa', '#34d399'];

    const labels = ['DATA', 'DBMS', 'PYTHON', 'ANALYTICS', 'QUERY', 'INSIGHTS'];

    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2.5 + 1.5,
        color: colors[i % colors.length],
        label: i < labels.length ? labels[i] : undefined,
      });
    }

    let mouseX = -1000;
    let mouseY = -1000;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseX = -1000;
      mouseY = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle background grid dots
      const gridGap = 36;
      ctx.fillStyle = 'rgba(148, 163, 184, 0.05)';
      for (let x = gridGap / 2; x < width; x += gridGap) {
        for (let y = gridGap / 2; y < height; y += gridGap) {
          ctx.fillRect(x, y, 1.2, 1.2);
        }
      }

      // Connect nodes
      const maxDistance = 115;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.35;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Occasional data packet moving along connection
            if ((tick + i * 17) % 180 < 40) {
              const progress = ((tick + i * 17) % 180) / 40;
              const px = nodes[i].x + (nodes[j].x - nodes[i].x) * progress;
              const py = nodes[i].y + (nodes[j].y - nodes[i].y) * progress;
              ctx.beginPath();
              ctx.arc(px, py, 1.8, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(6, 182, 212, 0.85)';
              ctx.shadowColor = '#06b6d4';
              ctx.shadowBlur = 6;
              ctx.fill();
              ctx.shadowBlur = 0;
            }
          }
        }
      }

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Slight mouse attraction
        const dx = mouseX - node.x;
        const dy = mouseY - node.y;
        const mouseDist = Math.sqrt(dx * dx + dy * dy);
        if (mouseDist < 120 && mouseDist > 0) {
          node.x += (dx / mouseDist) * 0.4;
          node.y += (dy / mouseDist) * 0.4;
        }

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 10 || node.x > width - 10) node.vx *= -1;
        if (node.y < 10 || node.y > height - 10) node.vy *= -1;

        // Outer glow
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 2.4, 0, Math.PI * 2);
        ctx.fillStyle = node.color.replace(')', ', 0.15)').replace('rgb', 'rgba');
        ctx.fill();

        // Core node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = node.color;
        ctx.shadowColor = node.color;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;

        // Label for key data nodes
        if (node.label) {
          ctx.font = '9px monospace';
          ctx.fillStyle = 'rgba(203, 213, 225, 0.7)';
          ctx.fillText(node.label, node.x + 8, node.y + 3);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="relative w-full h-full min-h-[360px] sm:min-h-[440px] lg:min-h-[480px] rounded-3xl border border-slate-800/80 bg-gradient-to-b from-slate-900/60 via-slate-950/80 to-[#070a12] p-1 overflow-hidden shadow-2xl shadow-cyan-950/20 group">
      {/* Decorative Corner Accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-cyan-500/60 rounded-tl-2xl z-10" />
      <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500/60 rounded-tr-2xl z-10" />
      <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500/60 rounded-bl-2xl z-10" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-cyan-500/60 rounded-br-2xl z-10" />

      {/* Top Bar Indicators */}
      <div className="absolute top-4 left-5 right-5 z-10 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-[11px] font-mono uppercase tracking-widest text-slate-300">
            DATA NODE MESH • HYD: 17.38°N, 78.48°E
          </span>
        </div>
        <span className="text-[10px] font-mono text-cyan-400/80 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40">
          LIVE MODEL
        </span>
      </div>

      {/* Center Radar Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-72 h-72 rounded-full border border-cyan-400/30 animate-[spin_60s_linear_infinite]" />
        <div className="absolute w-48 h-48 rounded-full border border-dashed border-indigo-400/40 animate-[spin_40s_linear_infinite_reverse]" />
        <div className="absolute w-24 h-24 rounded-full border border-cyan-300/30" />
      </div>

      {/* Bottom Floating Stats */}
      <div className="absolute bottom-4 left-5 right-5 z-10 flex items-center justify-between pointer-events-none">
        <div className="bg-slate-900/80 backdrop-blur-md border border-slate-800/80 px-3 py-1.5 rounded-xl text-left">
          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400 block">Focus Core</span>
          <span className="text-xs font-display font-semibold text-slate-200">Data Science & DBMS</span>
        </div>
        <div className="bg-slate-900/80 backdrop-blur-md border border-cyan-500/30 px-3 py-1.5 rounded-xl text-right">
          <span className="text-[10px] uppercase font-mono tracking-wider text-cyan-400 block">Academic SGPA</span>
          <span className="text-xs font-mono font-bold text-cyan-300">8.76 / 10.0</span>
        </div>
      </div>

      <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair relative z-0" />
    </div>
  );
};
