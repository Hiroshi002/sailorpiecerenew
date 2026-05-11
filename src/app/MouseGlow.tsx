"use client";
import React, { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    const handleMouseMove = (e: MouseEvent) => {
      glow.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(212, 175, 55, 0.04), transparent 80%)`;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      ref={glowRef}
      className="fixed inset-0 pointer-events-none z-[50] mix-blend-screen"
      style={{
        background: `radial-gradient(600px circle at 0px 0px, rgba(212, 175, 55, 0.04), transparent 80%)`
      }}
    />
  );
}
