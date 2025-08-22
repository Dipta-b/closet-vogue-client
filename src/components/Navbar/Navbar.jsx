import React, { useState } from "react";
import logo from "../../assets/logo/logo.jpg";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { BsArrowRight } from "react-icons/bs";
import { MdDashboardCustomize, MdKeyboardArrowDown } from "react-icons/md";
import { CgIfDesign } from "react-icons/cg";
import { FaCubesStacked } from "react-icons/fa6";
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
  const { user, signOutUser } = useAuth();
  const [mobileAboutUsOpen, setMobileAboutUsOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  const handleSignOut = () => {
    signOutUser();
  };

  return (
    <nav className="flex items-center justify-between w-full relative h-auto p-4 bg-white dark:bg-slate-900">
      {/* Logo */}
      <img src={logo} alt="logo" className="w-[100px]" />

      {/* Desktop Navigation */}
      <ul className="items-center gap-[20px] text-[1rem] text-[#424242] md:flex hidden">
        <NavLink
          to="/"
          className="transition-all duration-500 cursor-pointer dark:text-[#abc2d3] hover:text-[#3B9DF8] capitalize"
        >
          Home
        </NavLink>

        {/* Shop Mega Menu */}
        <li className="transition-all duration-500 cursor-pointer dark:text-[#abc2d3] hover:text-[#3B9DF8] capitalize flex items-center gap-[3px] group relative">
          Shop
          <MdKeyboardArrowDown className="text-[1.5rem] dark:text-[#abc2d3] text-[#424242] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]" />
          <article className="p-6 bg-white rounded-md boxShadow w-[500px] absolute top-[40px] z-[-1] left-[-100px] dark:bg-slate-800 group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">
            <div className="grid grid-cols-2">
              <ul className="flex flex-col gap-[7px] text-[#424242]">
                {[
                  "Company Details",
                  "Company Location",
                  "Team Members",
                  "Office Tour",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-[7px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300"
                  >
                    <BsArrowRight className="text-[0.9rem]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </li>

        {/* Blog Mega Menu */}
        <li className="transition-all duration-500 cursor-pointer dark:text-[#abc2d3] hover:text-[#3B9DF8] capitalize group relative flex items-center gap-[3px]">
          Blog
          <MdKeyboardArrowDown className="text-[1.5rem] dark:text-[#abc2d3] text-[#424242] group-hover:text-[#3B9DF8] transition-all duration-500 group-hover:rotate-[180deg]" />
          <article className="p-6 bg-white rounded-md w-[500px] absolute top-[40px] z-[-1] left-[-150px] dark:bg-slate-800 group-hover:translate-y-0 translate-y-[-20px] group-hover:opacity-100 opacity-0 group-hover:z-30 transition-all duration-300">
            <div className="grid grid-cols-2">
              <ul className="flex flex-col gap-[7px] text-[#424242]">
                {[
                  "Company Details",
                  "Company Location",
                  "Team Members",
                  "Office Tour",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-[7px] dark:text-[#abc2d3] hover:text-[#3B9DF8] transition-all duration-300"
                  >
                    <BsArrowRight className="text-[0.9rem]" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </li>

        <li className="transition-all duration-500 cursor-pointer dark:text-[#abc2d3] hover:text-[#3B9DF8] capitalize">
          Pages
        </li>
      </ul>

      {/* Search & Auth Buttons */}
      <div className="flex items-center gap-[10px]">
        <div className="relative md:flex hidden">
          <input
            className="py-1.5 pr-4 dark:bg-transparent dark:border-slate-700 dark:placeholder:text-slate-500 dark:text-[#abc2d3] border border-[#424242] pl-10 rounded-full outline-none focus:border-[#3B9DF8]"
            placeholder="Search..."
          />
          <IoIosSearch className="absolute top-[9px] left-3 text-[1.3rem] text-[#424242] dark:text-slate-500" />
        </div>

        {user ? (
          <button
            onClick={handleSignOut}
            className="border relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-mono dark:bg-slate-800 tracking-tighter text-black bg-white rounded-lg group transition-colors duration-300"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 group-hover:opacity-50"></span>
            <span className="relative text-black dark:text-slate-200 group-hover:text-white">
              Sign Out
            </span>
          </button>
        ) : (
          <Link
            to="/signIn"
            className="border relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-mono dark:bg-slate-800 tracking-tighter text-black bg-white rounded-lg group transition-colors duration-300"
          >
            <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-black rounded-full group-hover:w-56 group-hover:h-56"></span>
            <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 group-hover:opacity-50"></span>
            <span className="relative text-black dark:text-slate-200 group-hover:text-white">
              Sign In
            </span>
          </Link>
        )}
        {/* Show profile image if available */}
        {user && user.photoURL && (
          <img
            src={user.photoURL}
            alt="User Profile"
            className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-600"
            title={user.displayName || "User"}
          />
        )}
      </div>

      {/* Mobile Sidebar */}
      <aside
        className={`${
          mobileSidebarOpen
            ? "translate-x-0 opacity-100 z-20"
            : "translate-x-[200px] opacity-0 z-[-1]"
        } md:hidden bg-white boxShadow p-4 text-center absolute dark:bg-slate-700 top-[55px] right-0 sm:w-[300px] w-full rounded-md transition-all duration-300`}
      >
        {/* Add your mobile menu items here (same as above) */}
      </aside>
    </nav>
  );
};

export default Navbar;
