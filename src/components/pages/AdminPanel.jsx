import axios from "axios";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const AdminPanel = () => {
  const closetsdata = useLoaderData();
  const [closets, setClosets] = useState(closetsdata);
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:5000/closets/${id}`);
        Swal.fire("Deleted!", "Your watch has been deleted.", "success");
        setClosets((prev) => prev.filter((item) => item._id !== id));
      } catch (error) {
        Swal.fire("Error!", "Failed to delete the watch.", "error");
      }
    }
  };
  return (
    <div className="w-full bg-white dark:bg-slate-800 md:max-w-[80%] boxShadow rounded-md">
      <div className="p-4">
        <h1 className="text-[1.5rem] dark:text-[#abc2d3] font-semibold">
          Manage your entire fashion inventory in one place.
        </h1>
        <p className="text-[0.9rem] dark:text-[#abc2d3]/80 text-gray-500">
          Track categories, update products, and keep your closet collection
          always organized.
        </p>
      </div>

      <div className="mt-4">
        {closets.map((closet) => (
          <div className="flex sm:flex-row flex-col dark:hover:bg-slate-700 sm:items-center w-full justify-between py-3 hover:bg-gray-100 px-4">
            {/* Left side: Avatar + Info */}
            <div className="flex gap-[10px] items-center">
              <img
                src={closet?.imageUrl}
                alt="avatar"
                className="w-[60px] h-[60px] object-cover rounded-full"
              />
              <div className="flex flex-col">
                <h3 className="text-[1.2rem] dark:text-[#abc2d3] font-semibold">
                  {closet?.name}
                </h3>
                <span className="text-[0.9rem] dark:text-[#abc2d3]/80 text-gray-500">
                  {closet?.category}
                </span>
              </div>
            </div>

            {/* Right side: Button */}
            <div className="flex gap-5 items-center">
              <Link
                to={`/update/${closet._id}`}
                className="py-2 px-6 bg-purple-500 text-white rounded-md mt-3 sm:mt-0"
              >
                Update
              </Link>
              <button
                onClick={() => handleDelete(closet._id)}
                className="py-2 px-6 bg-red-500 text-white rounded-md mt-3 sm:mt-0"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
