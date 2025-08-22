import React from "react";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const { user, createUser, updateUserProfile } = useAuth();
  const navigate = useNavigate();
  const handlRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const profileImage = form.profileImage.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserProfile(name, profileImage).then(() => {
          Swal.fire({
            icon: "success",
            title: "Registration successful!",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
          navigate("/");
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col w-full">
        <div className="text-center mb-6">
          <h1 className="text-5xl font-bold">Register now!</h1>
        </div>

        {/* Wider card */}
        <div className="card bg-base-100 w-full max-w-2xl mx-auto shadow-2xl">
          <form onSubmit={handlRegister} className="card-body">
            {/* Name */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Full Name</span>
              </label>
              <input
                name="name"
                type="text"
                placeholder="Your name"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Email */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Password */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered w-full"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            {/* Profile Image */}
            <div className="form-control mb-4">
              <label className="label">
                <span className="label-text">Profile Image</span>
              </label>
              <input
                name="profileImage"
                type="text"
                accept="image/*"
                className="file-input file-input-bordered w-full"
              />
            </div>

            {/* Submit */}
            <div className="form-control mt-6">
              <button className="btn btn-primary w-full">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
