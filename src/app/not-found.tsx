"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="w-full min-h-screen bg-(--paper) text-(--ink) font-mono flex flex-col justify-center px-[8vw] relative overflow-hidden selection:bg-(--accent) selection:text-(--paper)">
      <div 
        className="fixed top-0 left-0 w-4 h-4 bg-(--accent) rounded-full pointer-events-none z-50 mix-blend-difference -translate-x-1/2 -translate-y-1/2" 
        style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }} 
      />

      <div className="max-w-4xl border-l-8 border-(--accent) pl-6 md:pl-12 flex flex-col gap-6">
        <h1 className="text-[12vw] md:text-[8vw] font-black tracking-tighter uppercase leading-none text-(--accent)">
          404 //
        </h1>
        <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">
          SYS_STATUS: DATA_CORRUPTED
        </h2>
        <p className="text-sm md:text-base text-(--muted) max-w-lg leading-relaxed">
          The requested resource could not be found or has been permanently moved from the active server architecture.
        </p>
        <div className="mt-8">
          <Link 
            href="/" 
            className="inline-block border border-(--ink) px-5 py-2 text-xs uppercase tracking-widest font-bold hover:bg-(--accent) hover:border-(--accent) hover:text-(--paper) transition-colors"
          >
            [ return_to_root ]
          </Link>
        </div>
      </div>
    </main>
  );
}