import axios from "axios";
import React from "react";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateRoute = () => {
  const closet = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  const handleUpdate = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const product = Object.fromEntries(formData);
    axios.put(`http://localhost:5000/closets/${id}`, product).then((res) => {
      if (res.data.modifiedCount) {
        Swal.fire({
          title: "Closet updated Successfully!",
          text: "Modal with a custom image.",
          imageUrl: product?.imageUrl,
          imageWidth: 300,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      }
      navigate("/adminPanel");
    });
  };
  return (
    <div className="rounded-2xl p-6 max-w-3xl mx-auto p-8 shadow-base-300 bg-gray-500">
      <h1 className="text-3xl font-bold mb-6">➕ Update Product</h1>

      <form
        onSubmit={handleUpdate}
        className="bg-gray-500 shadow-lg rounded-2xl p-6 space-y-6"
      >
        {/* Product Name */}
        <div>
          <label className="block text-sm font-medium mb-1">Product Name</label>
          <input
            defaultValue={closet?.name}
            type="text"
            name="name"
            placeholder="Denim Jacket"
            className="w-full border rounded-lg p-2 focus:ring focus:ring-indigo-300"
          />
        </div>

        {/* Category */}
        <div className="form-control">
          <label className="label">
            <span className="label-text text-black">Category</span>
          </label>
          <select
            name="category"
            className="select select-bordered w-full text-black"
            required
          >
            <option selected value="LIMITED OFFER">
              Select Category
            </option>
            <option value="DRESS">Dress</option>
            <option value="HANDBAGS">Handbags</option>
            <option value="SHOES">Shoes</option>
            <option value="ACCESSORIES">Accessories</option>
          </select>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium mb-1">Gender</label>
          <input
            defaultValue={closet?.gender}
            type="text"
            name="gender"
            placeholder="Male/Female"
            className="w-full border rounded-lg p-2 focus:ring focus:ring-indigo-300"
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium mb-1">Price ($)</label>
          <input
            defaultValue={closet?.price}
            type="number"
            name="price"
            placeholder="59.99"
            className="w-full border rounded-lg p-2 focus:ring focus:ring-indigo-300"
          />
        </div>

        {/* Sizes */}
        <div>
          <label className="block text-sm font-medium mb-1">Sizes</label>
          <input
            defaultValue={closet?.sizes}
            type="text"
            name="sizes"
            placeholder="S, M, L, XL"
            className="w-full border rounded-lg p-2 focus:ring focus:ring-indigo-300"
          />
        </div>

        {/* Color */}
        <div>
          <label className="block text-sm font-medium mb-1">Color</label>
          <input
            defaultValue={closet?.color}
            type="text"
            name="color"
            placeholder="Blue"
            className="w-full border rounded-lg p-2 focus:ring focus:ring-indigo-300"
          />
        </div>

        {/*Short Description */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Short Description
          </label>
          <textarea
            rows="4"
            defaultValue={closet?.shortDescription}
            name="shortDescription"
            placeholder="Short description of the product"
            className="w-full border rounded-lg p-2 focus:ring focus:ring-indigo-300"
          ></textarea>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium mb-1">Description</label>
          <textarea
            defaultValue={closet?.description}
            rows="4"
            name="description"
            placeholder="Classic denim jacket with a modern fit"
            className="w-full border rounded-lg p-2 focus:ring focus:ring-indigo-300"
          ></textarea>
        </div>

        {/*Product Image  */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Product Image
          </label>
          <input
            defaultValue={closet?.imageUrl}
            type="text"
            name="imageUrl"
            placeholder="product-img"
            className="block text-sm font-medium mb-1 border-2 border-dashed rounded-lg p-6 text-center text-gray-500 w-full"
          />
        </div>

        {/* Products Details */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Product Details
          </label>
          <textarea
            defaultValue={closet?.productDetails}
            rows="4"
            name="productDetails"
            placeholder="Brand/Reference/In Stock"
            className="w-full border rounded-lg p-2 focus:ring focus:ring-indigo-300"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-xl text-lg"
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateRoute;
