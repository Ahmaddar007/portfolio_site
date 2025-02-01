"use client";

import { Button } from "@nextui-org/react";
import React, { useState } from "react";
import Image from "next/image";
import Modal from "./Modal";

// Import logo images properly
import logo1 from "@/../../public/product/1.png";
import logo2 from "@/../../public/product/2.png";
import logo3 from "@/../../public/product/3.png";
import logo4 from "@/../../public/product/4.png";
import logo5 from "@/../../public/product/5.png";
import logo6 from "@/../../public/product/6.png";
import logo7 from "@/../../public/product/7.png";

const Product = () => {
    const [panelType, setPanelType] = useState("color"); // 'color' or 'logo'
    const [selectedColor, setSelectedColor] = useState("#4A90E2"); // Default color for the 3D object

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
        <div className="product_page bg-no-repeat bg-cover bg-center overflow-hidden w-full h-screen">
            <div className="w-full flex items-center justify-between bg-opacity-10 bg-white">
                <h1 className="text-white text-center bg-[#a8744a] font-semibold p-2 w-1/4">
                    Customize
                </h1>
                <Button className="rounded-none p-5 bg-[#a8744a] text-white font-semibold">
                    Buy Now
                </Button>
            </div>
            <div className="w-full flex">
                <div className="bg-white bg-opacity-10 h-screen w-1/4">
                    <div className="grid grid-cols-3">
                        <Button
                            className="rounded-none"
                            onClick={() => setPanelType("color")}
                        >
                            Color
                        </Button>
                        <Button
                            className="rounded-none"
                            onClick={() => setPanelType("logo")}
                        >
                            Logo
                        </Button>
                        <Button className="rounded-none">Stock</Button>
                    </div>
                    <div className="w-full p-2">
                        <div className="w-full p-4 bg-white bg-opacity-20 rounded-md text-white">
                            {panelType === "color" ? (
                                <>
                                    <h2 className="mb-5">Choose Your Shirt Color</h2>
                                    <div className="flex flex-wrap gap-2">
                                        {colorOptions.map((color, index) => (
                                            <Button
                                                key={index}
                                                className="w-20 flex items-center justify-center text-white font-semibold rounded-full"
                                                style={{ backgroundColor: color.hex }}
                                                onClick={() => setSelectedColor(color.hex)} // Set selected color
                                            >
                                                {color.name}
                                            </Button>
                                        ))}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <h2 className="mb-5">Choose Your Logo</h2>
                                    <div className="flex flex-wrap gap-3">
                                        {logoOptions.map((logo, index) => (
                                            <div key={index} className="p-2 bg-white rounded-md cursor-pointer">
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
                </div>
                <div className="p-2 border-3 w-full border-white">
                    <Modal selectedColor={selectedColor} /> {/* Pass selected color */}
                </div>
            </div>
        </div>
    );
};

export default Product;
