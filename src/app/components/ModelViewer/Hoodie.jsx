"use client";

import React from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

const Hoodie = ({ color = "#ffffff" }) => {
  const { nodes, materials } = useGLTF("/Hoodie.glb");

  // Create a new material instance with the selected color
  const coloredMaterial = new MeshStandardMaterial({
    color,
    roughness: 0.5, // Adjust surface reflection
    metalness: 0.1,  // Makes it more fabric-like
  });

  return (
    <group dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={coloredMaterial} // Apply new material
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={coloredMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={coloredMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={coloredMaterial}
        />
      </group>
    </group>
  );
};

export default Hoodie;

// Preload the model
useGLTF.preload("/Hoodie.glb");
