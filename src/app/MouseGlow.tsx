"use client";
import React, { useState, useEffect } from "react";

export default function MouseGlow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div 
      className="fixed inset-0 pointer-events-none z-[50] mix-blend-screen"
      style={{
        background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(212, 175, 55, 0.04), transparent 80%)`
      }}
    />
  );
}
