"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function WireSphere() {
  const group = useRef<THREE.Group>(null!);
  const points = useRef<THREE.Points>(null!);
  const { mouse } = useThree();

  const geom = useMemo(() => new THREE.IcosahedronGeometry(1.6, 3), []);
  const pointGeom = useMemo(() => {
    const g = new THREE.BufferGeometry();
    const pos = (geom.attributes.position as THREE.BufferAttribute).array;
    g.setAttribute("position", new THREE.BufferAttribute(pos as Float32Array, 3));
    return g;
  }, [geom]);

  useFrame((state, delta) => {
    if (!group.current) return;
    // Auto rotation
    group.current.rotation.y += delta * 0.08;
    group.current.rotation.x += delta * 0.025;

    // React to mouse
    const targetX = mouse.y * 0.4;
    const targetY = mouse.x * 0.6;
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.02;
    group.current.rotation.y += (targetY - group.current.rotation.y) * 0.02;

    // Subtle pulse
    const s = 1 + Math.sin(state.clock.elapsedTime * 0.8) * 0.015;
    group.current.scale.setScalar(s);
  });

  return (
    <group ref={group}>
      <lineSegments>
        <wireframeGeometry args={[geom]} />
        <lineBasicMaterial
          color={new THREE.Color("#00F0FF")}
          transparent
          opacity={0.38}
        />
      </lineSegments>
      <points ref={points} geometry={pointGeom}>
        <pointsMaterial
          color={new THREE.Color("#ffffff")}
          size={0.035}
          sizeAttenuation
          transparent
          opacity={0.85}
        />
      </points>
      {/* Inner core */}
      <mesh>
        <icosahedronGeometry args={[0.55, 1]} />
        <meshBasicMaterial
          color={new THREE.Color("#00F0FF")}
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
    </group>
  );
}

function Particles({ count = 220 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);
  const { mouse } = useThree();

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 3.2 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, [count]);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.03;
    ref.current.rotation.x = mouse.y * 0.15;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00F0FF"
        size={0.018}
        transparent
        opacity={0.55}
        sizeAttenuation
      />
    </points>
  );
}

export function NeuralMesh() {
  return (
    <Canvas
      dpr={[1, 1.8]}
      camera={{ position: [0, 0, 4.2], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#00F0FF" />
      <WireSphere />
      <Particles />
    </Canvas>
  );
}
