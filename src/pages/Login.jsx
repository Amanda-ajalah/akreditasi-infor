import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Lock, User, ArrowRight } from "lucide-react";
import logoUntag from "../assets/LogoUntag.png";
import logoIF from "../assets/LogoInformatika.png";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulasi delay sebentar agar terlihat proses loading-nya
    setTimeout(() => {
      navigate("/dashboard");
    }, 800);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      {/* Accent Line Top */}
      <div className="absolute top-0 left-0 w-full h-2 bg-[#A50000]"></div>

      <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-10 border border-gray-100">
        {/* Branding Section */}
        <div className="text-center mb-10">
          <div className="flex justify-center space-x-4 mb-6">
            <img src={logoUntag} alt="Untag" className="h-16" />
            <div className="w-px h-12 bg-gray-200 self-center"></div>
            <img src={logoIF} alt="Informatika" className="h-16" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
            SI-AKREDITASI
          </h2>
          <p className="text-sm text-[#00B4D8] font-semibold mt-1">
            TEKNIK INFORMATIKA UNTAG SURABAYA
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          {/* Input Username */}
          <div className="relative">
            <label className="text-xs font-bold text-gray-500 uppercase ml-1">
              Username
            </label>
            <div className="mt-1 relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <User size={18} />
              </span>
              <input
                type="text"
                placeholder="Masukkan username"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent outline-none transition-all"
                required
              />
            </div>
          </div>

          {/* Input Password */}
          <div className="relative">
            <label className="text-xs font-bold text-gray-500 uppercase ml-1">
              Password
            </label>
            <div className="mt-1 relative">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <Lock size={18} />
              </span>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#00B4D8] focus:border-transparent outline-none transition-all"
                required
              />
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#A50000] hover:bg-red-800 text-white font-bold py-3 px-4 rounded-xl shadow-lg shadow-red-200 flex items-center justify-center group transition-all"
          >
            {loading ? (
              <span className="animate-pulse">Mohon Tunggu...</span>
            ) : (
              <>
                MASUK KE SISTEM
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        {/* Footer Login */}
        <div className="mt-8 text-center text-xs text-gray-400">
          <p>&copy; 2026 Teknik Informatika - UNTAG Surabaya</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
