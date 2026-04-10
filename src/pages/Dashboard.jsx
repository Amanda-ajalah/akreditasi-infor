import React from "react";
import { useNavigate } from "react-router-dom"; // Pastikan sudah install react-router-dom
import Navbar from "../components/Navbar";
import { FileText } from "lucide-react"; // Ikon dokumen agar lebih cantik

const Dashboard = () => {
  const navigate = useNavigate();

  const dataAkreditasi = [
    {
      kriteria: "C1",
      nama: "Budaya Mutu",
      ringkasan: "budaya_mutu",
      path: "/budaya-mutu",
    },
    {
      kriteria: "C2",
      nama: "Relevansi Pendidikan",
      ringkasan: "relevnsi_pendidikan",
      path: "/relevansi-pendidikan",
    },
    {
      kriteria: "C3",
      nama: "Relevansi Penelitian",
      ringkasan: "relevansi_penelitian",
      path: "/relevansi-penelitian",
    },
    {
      kriteria: "C4",
      nama: "Relevansi Pengabdian Kepada Masyarakat",
      ringkasan: "relevansi_pengabdian_masyarakat",
      path: "/relevansi-pengabdian-masyarakat",
    },
    {
      kriteria: "C5",
      nama: "Akuntabilitas",
      ringkasan: "akuntabilitas",
      path: "/akuntabilitas",
    },
    {
      kriteria: "C6",
      nama: "Diferensiasi Misi",
      ringkasan: "diferensasi_misi",
      path: "/diferensiasi-misi",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex justify-between items-end">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 uppercase tracking-tight">
              Dokumen Asesmen Lapangan
            </h2>
            <p className="text-[#00B4D8] font-medium">
              Teknik Informatika UNTAG Surabaya
            </p>
          </div>
          <span className="text-xs font-semibold bg-gray-200 text-gray-600 px-3 py-1 rounded-full">
            Total: {dataAkreditasi.length} Kriteria
          </span>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-sky-500">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase">
                  Kriteria
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase">
                  Nama Kriteria
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-white uppercase">
                  Ringkasan Eksekutif
                </th>
                <th className="px-6 py-4 text-center text-xs font-bold text-white uppercase">
                  Detail Dokumen
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {dataAkreditasi.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-blue-50/30 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#A50000]">
                    {item.kriteria}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-700">
                    {item.nama}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-semibold text-gray-700">
                    {item.ringkasan}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button
                      onClick={() => navigate(item.path)}
                      className="inline-flex items-center px-4 py-2 bg-[#00B4D8] hover:bg-[#0096B4] text-white text-sm font-bold rounded-lg transition-all shadow-sm hover:shadow-md"
                    >
                      <FileText className="w-4 h-4 mr-2" />
                      Dokumen
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
