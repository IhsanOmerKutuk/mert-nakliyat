"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

const ORANGE = "#f97316";
const NAVY = "#1e3a5f";

type CargoBoxProps = {
  position: [number, number, number];
  color: string;
  scale?: number;
  rotationSpeed?: number;
};

function CargoBox({ position, color, scale = 1, rotationSpeed = 0.2 }: CargoBoxProps) {
  const ref = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.x += delta * rotationSpeed;
    ref.current.rotation.y += delta * rotationSpeed * 0.65;
  });

  return (
    <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.9}>
      <mesh ref={ref} position={position} scale={scale} castShadow receiveShadow>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} roughness={0.32} metalness={0.18} />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.55} />
      <directionalLight position={[5, 6, 4]} intensity={1.2} castShadow />
      <directionalLight position={[-4, -2, -3]} intensity={0.3} color={ORANGE} />

      <Suspense fallback={null}>
        <Environment preset="city" />
        <CargoBox position={[-2.1, 0.7, 0]} color={ORANGE} scale={1.0} />
        <CargoBox position={[1.9, -0.4, -0.6]} color={NAVY} scale={1.25} rotationSpeed={0.14} />
        <CargoBox position={[0.3, 1.4, -1.2]} color={ORANGE} scale={0.65} rotationSpeed={0.3} />
        <CargoBox position={[-0.6, -1.2, 0.7]} color={NAVY} scale={0.55} rotationSpeed={0.24} />
        <CargoBox position={[2.4, 1.5, -1.6]} color={ORANGE} scale={0.42} rotationSpeed={0.36} />
      </Suspense>
    </Canvas>
  );
}
