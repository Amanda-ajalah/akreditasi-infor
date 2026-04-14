import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import { FileSearch } from "lucide-react";

const BudayaMutu = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const dataBudayaMutu = [
    {
      butir: "1.1 [PENETAPAN]",
      element:
        "1.1.A. Kebijakan, standar, dan indikator terkait Sistem Tata Kelola UPPS dan/atau PT berikut SOP, yang mencakup administrasi akademik, keuangan, SDM, dan aspek lain dalam siklus PPEPP, di tingkat UPPS dan/atau PT.",
      dokumen:
        "1.1.A.1 Kebijakan, standar, dan indikator terkait Sistem Tata Kelola UPPS dan/atau PT berikut SOP, yang mencakup administrasi akademik dalam siklus PPEPP, di tingkat UPPS dan/atau PT.",
      narasi: `
        <p class="mb-2">Kebijakan terkait adalah sebagai berikut:</p>
        <ul class="list-decimal ml-4 space-y-1 mb-2">
          <li>Kebijakan sistem penjaminan mutu internal (SPMI)...</li>
          <li>Peraturan Rektor No. 3 Tahun 2023...</li>
        </ul>
        <table class="w-full border border-gray-200 text-[10px]">
          <tr class="bg-gray-50">
            <th class="border px-2 py-1 text-left">Pernyataan Standar</th>
            <th class="border px-2 py-1 text-left">Indikator</th>
          </tr>
          <tr>
            <td class="border px-2 py-1">Universitas harus menyediakan fasilitas...</td>
            <td class="border px-2 py-1">Tersedianya sarana dan prasarana...</td>
          </tr>
        </table>
      `,
    },
    {
      butir: "",
      element: "",
      dokumen:
        "1.1.A.2 Kebijakan, standar, dan indikator terkait Sistem Tata Kelola UPPS dan/atau PT berikut SOP, yang mencakup administrasi keuangan dalam siklus PPEPP, di tingkat UPPS dan/atau PT.",
      narasi: `
        <p class="mb-2">Kebijakan terkait adalah sebagai berikut:</p>
        <ul class="list-decimal ml-4 space-y-1 mb-2">
          <li>Kebijakan sistem penjaminan mutu internal (SPMI)...</li>
          <li>Peraturan Rektor No. 3 Tahun 2023...</li>
        </ul>
        <table class="w-full border border-gray-200 text-[10px]">
          <tr class="bg-gray-50">
            <th class="border px-2 py-1 text-left">Pernyataan Standar</th>
            <th class="border px-2 py-1 text-left">Indikator</th>
          </tr>
          <tr>
            <td class="border px-2 py-1">Universitas harus menyediakan fasilitas...</td>
            <td class="border px-2 py-1">Tersedianya sarana dan prasarana...</td>
          </tr>
        </table>
      `,
    },
    {
      butir: "1.2 [PELAKSANAAN]",
      element:
        "1.1.A. Kebijakan, standar, dan indikator terkait Sistem Tata Kelola UPPS dan/atau PT berikut SOP, yang mencakup administrasi akademik, keuangan, SDM, dan aspek lain dalam siklus PPEPP, di tingkat UPPS dan/atau PT.",
      dokumen:
        "1.1.A.1 Kebijakan, standar, dan indikator terkait Sistem Tata Kelola UPPS dan/atau PT berikut SOP, yang mencakup administrasi akademik dalam siklus PPEPP, di tingkat UPPS dan/atau PT.",
      narasi: `
        <p class="mb-2">Kebijakan terkait adalah sebagai berikut:</p>
        <ul class="list-decimal ml-4 space-y-1 mb-2">
          <li>Kebijakan sistem penjaminan mutu internal (SPMI)...</li>
          <li>Peraturan Rektor No. 3 Tahun 2023...</li>
        </ul>
        <table class="w-full border border-gray-200 text-[10px]">
          <tr class="bg-gray-50">
            <th class="border px-2 py-1 text-left">Pernyataan Standar</th>
            <th class="border px-2 py-1 text-left">Indikator</th>
          </tr>
          <tr>
            <td class="border px-2 py-1">Universitas harus menyediakan fasilitas...</td>
            <td class="border px-2 py-1">Tersedianya sarana dan prasarana...</td>
          </tr>
        </table>
      `,
    },
    {
      butir: "1.3 [EVALUASI]",
      element:
        "1.1.A. Kebijakan, standar, dan indikator terkait Sistem Tata Kelola UPPS dan/atau PT berikut SOP, yang mencakup administrasi akademik, keuangan, SDM, dan aspek lain dalam siklus PPEPP, di tingkat UPPS dan/atau PT.",
      dokumen:
        "1.1.A.1 Kebijakan, standar, dan indikator terkait Sistem Tata Kelola UPPS dan/atau PT berikut SOP, yang mencakup administrasi akademik dalam siklus PPEPP, di tingkat UPPS dan/atau PT.",
      narasi: `
        <p class="mb-2">Kebijakan terkait adalah sebagai berikut:</p>
        <ul class="list-decimal ml-4 space-y-1 mb-2">
          <li>Kebijakan sistem penjaminan mutu internal (SPMI)...</li>
          <li>Peraturan Rektor No. 3 Tahun 2023...</li>
        </ul>
        <table class="w-full border border-gray-200 text-[10px]">
          <tr class="bg-gray-50">
            <th class="border px-2 py-1 text-left">Pernyataan Standar</th>
            <th class="border px-2 py-1 text-left">Indikator</th>
          </tr>
          <tr>
            <td class="border px-2 py-1">Universitas harus menyediakan fasilitas...</td>
            <td class="border px-2 py-1">Tersedianya sarana dan prasarana...</td>
          </tr>
        </table>
      `,
    },
    {
      butir: "1.4 [PENGENDALIAN]",
      element:
        "1.1.A. Kebijakan, standar, dan indikator terkait Sistem Tata Kelola UPPS dan/atau PT berikut SOP, yang mencakup administrasi akademik, keuangan, SDM, dan aspek lain dalam siklus PPEPP, di tingkat UPPS dan/atau PT.",
      dokumen:
        "1.1.A.1 Kebijakan, standar, dan indikator terkait Sistem Tata Kelola UPPS dan/atau PT berikut SOP, yang mencakup administrasi akademik dalam siklus PPEPP, di tingkat UPPS dan/atau PT.",
      narasi: `
        <p class="mb-2">Kebijakan terkait adalah sebagai berikut:</p>
        <ul class="list-decimal ml-4 space-y-1 mb-2">
          <li>Kebijakan sistem penjaminan mutu internal (SPMI)...</li>
          <li>Peraturan Rektor No. 3 Tahun 2023...</li>
        </ul>
        <table class="w-full border border-gray-200 text-[10px]">
          <tr class="bg-gray-50">
            <th class="border px-2 py-1 text-left">Pernyataan Standar</th>
            <th class="border px-2 py-1 text-left">Indikator</th>
          </tr>
          <tr>
            <td class="border px-2 py-1">Universitas harus menyediakan fasilitas...</td>
            <td class="border px-2 py-1">Tersedianya sarana dan prasarana...</td>
          </tr>
        </table>
      `,
    },
    {
      butir: "1.5 [PENINGKATAS]",
      element:
        "1.1.A. Kebijakan, standar, dan indikator terkait Sistem Tata Kelola UPPS dan/atau PT berikut SOP, yang mencakup administrasi akademik, keuangan, SDM, dan aspek lain dalam siklus PPEPP, di tingkat UPPS dan/atau PT.",
      dokumen:
        "1.1.A.1 Kebijakan, standar, dan indikator terkait Sistem Tata Kelola UPPS dan/atau PT berikut SOP, yang mencakup administrasi akademik dalam siklus PPEPP, di tingkat UPPS dan/atau PT.",
      narasi: `
        <p class="mb-2">Kebijakan terkait adalah sebagai berikut:</p>
        <ul class="list-decimal ml-4 space-y-1 mb-2">
          <li>Kebijakan sistem penjaminan mutu internal (SPMI)...</li>
          <li>Peraturan Rektor No. 3 Tahun 2023...</li>
        </ul>
        <table class="w-full border border-gray-200 text-[10px]">
          <tr class="bg-gray-50">
            <th class="border px-2 py-1 text-left">Pernyataan Standar</th>
            <th class="border px-2 py-1 text-left">Indikator</th>
          </tr>
          <tr>
            <td class="border px-2 py-1">Universitas harus menyediakan fasilitas...</td>
            <td class="border px-2 py-1">Tersedianya sarana dan prasarana...</td>
          </tr>
        </table>
      `,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-[98%] mx-auto py-8 px-4">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <table className="min-w-full table-fixed divide-y divide-gray-200">
            <thead className="bg-sky-500">
              <tr>
                <th className="w-[8%] px-4 py-4 text-left text-xs font-bold text-white uppercase">
                  BUTIR
                </th>
                <th className="w-[10%] px-4 py-4 text-left text-xs font-bold text-white uppercase">
                  ELEMEN
                </th>
                <th className="w-[10%] px-4 py-4 text-left text-xs font-bold text-white uppercase">
                  INDIKATOR
                </th>
                <th className="w-[67%] px-4 py-4 text-center text-xs font-bold text-white uppercase">
                  NARASI
                </th>
                <th className="w-[5%] px-4 py-4 text-center text-xs font-bold text-white uppercase">
                  DETAIL
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {dataBudayaMutu.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50/50">
                  <td className="px-4 py-4 align-top text-xs font-bold text-[#A50000]">
                    {item.butir}
                  </td>
                  <td className="px-4 py-4 align-top text-[10px] text-gray-700">
                    {item.element}
                  </td>
                  <td className="px-4 py-4 align-top text-[10px] text-gray-700">
                    {item.dokumen}
                  </td>

                  {/* KOLOM NARASI DENGAN READ MORE */}
                  <td className="px-8 py-4 align-top text-left">
                    <div className="relative">
                      <div
                        dangerouslySetInnerHTML={{ __html: item.narasi }}
                        className={`text-[10px] text-gray-600 leading-relaxed overflow-hidden transition-all duration-500 ${
                          expandedIndex === index
                            ? "max-h-[2000px]"
                            : "max-h-[80px]"
                        }`}
                      />
                      {expandedIndex !== index && (
                        <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white to-transparent" />
                      )}
                    </div>
                    <button
                      onClick={() =>
                        setExpandedIndex(expandedIndex === index ? null : index)
                      }
                      className="mt-2 text-[#00B4D8] hover:underline font-bold text-[10px] flex items-center gap-1"
                    >
                      {expandedIndex === index
                        ? "Baca Sedikit ▲"
                        : "Baca Selengkapnya ▼"}
                    </button>
                  </td>

                  <td className="px-4 py-4 align-top text-center">
                    <button className="p-2 bg-gray-100 hover:bg-sky-500 hover:text-white rounded-lg transition-all">
                      <FileSearch className="w-4 h-4" />
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

export default BudayaMutu;
