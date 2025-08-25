import { useLoaderData } from "react-router-dom";
import React, { useState, useEffect } from "react";

// react icons
import { FaStar } from "react-icons/fa6";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import DetailsTabPage from "./DetailsTabPage";
const ClosetDetailsPage = () => {
  const closet = useLoaderData();
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <div className="mx-auto md:px-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="space-y-4">
          <div className="relative aspect-square">
            <div className="absolute top-4 left-4 z-10 space-y-2">
              <span className="inline-block px-2 py-1 text-xs font-semibold bg-black text-white">
                NEW
              </span>
              <div className="inline-block px-2 py-1 text-xs font-semibold bg-emerald-500 text-white">
                -50%
              </div>
            </div>

            {/* Main image with navigation arrows */}
            <div className="relative h-full">
              <img
                src={closet.imageUrl}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Right side - Product details */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className="w-4 h-4 dark:fill-slate-400 fill-black"
                />
              ))}
            </div>
            <span className="text-sm dark:text-slate-400 text-gray-600">
              11 Reviews
            </span>
          </div>

          <h1 className="text-[1.6rem] md:text-[1.9rem] dark:text-[#abc2d3] text-gray-800 font-semibold">
            {closet?.name}
          </h1>

          <p className="text-gray-600 dark:text-slate-400 text-[0.9rem]">
            {closet?.description}
          </p>

          <div className="flex items-center gap-3">
            <span className="text-[1.5rem] dark:text-[#abc2d3] text-gray-800 font-medium">
              ${closet?.price}.00
            </span>
            <span className="text-lg dark:text-slate-400 text-gray-500 line-through">
              ${(closet?.price * 1.1).toFixed(2)}
            </span>
          </div>

          <div className="space-y-2 border-t dark:border-slate-700 border-t-gray-200 pt-4">
            <p className="font-medium dark:text-[#abc2d3] text-[0.9rem] text-gray-600">
              Size: {closet?.sizes}
            </p>
          </div>

          <div className="space-y-2 pt-2">
            <p className="font-medium text-gray-600 dark:text-[#abc2d3] text-[0.9rem]">
              Color:{closet?.color}
            </p>
          </div>

          <div className="flex gap-4 items-center pt-6">
            <p>- 1 +</p>
            <button
              onClick={() => setIsFavorite(!isFavorite)}
              className="py-3 border border-gray-200 rounded-md dark:border-slate-700 dark:text-[#abc2d3] dark:hover:bg-slate-900 flex items-center justify-center gap-[10px] grow hover:bg-gray-50"
            >
              {isFavorite ? (
                <FaHeart className="w-5 h-5 text-red-500" />
              ) : (
                <FaRegHeart className="w-5 h-5 dark:text-[#abc2d3] text-gray-800" />
              )}
              Wishlist
            </button>
          </div>

          <button className="w-full px-6 py-3 bg-[#0FABCA] text-white rounded-md hover:bg-[#0FABCA]/90">
            Add to Cart
          </button>
        </div>
      </div>
      <div className="mt-10">
        <DetailsTabPage></DetailsTabPage>
      </div>
    </div>
  );
};

export default ClosetDetailsPage;
