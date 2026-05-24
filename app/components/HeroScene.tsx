"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// Kahverengi/turuncu karton tonları — her kutu rastgele bir ton alır.
const CARDBOARD = ["#b5763a", "#a8682f", "#c68a4a", "#9c5f2c", "#d98a3d", "#bb7136", "#e0934a"];
const TAPE_COLOR = "#ecd7ac"; // kraft koli bandı

type BoxConfig = {
  id: number;
  size: [number, number, number];
  basePos: [number, number, number];
  color: string;
  rotSpeed: [number, number, number];
  bobAmp: number;
  bobFreq: number;
  zAmp: number;
  zFreq: number;
  phase: number;
};

function buildConfigs(): BoxConfig[] {
  const COUNT = 7;
  const rand = (min: number, max: number) => min + Math.random() * (max - min);
  const configs: BoxConfig[] = [];

  for (let i = 0; i < COUNT; i++) {
    // Kutuları yatayda dağıt, derinlikte kademelendir.
    const s = rand(0.85, 2.1);
    configs.push({
      id: i,
      size: [s, s * rand(0.75, 1.05), s * rand(0.8, 1.05)],
      basePos: [
        rand(-7, 7),
        rand(-3.2, 3.2),
        rand(-4.5, 1.5),
      ],
      color: CARDBOARD[i % CARDBOARD.length],
      rotSpeed: [rand(-0.5, 0.5), rand(-0.6, 0.6), rand(-0.35, 0.35)],
      bobAmp: rand(0.4, 1.2),
      bobFreq: rand(0.5, 1.1),
      zAmp: rand(1.2, 3.2), // ekrana yaklaşıp uzaklaşma genliği
      zFreq: rand(0.25, 0.6),
      phase: rand(0, Math.PI * 2),
    });
  }
  return configs;
}

/** Bant çizgileri sarılı tek bir 3D kargo kutusu. */
function CargoBox(cfg: BoxConfig) {
  const groupRef = useRef<THREE.Group>(null);
  const tRef = useRef(cfg.phase);

  const [w, h, d] = cfg.size;

  useFrame((_, delta) => {
    const g = groupRef.current;
    if (!g) return;

    const dt = Math.min(delta, 0.05); // sekme/duraklama sonrası sıçramayı önle
    tRef.current += dt;
    const t = tRef.current;

    g.rotation.x += dt * cfg.rotSpeed[0];
    g.rotation.y += dt * cfg.rotSpeed[1];
    g.rotation.z += dt * cfg.rotSpeed[2];

    // Zıplama (y) + ekrana yaklaşıp uzaklaşma (z) + hafif yatay salınım
    g.position.x = cfg.basePos[0] + Math.cos(t * cfg.bobFreq * 0.5) * 0.3;
    g.position.y = cfg.basePos[1] + Math.sin(t * cfg.bobFreq) * cfg.bobAmp;
    g.position.z = cfg.basePos[2] + Math.sin(t * cfg.zFreq) * cfg.zAmp;
  });

  return (
    <group ref={groupRef} position={cfg.basePos}>
      {/* Karton gövde */}
      <mesh castShadow>
        <boxGeometry args={[w, h, d]} />
        <meshStandardMaterial color={cfg.color} roughness={0.92} metalness={0.04} />
      </mesh>

      {/* Üstten sarılan koli bandı (ön-arka yönünde) */}
      <mesh>
        <boxGeometry args={[w * 0.28, h + 0.02, d + 0.02]} />
        <meshStandardMaterial color={TAPE_COLOR} roughness={0.5} metalness={0.05} />
      </mesh>

      {/* Üst kapakta birleşim bandı (yan yönde, daha ince) */}
      <mesh position={[0, h / 2, 0]}>
        <boxGeometry args={[w + 0.02, 0.05, d * 0.22]} />
        <meshStandardMaterial color={TAPE_COLOR} roughness={0.5} metalness={0.05} />
      </mesh>
    </group>
  );
}

/** Tüm kutuları taşıyan, imleç takibiyle hafif parallax yapan grup. */
function CargoBoxes() {
  const groupRef = useRef<THREE.Group>(null);
  const configs = useMemo(buildConfigs, []);

  useFrame((state) => {
    const g = groupRef.current;
    if (!g) return;
    const tx = state.pointer.x * 0.22;
    const ty = state.pointer.y * 0.16;
    g.rotation.y += (tx - g.rotation.y) * 0.04;
    g.rotation.x += (-ty - g.rotation.x) * 0.04;
  });

  return (
    <group ref={groupRef}>
      {configs.map((c) => (
        <CargoBox key={c.id} {...c} />
      ))}
    </group>
  );
}

export default function HeroScene({ active = true }: { active?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 50 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      frameloop={active ? "always" : "never"}
      style={{ background: "transparent" }}
    >
      {/* Lacivert derinlik sisi — uzak kutular arka plana karışır */}
      <fog attach="fog" args={["#0e1b2a", 12, 28]} />

      <ambientLight intensity={0.85} />
      <directionalLight position={[4, 6, 8]} intensity={2.2} />
      <directionalLight position={[-6, -3, 2]} intensity={0.6} color="#6f9bd1" />
      {/* Turuncu marka vurgusu */}
      <pointLight position={[-4, 2, 6]} intensity={40} distance={30} color="#f97316" />

      <CargoBoxes />
    </Canvas>
  );
}
