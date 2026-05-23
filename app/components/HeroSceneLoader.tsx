"use client";

import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), {
  ssr: false,
  loading: () => null,
});

export default function HeroSceneLoader({ active = true }: { active?: boolean }) {
  return <HeroScene active={active} />;
}
