"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

// Kahverengi/turuncu karton tonları — her kutu rastgele bir ton alır.
const CARDBOARD = ["#b5763a", "#a8682f", "#c68a4a", "#9c5f2c", "#d98a3d", "#bb7136", "#e0934a"];
const TAPE_COLOR = "#ecd7ac"; // kraft koli bandı

// Köşeler + kenar ortaları: kutular ekranın her köşesine dağılsın.
// Normalize edilmiş yuva (nx, ny) ∈ [-1, 1]; viewport sınırına göre konumlanır.
const SLOTS: [number, number][] = [
  [-1, 1], // sol üst
  [1, 1], // sağ üst
  [-1, -1], // sol alt
  [1, -1], // sağ alt
  [0, 1], // üst orta
  [0, -1], // alt orta
  [-1, 0], // sol orta
  [1, 0], // sağ orta
];

type BoxConfig = {
  id: number;
  slot: [number, number];
  size: [number, number, number];
  color: string;
  rotSpeed: [number, number, number];
  bobAmp: number;
  bobFreq: number;
  swayAmp: number;
  swayFreq: number;
  zBase: number;
  zAmp: number;
  zFreq: number;
  phase: number;
};

function buildConfigs(): BoxConfig[] {
  const rand = (min: number, max: number) => min + Math.random() * (max - min);
  const sign = () => (Math.random() < 0.5 ? -1 : 1);

  return SLOTS.map((slot, i) => {
    const s = rand(0.8, 1.5);
    return {
      id: i,
      slot,
      size: [s, s * rand(0.78, 1.05), s * rand(0.82, 1.05)],
      color: CARDBOARD[i % CARDBOARD.length],
      // Her kutu farklı hızda ve farklı yönde döner (işaret rastgele).
      rotSpeed: [sign() * rand(0.18, 0.55), sign() * rand(0.2, 0.6), sign() * rand(0.12, 0.4)],
      bobAmp: rand(0.18, 0.42), // hafif yukarı/aşağı zıplama
      bobFreq: rand(0.55, 1.15),
      swayAmp: rand(0.1, 0.28), // hafif yatay salınım
      swayFreq: rand(0.4, 0.8),
      zBase: rand(-2.4, -0.6), // hep z=0 düzleminin arkasında → kesilmez
      zAmp: rand(0.2, 0.55),
      zFreq: rand(0.25, 0.55),
      phase: rand(0, Math.PI * 2),
    };
  });
}

/**
 * Kutunun her eksende serbestçe dönerken taşabileceği yarıçap (sınırlayıcı küre).
 * Yatay/dikey kenar boşluğu bu yarıçap + salınım genliği kadar alınınca,
 * tam dönüş anında bile kutu viewport dışına taşmaz.
 */
function boundingRadius(size: [number, number, number]) {
  return 0.5 * Math.hypot(size[0], size[1], size[2]);
}

/** Bant çizgileri sarılı tek bir 3D kargo kutusu. */
function CargoBox({ cfg, anchor }: { cfg: BoxConfig; anchor: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  const tRef = useRef(cfg.phase);

  const [w, h, d] = cfg.size;

  useFrame((_, delta) => {
    const g = groupRef.current;
    if (!g) return;

    const dt = Math.min(delta, 0.05); // sekme/duraklama sonrası sıçramayı önle
    tRef.current += dt;
    const t = tRef.current;

    // Her eksen farklı hız/yönde döner.
    g.rotation.x += dt * cfg.rotSpeed[0];
    g.rotation.y += dt * cfg.rotSpeed[1];
    g.rotation.z += dt * cfg.rotSpeed[2];

    // Köşe çapasının etrafında hafif zıplama (y) + yatay salınım (x) + derinlik (z).
    g.position.x = anchor[0] + Math.cos(t * cfg.swayFreq) * cfg.swayAmp;
    g.position.y = anchor[1] + Math.sin(t * cfg.bobFreq) * cfg.bobAmp;
    g.position.z = anchor[2] + Math.sin(t * cfg.zFreq) * cfg.zAmp;
  });

  return (
    <group ref={groupRef} position={anchor}>
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

  // viewport: kameranın hedef düzlemindeki (z=0) dünya birimi genişlik/yükseklik.
  // Ekran/oran değiştikçe güncellenir → kutular her zaman görünür kalır.
  const { width, height } = useThree((s) => s.viewport);

  const anchors = useMemo<[number, number, number][]>(() => {
    const SAFE = 0.5; // parallax kayması + yuvarlama için ek pay
    return configs.map((cfg) => {
      const margin = boundingRadius(cfg.size) + SAFE;
      // Kutu, hareket genliği dahil hiçbir kenardan taşmasın diye kenar boşluğu bırakılır.
      const maxX = Math.max(0, width / 2 - (margin + cfg.swayAmp));
      const maxY = Math.max(0, height / 2 - (margin + cfg.bobAmp));
      return [cfg.slot[0] * maxX, cfg.slot[1] * maxY, cfg.zBase];
    });
  }, [configs, width, height]);

  useFrame((state) => {
    const g = groupRef.current;
    if (!g) return;
    // Kesilmeyi tetiklemeyecek kadar küçük bir parallax dönüşü.
    const tx = state.pointer.x * 0.05;
    const ty = state.pointer.y * 0.04;
    g.rotation.y += (tx - g.rotation.y) * 0.04;
    g.rotation.x += (-ty - g.rotation.x) * 0.04;
  });

  return (
    <group ref={groupRef}>
      {configs.map((c, i) => (
        <CargoBox key={c.id} cfg={c} anchor={anchors[i]} />
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
      style={{ width: "100%", height: "100%", display: "block", background: "transparent" }}
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
