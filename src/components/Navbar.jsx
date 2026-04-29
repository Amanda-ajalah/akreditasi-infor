import React, { useState } from "react";
import { Menu, X, ChevronDown, LogOut } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logoUntag from "../assets/LogoUntag.png";
import logoIF from "../assets/LogoInformatika.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Cek menu mana yang sedang aktif
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 font-['Poppins']">
      {/* --- BARIS ATAS: Branding Section (Tinggi 80px) ---
        Kita gunakan padding agar logo dan judul tidak menempel di ujung layar.
      */}
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo Area (Kiri) - Teks Memanjang Rapi */}
        <div className="flex items-center space-x-4">
          {/* Bagian UNTAG SURABAYA */}
          <div className="flex items-center space-x-3">
            {/* Logo UNTAG */}
            <img src={logoUntag} alt="Logo Untag" className="h-12 w-auto" />
            {/* Teks UNTAG (Atas-Bawah) */}
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-extrabold text-[#2D3436] tracking-tight leading-none">
                UNTAG
              </h1>
              <p className="text-[15px] text-[#A50000] font-bold tracking-[0.1em] uppercase mt-0.5">
                Surabaya
              </p>
            </div>
          </div>

          {/* Garis Pemisah (Vertical Line) */}
          <div className="h-8 w-[1.5px] bg-red-800"></div>

          {/* Bagian TEKNIK INFORMATIKA */}
          <div className="flex items-center space-x-3">
            {/* Logo Informatika / Teknik */}
            <img src={logoIF} alt="Logo IF" className="h-12 w-auto" />
            {/* Teks Teknik Informatika (Atas-Bawah) */}
            <div className="flex flex-col justify-center">
              <h1 className="text-xl font-extrabold text-[#2D3436] tracking-tight leading-none">
                TEKNIK
              </h1>
              <h1 className="text-xl font-extrabold text-[#2D3436] tracking-tight leading-none">
                INFORMATIKA
              </h1>
            </div>
          </div>
        </div>

        {/* Title Area (Kanan) - Judul Akreditasi Kecil */}
        <div className="hidden lg:block text-right">
          <p className="text-[50px] md:text-lg font-bold text-[#000000] tracking-wider uppercase leading-snug">
            AKREDITASI PRODI TEKNIK INFORMATIKA <br />
            UNIVERSITAS 17 AGUSTUS 1945 SURABAYA
          </p>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* --- LETAK GARIS MERAH PEMISAH (SUDAH DIPERBAIKI) --- */}
      {/* Garis ini berdiri sendiri, tepat di bawah Baris Atas */}
      <div className="h-1 bg-[#A50000] w-full"></div>

      {/* --- BARIS BAWAH: Navigation Menu (Tinggi 48px) --- */}
      <div className="bg-[#f0f9ff] hidden lg:block border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-12">
          {/* Menu Items (Tampil seperti Tab) */}
          <div className="flex h-full space-x-1">
            <button
              onClick={() => navigate("/dashboard")}
              className={`px-6 flex items-center h-full text-sm font-semibold transition-all duration-300 ${
                isActive("/dashboard")
                  ? "bg-[#00B4D8] text-white shadow-md"
                  : "text-gray-600 hover:bg-[#e0f2fe]"
              }`}
            >
              Beranda
            </button>

            {/* Dropdown Kondosi Eksternal*/}
            <div className="relative group h-full">
              <button
                className={`px-6 flex items-center h-full text-sm font-semibold text-gray-600 group-hover:bg-[#e0f2fe] transition-all`}
              >
                Kondisi Eksternal <ChevronDown size={14} className="ml-1" />
              </button>

              <div className="absolute top-full left-0 w-60 bg-white shadow-xl border border-gray-100 py-3 rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <button
                  onClick={() => navigate("/a1")}
                  className="w-full text-left block px-5 py-2 text-sm text-gray-700 hover:bg-[#00B4D8] hover:text-white"
                >
                  A1 Lingkungan Makro
                </button>
                <button
                  onClick={() => navigate("/a2")}
                  className="w-full text-left block px-5 py-2 text-sm text-gray-700 hover:bg-[#00B4D8] hover:text-white"
                >
                  A2 Lingkungan Mikro
                </button>
              </div>
            </div>

            {/* Profil unit pengelola program studi */}
            <div className="relative group h-full">
              <button
                className={`px-6 flex items-center h-full text-sm font-semibold text-gray-600 group-hover:bg-[#e0f2fe] transition-all`}
              >
                Profil <ChevronDown size={14} className="ml-1" />
              </button>

              <div className="absolute top-full left-0 w-60 bg-white shadow-xl border border-gray-100 py-3 rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <button
                  onClick={() => navigate("/b1")}
                  className="w-full text-left block px-5 py-2 text-sm text-gray-700 hover:bg-[#00B4D8] hover:text-white"
                >
                  B1 Sejarah Unit Pengelola Program Studi
                </button>
                <button
                  onClick={() => navigate("/b2")}
                  className="w-full text-left block px-5 py-2 text-sm text-gray-700 hover:bg-[#00B4D8] hover:text-white"
                >
                  B2 Visi, Misi, Tujuan, Strategi, dan Tata Nilai
                </button>
                <button
                  onClick={() => navigate("/b3")}
                  className="w-full text-left block px-5 py-2 text-sm text-gray-700 hover:bg-[#00B4D8] hover:text-white"
                >
                  B3 Organisasi dan Tata Kerja
                </button>
                <button
                  onClick={() => navigate("/b4")}
                  className="w-full text-left block px-5 py-2 text-sm text-gray-700 hover:bg-[#00B4D8] hover:text-white"
                >
                  B4 Mahasiswa dan Lulusan
                </button>
                <button
                  onClick={() => navigate("/b5")}
                  className="w-full text-left block px-5 py-2 text-sm text-gray-700 hover:bg-[#00B4D8] hover:text-white"
                >
                  B5 Dosen dan Tenaga Kependidikan
                </button>
                <button
                  onClick={() => navigate("/b6")}
                  className="w-full text-left block px-5 py-2 text-sm text-gray-700 hover:bg-[#00B4D8] hover:text-white"
                >
                  B6 Keuangan, Sarana, dan Prasarana
                </button>
                <button
                  onClick={() => navigate("/b7")}
                  className="w-full text-left block px-5 py-2 text-sm text-gray-700 hover:bg-[#00B4D8] hover:text-white"
                >
                  B7 Sistem Penjamin Mutu
                </button>
                <button
                  onClick={() => navigate("/b8")}
                  className="w-full text-left block px-5 py-2 text-sm text-gray-700 hover:bg-[#00B4D8] hover:text-white"
                >
                  B8 Kinerja Unit Pengelola Program Studi dan Program Studi yang
                  Diakreditasi
                </button>
              </div>
            </div>

            {/* Dropdown Standar */}
            <div className="relative group h-full">
              <button
                className={`px-6 flex items-center h-full text-sm font-semibold text-gray-600 group-hover:bg-[#e0f2fe] transition-all`}
              >
                Standar <ChevronDown size={14} className="ml-1" />
              </button>

              <div className="absolute top-full left-0 w-60 bg-white shadow-xl border border-gray-100 py-3 rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <button
                  onClick={() => navigate("/budaya-mutu")}
                  className="w-full text-left block px-5 py-2 text-sm text-gray-700 hover:bg-[#00B4D8] hover:text-white"
                >
                  C1 Budaya Mutu
                </button>

                <button
                  onClick={() => navigate("/relevansi-pendidikan")}
                  className="w-full text-left block px-5 py-2 text-sm text-gray-700 hover:bg-[#00B4D8] hover:text-white"
                >
                  C2 Relevansi Pendidikan
                </button>
                <button
                  onClick={() => navigate("/relevansi-penelitian")}
                  className="w-full text-left block px-5 py-2 text-sm text-gray-700 hover:bg-[#00B4D8] hover:text-white"
                >
                  C3 Relevansi Penelitian
                </button>
                <button
                  onClick={() => navigate("/relevansi-pengabdian-masyarakat")}
                  className="w-full text-left block px-5 py-2 text-sm text-gray-700 hover:bg-[#00B4D8] hover:text-white"
                >
                  C4 Rel. Pengabdian Mas
                </button>
                <button
                  onClick={() => navigate("/akuntabilitas")}
                  className="w-full text-left block px-5 py-2 text-sm text-gray-700 hover:bg-[#00B4D8] hover:text-white"
                >
                  C5 Akuntabilitas
                </button>
                <button
                  onClick={() => navigate("/diferensiasi-misi")}
                  className="w-full text-left block px-5 py-2 text-sm text-gray-700 hover:bg-[#00B4D8] hover:text-white"
                >
                  C6 Diferensiasi Misi
                </button>
              </div>
            </div>

            {/* Suplemen*/}
            <div className="relative group h-full">
              <button
                className={`px-6 flex items-center h-full text-sm font-semibold text-gray-600 group-hover:bg-[#e0f2fe] transition-all`}
              >
                Suplemen <ChevronDown size={14} className="ml-1" />
              </button>

              <div className="absolute top-full left-0 w-60 bg-white shadow-xl border border-gray-100 py-3 rounded-b-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <button
                  onClick={() => navigate("/d1")}
                  className="w-full text-left block px-5 py-2 text-sm text-gray-700 hover:bg-[#00B4D8] hover:text-white"
                >
                  D1 Mata Kuliah Inti/Khas Ilmu Komputer
                </button>
                <button
                  onClick={() => navigate("/d2")}
                  className="w-full text-left block px-5 py-2 text-sm text-gray-700 hover:bg-[#00B4D8] hover:text-white"
                >
                  D2 Mata Kuliah Domain Spesifik dan Lingkungan Pengembangan
                  Perangkat Lunak
                </button>
                <button
                  onClick={() => navigate("/d3")}
                  className="w-full text-left block px-5 py-2 text-sm text-gray-700 hover:bg-[#00B4D8] hover:text-white"
                >
                  D3 Mata Kuliah Terkait Matematika yang Relevan dengan Bidang
                  Ilmu Komputer
                </button>
                <button
                  onClick={() => navigate("/d4")}
                  className="w-full text-left block px-5 py-2 text-sm text-gray-700 hover:bg-[#00B4D8] hover:text-white"
                >
                  D4 Proyek Utama (Capstone Project) yang Relevan dengan Bidang
                  Ilmu Komputer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-in fade-in duration-300">
          <div className="px-4 py-4 space-y-2">
            <button
              onClick={() => navigate("/dashboard")}
              className="block w-full text-left py-2.5 font-bold text-gray-700 border-b border-gray-50"
            >
              Beranda
            </button>
            <button
              onClick={() => navigate("/budaya-mutu")}
              className="block w-full text-left py-2.5 font-bold text-gray-700 border-b border-gray-50"
            >
              Budaya Mutu
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
