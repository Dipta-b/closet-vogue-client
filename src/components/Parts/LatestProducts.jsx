import axios from "axios";
import React, { useState, useEffect } from "react";

const LatestProducts = () => {
  const [activeTab, setActiveTab] = useState("allproducts");
  const [closets, setClosets] = useState([]);
  const [loading, setLoading] = useState(false);

  const categories = [
    "allproducts",
    "dress",
    "handbags",
    "shoes",
    "accessories",
  ];

  const handleCategory = (category) => {
    setActiveTab(category);
    setLoading(true);

    axios
      .get(`http://localhost:5000/closets/category/${category}`)
      .then((res) => {
        setClosets(res.data);
      })
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  };

  // Load all products initially
  useEffect(() => {
    handleCategory("allproducts");
  }, []);

  return (
    <div className="p-6">
      <h4 className="text-4xl text-center font-bold">Latest Products</h4>
      <p className="text-center text-sm font-light mb-6">
        Best selling products
      </p>

      {/* Tabs */}
      <div className="tabs flex justify-center mb-6">
        {categories.map((cat) => (
          <input
            key={cat}
            type="radio"
            name="my_tabs"
            className="tab text-lg md:text-xl checked:border-b-4 checked:border-red-500"
            aria-label={cat.charAt(0).toUpperCase() + cat.slice(1)}
            checked={activeTab === cat}
            onChange={() => handleCategory(cat)}
          />
        ))}
      </div>

      {/* Loading */}
      {loading && <p className="text-center">Loading...</p>}

      {/* Empty */}
      {!loading && closets.length === 0 && (
        <p className="text-center">No products found.</p>
      )}

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {closets.map((item) => (
          <div
            key={item._id}
            className="card bg-base-100 shadow-md rounded-xl overflow-hidden"
          >
            <figure>
              <img
                src={item.image}
                alt={item.name}
                className="h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.name}</h2>
              <p className="text-gray-700">${item.price}</p>
              <span className="badge badge-outline capitalize">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestProducts;
