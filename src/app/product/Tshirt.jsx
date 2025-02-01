import { useGLTF } from '@react-three/drei'
import React from 'react'
import modelGltf from './tshirt.glb'

const Tshirt = () => {

  const { nodes } = useGLTF(modelGltf)



  return (
    <div>

      <group scale={isMobile ? 6 : 9}>
        
        <mesh
          castShadow
          receiveShadow
          name="tshirt"
          geometry={nodes.tshirt.geometry}
          position={[0, isMobile ? 0.35 : 0.1, 0]}
          dispose={null}
        />

      </group>


    </div>
  )
}

export default Tshirt