import React from "react";
import { useAuth } from "../hook/useAuth";
import { useNavigate } from "react-router-dom";

const MainForm = () => {
  const navigate = useNavigate();
  const { user, loading ,logoutHandler } = useAuth();
  if (!loading && !user) navigate("/login");
  return (
    <section className="min-h-screen bg-[#F8F4EC] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl bg-[#0F172A] rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-[#F8F4EC] mb-3">
            Get In Touch
          </h2>

          <p className="text-gray-300 text-lg">
            Have a question, idea, or project in mind? Send us a message.
          </p>
        </div>
        <div className="flex items-center justify-end ">
          <button onClick={logoutHandler} className="bg-red-500 text-white font-bold rounded-full px-4 py-2 mb-3 ">
            Logout{" "}
          </button>
        </div>

        <form className="space-y-6">
          {/* Name */}
          <div>
            <label className="block text-[#F8F4EC] mb-2 text-sm font-medium">
              Name
            </label>

            <input
              type="text"
              value={user?.name}
              placeholder="Enter your name"
              className="w-full pointer-events-none text-gray-300 rounded-2xl border border-slate-700 bg-[#1E293B] px-5 py-4  placeholder:text-gray-400 outline-none focus:border-[#F8F4EC] transition-all duration-300"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#F8F4EC] mb-2 text-sm font-medium">
              Email
            </label>

            <input
              type="email"
              value={user?.email}
              placeholder="Enter your email"
              className="w-full rounded-2xl text-gray-300 pointer-events-none border border-slate-700 bg-[#1E293B] px-5 py-4  placeholder:text-gray-400 outline-none focus:border-[#F8F4EC] transition-all duration-300"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-[#F8F4EC] mb-2 text-sm font-medium">
              Message
            </label>

            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full rounded-2xl border border-slate-700 bg-[#1E293B] px-5 py-4 text-white placeholder:text-gray-400 outline-none focus:border-[#F8F4EC] transition-all duration-300 resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full rounded-2xl bg-[#F8F4EC] text-[#0F172A] py-4 text-lg font-semibold hover:scale-[1.02] transition-all duration-300"
          >
            Submit Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default MainForm;
