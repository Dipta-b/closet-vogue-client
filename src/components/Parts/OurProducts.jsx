import axios from "axios";
import { useEffect, useState } from "react";
import AddToCartButton from "../pages/shared/AddToCartButton";
import { Link } from "react-router-dom";
const OurProducts = () => {
  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get("http://localhost:5000/closets?limit=4").then((res) => {
      setClothes(res.data);
      setLoading(false);
    });
  }, []);
  if (loading) return <p>Loading...</p>;
  return (
    <div>
      <h4 className="text-4xl	text-center font-bold">Our Products</h4>
      <p className="text-center text-sm	 font-light">Best selling products</p>
      {/* product card */}
      <div className="flex">
        <Link to="/allCloset" className="ml-auto text-blue-500 hover:underline">
          View All
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-16 mt-10 md:grid-cols-4">
        {clothes.map((clothe) => (
          <div
            key={clothe._id}
            className="w-[250px] overflow-hidden border shadow-lg"
          >
            {/* Image + hover overlay */}
            <div className="relative w-full h-[250px] group">
              <img
                src={clothe.imageUrl}
                alt={clothe.name}
                className="w-full h-full object-cover"
              />

              {/* Sliding overlay from image on hover */}
              <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-white p-3 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <h3 className="text-lg font-bold mb-1"></h3>
                <p className="text-sm mb-1"></p>
                <AddToCartButton
                  className="bg-gray-400 z-[1-] opacity-0 group-hover:z-20 group-hover:opacity-100 px-3 py-2 mt-3 hover:bg-gray-500 transition-all duration-1000 text-white rounded-md text-[0.9rem]"
                  product={{ productId: clothe?._id, name: clothe?.name, price: clothe?.price, category: clothe?.category, color: clothe?.color, description: clothe?.description, gender: clothe?.gender, imageUrl: clothe?.imageUrl, productDetails: clothe?.productDetails, shortDescription: clothe?.shortDescription, sizes: clothe?.sizes, subCategory: clothe?.subCategory }}></AddToCartButton>
              </div>
            </div>

            {/* Info section below the image */}
            <div className="bg-white p-3 text-center">
              <p className="text-md hover:text-red-500 transition-colors duration-500">
                {clothe.name}
              </p>
              <p className="text-md font-light hover:font-medium transition-all duration-150 ease-in-out">
                {clothe.category}
              </p>

              <p className="text-red-500 font-semibold text-smd">
                ${clothe.price}.00
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProducts;
