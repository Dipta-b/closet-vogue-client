import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiPhone } from "react-icons/fi"; // import the phone icon

import { FcGoogle } from "react-icons/fc";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const SignIn = () => {
  const [hovered, setHovered] = useState(false);
  const { signInuser, signInWithGoogle } = useAuth();
  const navigate = useNavigate();
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInuser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if (user.uid) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Successful",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate("/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  const signInByGoogle = () => {
    signInWithGoogle().then((result) => {
      const user = result.user;
      navigate("/");
    });
  };
  return (
    <div className="w-full max-w-sm p-6 m-auto bg-white rounded-lg shadow-md dark:bg-gray-800">
      <h3 className="mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200">
        Welcome Back
      </h3>

      <p className="mt-1 text-center text-gray-500 dark:text-gray-400">
        Login or create account
      </p>

      <form className="mt-6" onSubmit={handleSignIn}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm text-gray-800 dark:text-gray-200"
          >
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm text-gray-800 dark:text-gray-200"
            >
              Password
            </label>
          </div>

          <input
            name="password"
            type="password"
            required
            className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-lg dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-6 py-2.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-gray-800 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
          >
            Sign In
          </button>
        </div>
      </form>

      <div className="flex items-center justify-between mt-4">
        <span className="w-1/5 border-b dark:border-gray-600 lg:w-1/5"></span>

        <span className="text-xs text-center text-gray-500 uppercase dark:text-gray-400">
          or login with Social Media
        </span>

        <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/5"></span>
      </div>

      <div className="flex items-center mt-6 -mx-2">
        <button
          onClick={signInByGoogle}
          type="button"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
        >
          {hovered ? (
            <FcGoogle className="w-5 h-5 mx-2" />
          ) : (
            <svg className="w-4 h-4 mx-2 fill-current" viewBox="0 0 24 24">
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
            </svg>
          )}
          <span className="hidden mx-2 sm:inline">Sign in with Google</span>
        </button>
      </div>
      <div className="flex items-center mt-6 -mx-2">
        <Link
          to="/signInByPhoneNumber"
          type="button"
          className="flex items-center justify-center w-full px-6 py-2 mx-2 text-sm font-medium text-white transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:bg-blue-400 focus:outline-none"
        >
          <FiPhone className="w-5 h-5 mr-2" /> {/* Phone icon */}
          <span className="hidden mx-2 sm:inline">
            Sign in with Phone Number
          </span>
        </Link>
      </div>

      <p className="mt-8 text-xs font-light text-center text-gray-400">
        Don't have an account?{" "}
        <Link
          to="/register"
          className="font-medium text-gray-700 dark:text-gray-200 hover:underline"
        >
          Create One
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
