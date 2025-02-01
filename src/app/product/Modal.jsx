import { Spinner } from "@nextui-org/react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import Tshirt from "./Tshirt";

const Modal = ({ selectedColor }) => {
    return (
        <div className="w-full">
            <Canvas
                shadows
                gl={{ preserveDrawingBuffer: true }}
                camera={{
                    fov: 25,
                    position: [0, 5, 20],
                }}
            >
                <Suspense fallback={<Spinner />}>
                    {/* Lighting */}
                    <hemisphereLight groundColor={"#111"} intensity={0.5} />
                    <directionalLight position={[5, 10, 5]} intensity={1} castShadow />

                    {/* 3D Tshirt */}
                    {/* <Tshirt color={selectedColor} /> */}

                    {/* Orbit Controls */}
                    <OrbitControls
                        target={[0, 0.4, 0]}
                        maxDistance={30}
                        minDistance={8}
                        maxPolarAngle={Math.PI / 1.94}
                        minPolarAngle={Math.PI / 4}
                        enablePan={false}
                    />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default Modal;
