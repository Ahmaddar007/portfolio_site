"use client";
import { useEffect, useState } from "react";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import dynamic from "next/dynamic";

// Dynamically import the component for client-side rendering
const Tshirt = ({ color }) => {
  // State to manage the model data
  const [model, setModel] = useState(null);

  // Load the model using useGLTF hook
  const { nodes, materials } = useGLTF("./tshirt.glb");

  // When the model is loaded, set it to the state
  useEffect(() => {
    if (nodes && materials) {
      setModel({ nodes, materials });
    }
  }, [nodes, materials]);

  // Handle color change effect
  useEffect(() => {
    if (model && model.materials.color) {
      const newColor = new THREE.Color(color);
      model.materials.color.color = newColor;
    }
  }, [color, model]);

  if (!model || !model.nodes.tshirt) {
    return null; // Prevent errors if the model is not loaded yet
  }

  return (
    <group scale={9}>
      <mesh
        castShadow
        receiveShadow
        geometry={model.nodes.tshirt.geometry} // Reference to the geometry of the tshirt model
        material={model.materials.color} // Reference to the material for color
        rotation={[0.4, 0.4, 0]} // Rotation for spinning effect
        dispose={null}
      />
    </group>
  );
};

// Export the dynamically imported component, ensuring no SSR
export default dynamic(() => Promise.resolve(Tshirt), { ssr: false });
