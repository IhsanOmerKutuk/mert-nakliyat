"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

const COUNT = 1600;
const DEPTH = 70;
const SPREAD_X = 44;
const SPREAD_Y = 26;

/**
 * Kameraya doğru akan partikül alanı — yolda ilerleme / hız hissi verir.
 * Partiküller +z yönünde hareket eder, kamerayı geçince en arkaya döner.
 */
function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);

  const { positions, colors, speeds } = useMemo(() => {
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);
    const speeds = new Float32Array(COUNT);

    const orange = new THREE.Color("#f97316");
    const light = new THREE.Color("#dbe7f6");
    const dim = new THREE.Color("#3b5a82");

    for (let i = 0; i < COUNT; i++) {
      positions[i * 3] = (Math.random() - 0.5) * SPREAD_X;
      positions[i * 3 + 1] = (Math.random() - 0.5) * SPREAD_Y;
      positions[i * 3 + 2] = -Math.random() * DEPTH;

      const roll = Math.random();
      const c = roll > 0.82 ? orange : roll > 0.4 ? light : dim;
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      speeds[i] = 5 + Math.random() * 11;
    }

    return { positions, colors, speeds };
  }, []);

  useFrame((state, delta) => {
    const points = pointsRef.current;
    if (!points) return;

    const arr = points.geometry.attributes.position.array as Float32Array;
    const d = Math.min(delta, 0.05); // sekme dönüşlerinde sıçramayı önle

    for (let i = 0; i < COUNT; i++) {
      const zi = i * 3 + 2;
      arr[zi] += speeds[i] * d;
      if (arr[zi] > 5) {
        arr[zi] = -DEPTH;
        arr[i * 3] = (Math.random() - 0.5) * SPREAD_X;
        arr[i * 3 + 1] = (Math.random() - 0.5) * SPREAD_Y;
      }
    }
    points.geometry.attributes.position.needsUpdate = true;

    // imleç takibi ile hafif parallax
    const targetX = state.pointer.x * 0.4;
    const targetY = state.pointer.y * 0.25;
    points.rotation.y += (targetX - points.rotation.y) * 0.04;
    points.rotation.x += (-targetY - points.rotation.x) * 0.04;
    points.rotation.z += d * 0.015;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.16}
        vertexColors
        transparent
        opacity={0.95}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function HeroScene({ active = true }: { active?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 1], fov: 75 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      frameloop={active ? "always" : "never"}
      style={{ background: "transparent" }}
    >
      <fog attach="fog" args={["#0e1b2a", 18, 65]} />
      <ParticleField />
    </Canvas>
  );
}
