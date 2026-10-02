"use client";

import { useMemo, useRef, type RefObject } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const TURNS = 3.25;
const POINT_COUNT = 64;
const HEIGHT = 6.4;
const RADIUS = 1.15;
const RUNG_EVERY = 3;

interface StrandPoint {
  position: [number, number, number];
}

function useHelixGeometry() {
  return useMemo(() => {
    const strandA: StrandPoint[] = [];
    const strandB: StrandPoint[] = [];
    const rungs: { mid: [number, number, number]; quaternion: THREE.Quaternion; length: number }[] = [];

    const up = new THREE.Vector3(0, 1, 0);

    for (let i = 0; i < POINT_COUNT; i++) {
      const t = i / (POINT_COUNT - 1);
      const angle = t * TURNS * Math.PI * 2;
      const y = -HEIGHT / 2 + t * HEIGHT;

      const ax = Math.cos(angle) * RADIUS;
      const az = Math.sin(angle) * RADIUS;
      const bx = Math.cos(angle + Math.PI) * RADIUS;
      const bz = Math.sin(angle + Math.PI) * RADIUS;

      strandA.push({ position: [ax, y, az] });
      strandB.push({ position: [bx, y, bz] });

      if (i % RUNG_EVERY === 0) {
        const pA = new THREE.Vector3(ax, y, az);
        const pB = new THREE.Vector3(bx, y, bz);
        const direction = pB.clone().sub(pA);
        const length = direction.length();
        const mid = pA.clone().add(pB).multiplyScalar(0.5);
        const quaternion = new THREE.Quaternion().setFromUnitVectors(up, direction.clone().normalize());
        rungs.push({ mid: [mid.x, mid.y, mid.z], quaternion, length });
      }
    }

    return { strandA, strandB, rungs };
  }, []);
}

function HelixGroup({
  pointer,
  spin,
}: {
  pointer: RefObject<{ x: number; y: number }>;
  spin: boolean;
}) {
  const groupRef = useRef<THREE.Group>(null);
  const { strandA, strandB, rungs } = useHelixGeometry();

  useFrame((_, delta) => {
    const group = groupRef.current;
    if (!group) return;
    if (spin) {
      group.rotation.y += delta * 0.18;
    }
    const targetX = pointer.current.y * 0.25;
    const targetZ = -pointer.current.x * 0.2;
    group.rotation.x += (targetX - group.rotation.x) * 0.04;
    group.rotation.z += (targetZ - group.rotation.z) * 0.04;
  });

  return (
    <group ref={groupRef}>
      {strandA.map((p, i) => (
        <mesh key={`a-${i}`} position={p.position}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#c8102e" metalness={0.35} roughness={0.35} />
        </mesh>
      ))}
      {strandB.map((p, i) => (
        <mesh key={`b-${i}`} position={p.position}>
          <sphereGeometry args={[0.1, 16, 16]} />
          <meshStandardMaterial color="#1a1a1a" metalness={0.4} roughness={0.3} />
        </mesh>
      ))}
      {rungs.map((r, i) => (
        <mesh key={`r-${i}`} position={r.mid} quaternion={r.quaternion}>
          <cylinderGeometry args={[0.025, 0.025, r.length, 8]} />
          <meshStandardMaterial color="#d4d4d4" metalness={0.1} roughness={0.6} transparent opacity={0.8} />
        </mesh>
      ))}
    </group>
  );
}

function Scene({ interactive }: { interactive: boolean }) {
  const pointer = useRef({ x: 0, y: 0 });

  return (
    <Canvas
      gl={{ alpha: true, antialias: true }}
      dpr={[1, 1.75]}
      camera={{ position: [0, 0, 6.2], fov: 42 }}
      onPointerMove={(e) => {
        if (!interactive) return;
        const target = e.target as HTMLElement;
        const rect = target.getBoundingClientRect();
        pointer.current = {
          x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
          y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
        };
      }}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[3, 4, 5]} intensity={1.1} />
      <pointLight position={[-4, -2, -3]} intensity={0.6} color="#c8102e" />
      <HelixGroup pointer={pointer} spin={interactive} />
    </Canvas>
  );
}

export default function DnaHelix({ interactive = true }: { interactive?: boolean }) {
  return (
    <div className="h-full w-full">
      <Scene interactive={interactive} />
    </div>
  );
}
