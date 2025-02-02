"use client";

import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import Image from "next/image";

import logo1 from "@/../../public/product/1.png";
import logo2 from "@/../../public/product/2.png";
import logo3 from "@/../../public/product/3.png";
import logo4 from "@/../../public/product/4.png";
import logo5 from "@/../../public/product/5.png";
import logo6 from "@/../../public/product/6.png";
import logo7 from "@/../../public/product/7.png";
import ModalViewer from "../components/ModelViewer/page";

const Product = () => {
    const [panelType, setPanelType] = useState("color");
    const [selectedColor, setSelectedColor] = useState("#4A90E2");
    const [selectedLogo, setSelectedLogo] = useState(null);

    const colorOptions = [
        { name: "Red", hex: "#FF5733" },
        { name: "Green", hex: "#33FF57" },
        { name: "Blue", hex: "#3357FF" },
        { name: "Pink", hex: "#FF33A1" },
        { name: "Purple", hex: "#A133FF" },
        { name: "Teal", hex: "#33FFA1" },
        { name: "Orange", hex: "#FFA133" },
        { name: "Lime", hex: "#57FF33" },
        { name: "Sky Blue", hex: "#33A1FF" },
        { name: "Rose", hex: "#FF3357" },
    ];

    const logoOptions = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

    return (
        <div className="w-full h-screen bg-gray-50 border border-gray-300">

            {/* Main Content */}
            <div className="w-full gap-5 h-full grid grid-cols-4 p-4">

                {/* Side Panel */}
                <div className="col-span-1 bg-white shadow-lg p-6 border border-gray-300 rounded-xl backdrop-blur-md bg-opacity-80">

                    <div className="grid grid-cols-3 mb-6">
                        <Button
                            className={`rounded-none py-2 ${panelType === "color" ? "bg-gray-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                            onPress={() => setPanelType("color")}
                        >
                            Color
                        </Button>
                        <Button
                            className={`rounded-none py-2 ${panelType === "logo" ? "bg-gray-500 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
                            onPress={() => setPanelType("logo")}
                        >
                            Logo
                        </Button>
                        <Button className="rounded-none py-2 bg-gray-200 text-gray-700 hover:bg-gray-300">Stock</Button>
                    </div>


                    {/* Panel Content */}
                    <div className="w-full">
                        {panelType === "color" ? (
                            <>
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Choose Your Color</h2>
                                <div className="flex flex-wrap gap-3">
                                    {colorOptions.map((color, index) => (
                                        <div key={index} className="text-center">
                                            <Button
                                                className="w-12 min-w-12 min-h-12 h-12 rounded-full border border-gray-400 shadow-md hover:scale-110 transition"
                                                style={{ backgroundColor: color.hex }}
                                                onPress={() => setSelectedColor(color.hex)}
                                            />
                                            <p className="text-sm text-gray-700 mt-1 font-medium">{color.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </>
                        ) : (
                            <>
                                <h2 className="text-lg font-semibold text-gray-900 mb-4">Choose Your Logo</h2>
                                <div className="flex flex-wrap gap-3">
                                    {logoOptions.map((logo, index) => (
                                        <div
                                            key={index}
                                            className={`p-2 border-2 rounded-lg cursor-pointer hover:border-blue-500 transition ${selectedLogo === logo ? "border-blue-600 shadow-lg" : "border-gray-300"}`}
                                            onClick={() => setSelectedLogo(logo)}
                                        >
                                            <Image
                                                src={logo}
                                                alt={`Logo ${index + 1}`}
                                                width={64}
                                                height={64}
                                                className="object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>

                </div>

                {/* 3D Viewer Section */}
                <div className="col-span-3 p-6 bg-gray-100 border border-gray-300 rounded-xl shadow-inner">
                    <ModalViewer selectedColor={selectedColor} />
                </div>
            </div>

        </div>
    );
};

export default Product;