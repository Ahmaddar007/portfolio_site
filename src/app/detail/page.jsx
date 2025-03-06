"use client";

import { Button } from "@heroui/react";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import detailimage from "@/../../public/product.png";
import Image from "next/image";
import { ChevronLeft, ChevronRight, FolderUp, Heart } from "lucide-react";
import BuyAction from "./BuyAction";

const Detail = () => {

  return (
    <main className="p-[9%] w-full bg-gray-50">
      <div className="detailpage grid bg-white md:grid-cols-2 grid-cols-1 w-full">
        {/* Image Section */}

        <div className="detail_img p-[5%]">
            <div className="prod_img flex">
                <div className="w-full">
                <Image
                    src={detailimage}
                    alt="Product Image"
                    className="w-[90%] rounded-lg"
                />
                </div>
                <div className="image_ico w-[10%] flex flex-col justify-between items-center">
                <div className="flex flex-col gap-2">
                    <button className="rounded-md bg-[#F2F2F2] p-2 hover:bg-gray-300 transition-all">
                    <FolderUp className="w-5 h-5" />
                    </button>
                    <button className="rounded-md bg-[#F2F2F2] p-2 hover:bg-gray-300 transition-all">
                    <Heart className="w-5 h-5" />
                    </button>
                </div>
                <div className="flex flex-col gap-2">
                    <button className="rounded-md bg-[#F2F2F2] p-2 hover:bg-gray-300 transition-all">
                    <ChevronRight className="w-5 h-5" />
                    </button>
                    <button className="rounded-md bg-[#F2F2F2] p-2 hover:bg-gray-300 transition-all">
                    <ChevronLeft className="w-5 h-5" />
                    </button>
                </div>
                </div>
            </div>
            <div className="related_images w-full mt-4">
                <div className="related_child flex gap-2">
                {/* Add related images here */}
                </div>
            </div>
        </div>

        {/* Product Details Section */}
        <div className="detail_cont p-[5%]">
          <div className="card_cont w-full flex flex-col gap-6">
            <span className="text-gray-400 font-semibold text-sm">
              Hoodie Black
            </span>
            <strong className="text-3xl font-bold">
              Essential Female's Regular-Fit Black Hoodie
            </strong>
            <div className="flex justify-between items-center">
              <span className="font-bold text-2xl text-[#B4531A]">$45.99</span>
              <span className="flex items-center gap-2 text-black font-bold">
                <FaStar className="text-yellow-500" /> 4.9{" "}
                <span className="border-gray-400 border-l-2 px-2">2278</span>
              </span>
            </div>
            <div className="description">
              <span className="text-xl font-bold">Description</span>
              <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reiciendis, incidunt culpa? Dignissimos molestiae, dolorum fuga
                nobis hic accusantium omnis quaerat!
              </p>
            </div>
          </div>
          <BuyAction />
        </div>
      </div>
    </main>
  );
};

export default Detail;
