"use client";

import React from "react";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

const Hoodie = ({ color , scale }) => {
  const { nodes, materials } = useGLTF("/Hoodie.glb");

  // Create a new material instance with the selected color
  const coloredMaterial = new MeshStandardMaterial({
    color,
    roughness: 0.5, // Adjust surface reflection
    metalness: 0.1,  // Makes it more fabric-like
  });

  return (
    <group dispose={null}>
      <group position={[ 0 ,0 ,0 ]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_2.geometry}
          material={coloredMaterial} // Apply new material
          scale={scale} // Apply scale to the mesh
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_3.geometry}
          material={coloredMaterial}
          scale={scale} // Apply scale to the mesh
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_4.geometry}
          material={coloredMaterial}
          scale={scale} // Apply scale to the mesh
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object_5.geometry}
          material={coloredMaterial}
          scale={scale} // Apply scale to the mesh
        />
      </group>
    </group>
  );
};

export default Hoodie;

// Preload the model
useGLTF.preload("/Hoodie.glb");
