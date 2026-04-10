import React from "react";
import Navbar from "../../components/Navbar";
import { FileSearch, ChevronLeft } from "lucide-react";
// import { useNavigate } from "react-router-dom";

const a1 = () => {
  // const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Halaman */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* <button
            onClick={() => navigate("/dashboard")}
            className="flex items-center text-sm text-gray-500 hover:text-[#A50000] transition mb-2"
          >
            <ChevronLeft className="w-4 h-4 mr-1" /> Kembali ke Dashboard
          </button> */}
          <h1 className="text-2xl font-bold text-gray-800">
            A1: LINGKUNGAN MAKRO
          </h1>
          <p className="text-[#00B4D8] text-sm font-medium uppercase tracking-widest">
            Teknik Informatika UNTAG Surabaya
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          Konten
        </div>
      </main>
    </div>
  );
};

export default a1;
