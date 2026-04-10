import React from "react";
import Navbar from "../../components/Navbar";
import { FileSearch, ChevronLeft } from "lucide-react";
// import { useNavigate } from "react-router-dom";

const DiferensiasiMisi = () => {
  // const navigate = useNavigate();

  // Data dummy sesuai permintaan: 4 kolom (Butir, Baku Mutu, Elemen/Narasi, Detail)
  // Saya gabungkan Elemen & Narasi agar pas 4 kolom utama yang efektif
  const dataDiferensiasiMisi = [
    {
      butir: "1.1",
      bakuMutu: "Ketersediaan dokumen formal SPMI",
      elemenNarasi:
        "Prodi memiliki dokumen kebijakan SPMI yang lengkap dan disahkan oleh Dekan.",
      pathDetail: "#",
    },
    {
      butir: "1.2",
      bakuMutu: "Terlaksananya siklus PPEPP",
      elemenNarasi:
        "Terdapat bukti pelaksanaan Penetapan, Pelaksanaan, Evaluasi, Pengendalian, dan Peningkatan.",
      pathDetail: "#",
    },
    {
      butir: "1.3",
      bakuMutu: "Audit Mutu Internal (AMI)",
      elemenNarasi:
        "Laporan AMI menunjukkan temuan yang ditindaklanjuti secara konsisten setiap tahun.",
      pathDetail: "#",
    },
  ];

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
            C6: DIFERENSIASI MISI
          </h1>
          <p className="text-[#00B4D8] text-sm font-medium uppercase tracking-widest">
            Teknik Informatika UNTAG Surabaya
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#f8fafc]">
              <tr>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">
                  Butir
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">
                  Baku Mutu
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-gray-500 uppercase">
                  Elemen & Narasi
                </th>
                <th className="px-6 py-4 text-center text-xs font-bold text-gray-500 uppercase">
                  Detail Dokumen
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {dataDiferensiasiMisi.map((item, index) => (
                <tr
                  key={index}
                  className="hover:bg-red-50/20 transition-colors"
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-bold text-[#A50000]">
                    {item.butir}
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-gray-700 w-1/4">
                    {item.bakuMutu}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 leading-relaxed">
                    {item.elemenNarasi}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-center">
                    <button className="p-2 bg-gray-100 hover:bg-[#00B4D8] hover:text-white text-gray-600 rounded-lg transition-all shadow-sm">
                      <FileSearch className="w-5 h-5" />
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

export default DiferensiasiMisi;
