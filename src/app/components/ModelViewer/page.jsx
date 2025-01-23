"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import StickerPanel from "./sticker";

function Model({ url }) {
  const { scene } = useGLTF(url);
  return <primitive object={scene} />;
}

export default function ModelViewer() {
  return (
    <div className="w-full h-screen">        
      <Canvas camera={{ position: [0, 1, 5] }}>
        <ambientLight intensity={1} />
        <directionalLight position={[0, 5, 5]} />
        <OrbitControls />
        <Model url="/models/hoodie_with_hood_up.glb" />
      </Canvas>
    </div>
  );
}
