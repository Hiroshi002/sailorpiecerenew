"use client";

import dynamic from "next/dynamic";

const MouseGlow = dynamic(() => import("./MouseGlow"), { ssr: false });
const Particles = dynamic(() => import("./Particles"), { ssr: false });

export default function VisualEffects() {
  return (
    <>
      <MouseGlow />
      <Particles />
    </>
  );
}
