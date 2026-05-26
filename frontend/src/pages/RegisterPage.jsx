import React from "react";
import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <section className="min-h-screen bg-[#F8F4EC] flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-5xl bg-[#0F172A] rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2">
        {/* Left Side */}
        <div className="hidden md:flex flex-col justify-center p-12 bg-[#111C33]">
          <h1 className="text-5xl font-bold leading-tight text-[#F8F4EC]">
            Join She CAN FOUNDATION
          </h1>

          <p className="text-gray-300 mt-6 text-lg leading-relaxed">
            Access your account , message us, and continue 
            building smarter work experiences.
          </p>

          <div className="mt-10 h-[2px] w-24 bg-[#F8F4EC]" />
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-12 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-[#F8F4EC] md:text-[#0F172A]">
              Register
            </h2>

            <p className="text-gray-500 mt-2">
              Create your account to continue
            </p>
          </div>

          <form className="space-y-6">
            {/* Username */}
            <div>
              <label className="block mb-2 text-sm font-medium text-[#0F172A]">
                Username
              </label>

              <input
                type="text"
                placeholder="Enter your username"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-[#0F172A] transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block mb-2 text-sm font-medium text-[#0F172A]">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-[#0F172A] transition-all duration-300"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-2 text-sm font-medium text-[#0F172A]">
                Password
              </label>

              <input
                type="password"
                placeholder="Create a password"
                className="w-full rounded-2xl border border-gray-300 px-5 py-4 outline-none focus:border-[#0F172A] transition-all duration-300"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-[#0F172A] text-[#F8F4EC] py-4 rounded-2xl text-lg font-semibold hover:scale-[1.02] transition-all duration-300"
            >
              Create Account
            </button>
          </form>

          <p className="text-gray-500 text-sm mt-6 text-center">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-[#0F172A] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
