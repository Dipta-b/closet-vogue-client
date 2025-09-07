import axios from "axios";
import React, { useState, useEffect } from "react";
import AddToCartButton from "../pages/shared/AddToCartButton";

const LatestProducts = () => {
  const [activeTab, setActiveTab] = useState("allproducts");
  const [closets, setClosets] = useState([]);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(0); // carousel index
  const [fade, setFade] = useState(false); // for transition

  const categories = ["allproducts", "dress", "handbags", "shoes", "accessories"];

  const handleCategory = (category) => {
    setActiveTab(category);
    setLoading(true);
    setFade(false); // fade-out

    axios
      .get(`http://localhost:5000/closets/category/${category}`)
      .then((res) => {
        setClosets(res.data);
        setCurrent(0); // reset carousel
        setTimeout(() => setFade(true), 200); // fade-in
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    handleCategory("allproducts");
  }, []);

  // Pagination (6 products per page)
  const itemsPerPage = 6;
  const pages = [];
  for (let i = 0; i < closets.length; i += itemsPerPage) {
    pages.push(closets.slice(i, i + itemsPerPage));
  }

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h4 className="text-4xl font-bold tracking-wide">✨ Latest Products</h4>
        <p className="text-gray-500 mt-2">Discover our best-selling collections</p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 
              ${activeTab === cat
                ? "bg-red-500 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            onClick={() => handleCategory(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {/* Loading */}
      {loading && (
        <div className="flex justify-center items-center h-40">
          <span className="loading loading-spinner loading-lg text-red-500"></span>
        </div>
      )}

      {/* Carousel */}
      {!loading && closets.length > 0 && (
        <div
          className={`transition-opacity duration-700 ${fade ? "opacity-100" : "opacity-0"
            }`}
        >
          {/* Product Grid per page */}
          <div className="w-full max-w-6xl mx-auto">
            {pages.map((page, pageIndex) => (
              <div
                key={pageIndex}
                className={`${pageIndex === current ? "block" : "hidden"}`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                  {page.map((item) => (
                    <div
                      key={item._id}
                      className="group bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                    >
                      {/* Image */}
                      <div className="relative">
                        <img
                          src={item.imageUrl}
                          alt={item.name}
                          className="h-60 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full">
                          {item.category}
                        </div>
                      </div>

                      {/* Details */}
                      <div className="p-5 flex flex-col justify-between h-40">
                        <div>
                          <h2 className="text-lg font-semibold truncate">{item.name}</h2>
                          <p className="text-red-500 font-bold mt-1">${item.price}</p>
                        </div>
                        <AddToCartButton
                          className="bg-red-500 hover:bg-red-600 transition-all duration-300 text-white rounded-lg px-4 py-2 mt-3 opacity-0 group-hover:opacity-100"
                          product={{
                            productId: item?._id,
                            name: item?.name,
                            price: item?.price,
                            category: item?.category,
                            color: item?.color,
                            description: item?.description,
                            gender: item?.gender,
                            imageUrl: item?.imageUrl,
                            productDetails: item?.productDetails,
                            shortDescription: item?.shortDescription,
                            sizes: item?.sizes,
                            subCategory: item?.subCategory,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex justify-center items-center gap-3 mt-8">
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200"
              onClick={() =>
                setCurrent((prev) => (prev === 0 ? pages.length - 1 : prev - 1))
              }
            >
              ❮
            </button>
            {pages.map((_, i) => (
              <button
                key={i}
                className={`w-8 h-8 rounded-full text-sm flex items-center justify-center transition-all duration-300
                  ${i === current
                    ? "bg-red-500 text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                onClick={() => setCurrent(i)}
              >
                {i + 1}
              </button>
            ))}
            <button
              className="w-10 h-10 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-200"
              onClick={() =>
                setCurrent((prev) => (prev === pages.length - 1 ? 0 : prev + 1))
              }
            >
              ❯
            </button>
          </div>
        </div>
      )}

      {/* No products */}
      {!loading && closets.length === 0 && (
        <p className="text-center text-gray-500 mt-10">No products found.</p>
      )}
    </div>
  );
};

export default LatestProducts;
