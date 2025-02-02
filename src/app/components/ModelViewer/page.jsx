import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Hoodie from "./Hoodie";

const ModalViewer = ({ selectedColor }) => {
    return (
        <div className="w-full h-full flex items-center justify-center">
            <Canvas camera={{ position: [0, 2, 5] }}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[2, 5, 2]} intensity={1} />
                
                <OrbitControls 
                    enableZoom={true} 
                    enablePan={false} 
                    maxPolarAngle={Math.PI / 2.5} // Prevents flipping
                    minPolarAngle={Math.PI / 4}   // Restricts downward view
                    maxAzimuthAngle={Math.PI / 4}  // Restricts side view
                    minAzimuthAngle={-Math.PI / 4} // Restricts side view
                    dampingFactor={0.1}            // Smooth camera movement
                    rotateSpeed={0.5}              // Slows down rotation
                />

                {/* Slightly tilted forward for better initial view */}
                <group rotation={[Math.PI / 12, 0, 0]}>  
                    <Hoodie color={selectedColor} />
                </group>
            </Canvas>
        </div>
    );
};

export default ModalViewer;
