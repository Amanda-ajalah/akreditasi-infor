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
          <li>Kebijakan sistem penjaminan mutu internal (SPMI) yang diturunkan ke dalam Standar Pengelolaan Pembelajaran, Standar Proses Pembelajaran, Standar Penilaian Pembelajaran, serta Standar Sarana dan Prasarana Pembelajaran.</li>
          <li>Peraturan Rektor No. 3 Tahun 2023 tentang Pedoman Akademik Universitas.</li>
          <li>Keputusan Rektor Nomor 334/SK/R/X/2022 tentang Panduan penyusunan Rencana Pembelajaran Semester dengan SOP Nomor UNTAG-SBY.03.17.11.01 yang mengatur prosedur penyusunan RPS.</li>
          <li>Keputusan Rektor Untag Nomor 499/SK/R/XI/2024 tentang Pemberlakukan Metode Pembelajaran Hybrid Program Studi Profesi, S2 dan S3 dalam proses pembelajaran di lingkungan Untag Surabaya Semester Gasal Tahun Akademik 2024/2025 yang mengatur fleksibilitas dalam proses pembelajaran secara hibrida.</li>
        </ul>
      `,
      files: [
        {
          name: "Dokumen 1",
          url: "https://chatgpt.com/c/69df09a4-a6c4-839c-bf55-5933f426093d",
        },
        {
          name: "Dokumen 2",
          url: "#",
        },
        {
          name: "Dokumen 3",
          url: "#",
        },
        {
          name: "Dokumen 4",
          url: "#",
        },
      ],
    },
    {
      butir: "",
      element: "",
      dokumen: "",
      narasi: `
        <p class="mb-2">Tabel C.1.1 Standar dan indikator terkait tata kelola administrasi akademik</p>
        <table class="w-full border border-gray-200 text-[10px]">
          <tr class="bg-[#f0f9ff]">
            <th class="border px-2 py-1 text-left">Standar</th>
            <th class="border px-2 py-1 text-left">Cakupan Standar</th>
            <th class="border px-2 py-1 text-left">Indikator Kinerja Utama</th>
            <th class="border px-2 py-1 text-left">Target Kinerja</th>
          </tr>
          <tr>
            <td class="border px-2 py-1">Standar Pengelolaan  Pembelajaran</td>
            <td class="border px-2 py-1">Proses pembelajaran (luring, daring, atau hibrida, CBL, PBL, micro credential, rekognisi pembelajaran lampau (RPL) yang relevan dengan bidang keilmuan PS.</td>
            <td class="border px-2 py-1">A.1.1 Persentase mata kuliah yang menerapkan mode pembelajaran hibrida di LMS.</td>
            <td class="border px-2 py-1">≥ 50%</td>
          </tr>
          <tr>
            <td class="border px-2 py-1">Standar Penilaian Pembelajaran</td>
            <td class="border px-2 py-1">Penilaian Pembelajaran.</td>
            <td class="border px-2 py-1">A.1.2 Persentase mata kuliah yang dilengkapi dengan Dokumen Rencana Pembelajaran Semester (RPS), Instrumen Penilaian (Assessment Tools), hasil penilaian mahasiswa (lembar ujian, laporan tugas, rubrik penilaian yang telah diisi).</td>
            <td class="border px-2 py-1">≥ 80%</td>
          </tr>
          <tr>
            <td class="border px-2 py-1">Standar Proses  Pembelajaran</td>
            <td class="border px-2 py-1">Pelayanan akademik.</td>
            <td class="border px-2 py-1">A.1.3 Persentase kepuasan mahasiswa terhadap layanan akademik.</td>
            <td class="border px-2 py-1">≥ 70%</td>           
          </tr>
          <tr>
            <td class="border px-2 py-1"></td>
            <td class="border px-2 py-1">Sarana Proses Pembelajara.</td>
            <td class="border px-2 py-1">A.1.4 Tersedianya dan dimanfaatkannya sistem informasi dan website sebagai pendukung pelaksanaan pembelajaran, yang mencakup sistem informasi akademik, praktikum, kerja praktik, LMS, serta website program studi dan UPPS.</td>
            <td class="border px-2 py-1">Tersedia dan berlaku.</td>           
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
          <li>SK Yayasan Perguruan 17 Agustus 1945 Surabaya No. 035A/SK/YP-C/VI/2010 tentang Pedoman Pengelolaan Keuangan.</li>
          <li>Peraturan Pengelolaan Keuangan YPTA Surabaya No. 31 l/Y-A/Ku/XI/2021 tentang penyusunan dan pelaksanaan Rencana Bisnis dan Anggaran (RBA).</li>
          <li>Renstra Untag Surabaya 2021-2025, yang memuat tentang keuangan.</li>
          <li>Renstra UPPS 2021-2025 dan Rencana Operasional (Renop) UPPS 2023, yang memuat keuangan serta sarana dan prasarana.</li>
        </ul>
      `,
      files: [
        {
          name: "Dokumen 1",
          url: "https://chatgpt.com/c/69df09a4-a6c4-839c-bf55-5933f426093d",
        },
        {
          name: "Dokumen 2",
          url: "#",
        },
        {
          name: "Dokumen 3",
          url: "#",
        },
        {
          name: "Dokumen 4",
          url: "#",
        },
      ],
    },
    {
      butir: "",
      element: "",
      dokumen: "",
      narasi: `
        <p class="mb-2">Tabel C.1.2 Standar dan indikator terkait tata kelola administrasi keuangan</p>
        <table class="w-full border border-gray-200 text-[10px]">
          <tr class="bg-[#f0f9ff]">
            <th class="border px-2 py-1 text-left">Standar</th>
            <th class="border px-2 py-1 text-left">Cakupan Standar</th>
            <th class="border px-2 py-1 text-left">Indikator Kinerja Utama</th>
            <th class="border px-2 py-1 text-left">Target Kinerja</th>
          </tr>
          <tr>
            <td class="border px-2 py-1">Standar Pengelolaan  Pembelajaran</td>
            <td class="border px-2 py-1">Perencanaan, pelaksanaan dan pengendalian keuangan berbasis RBA yang mendukung pelaksanaan tri dharma.</td>
            <td class="border px-2 py-1">A.2.1 Persentase program/ kegiatan di program studi yang didukung oleh alokasi anggaran dalam RBA.</td>
            <td class="border px-2 py-1">≥ 90%</td>
          </tr>
          <tr>
            <td class="border px-2 py-1"></td>
            <td class="border px-2 py-1">Kesesuaian perencanaan anggaran dengan Renstra dan Renop.</td>
            <td class="border px-2 py-1">A.2.2 Persentase kesesuaian program dan kegiatan dalam RBA dengan Renstra dan Renop UPPS.</td>
            <td class="border px-2 py-1">≥ 90%</td>
          </tr>
          <tr>
            <td class="border px-2 py-1"></td>
            <td class="border px-2 py-1">Pelaporan dan Pertanggungjawaban Keuangan.</td>
            <td class="border px-2 py-1">A.2.3 Ketepatan waktu penyampaian laporan pertanggungjawaban keuangan UPPS/Program Studi.</td>
            <td class="border px-2 py-1">≥ 90%</td>           
          </tr>
        </table>
      `,
    },
    {
      butir: "",
      element: "",
      dokumen:
        "1.1.A.3 Kebijakan, standar, dan indikator terkait Sistem Tata Kelola UPPS dan/atau PT berikut SOP, yang mencakup administrasi SDM dalam siklus PPEPP, di tingkat UPPS dan/atau PT.",
      narasi: `
        <p class="mb-2">Kebijakan terkait adalah sebagai berikut:</p>
        <ul class="list-decimal ml-4 space-y-1 mb-2">
          <li>SK Yayasan No: 552/Y-A/Og/XII/2024 tentang Statuta Universitas, khususnya pada BAB X tentang Dosen dan Tenaga Kependidikan sebagai kebijakan induk pengelolaan SDM universitas.</li>
          <li>SK Yayasan No.162/SK/YP-C/X.II/2012 tentang Peraturan Karyawan Perguruan 17 Agustus 1945 Surabaya sebagai dasar pengelolaan hak, kewajiban, dan pembinaan tenaga kependidikan.</li>
          <li>Rencana Strategis (Renstra) UPPS 2021-2025 dan Rencana Operasional (Renop) UPPS 2023 yang memuat  yang memuat perencanaan, pengembangan, dan pengelolaan Sumber Daya Manusia di tingkat UPPS .</li>
        </ul>
      `,
      files: [
        {
          name: "Dokumen 1",
          url: "https://chatgpt.com/c/69df09a4-a6c4-839c-bf55-5933f426093d",
        },
        {
          name: "Dokumen 2",
          url: "#",
        },
        {
          name: "Dokumen 3",
          url: "#",
        },
      ],
    },
    {
      butir: "",
      element: "",
      dokumen: "",
      narasi: `
        <p class="mb-2">Tabel 1.1.A.3 Standar dan indikator terkait tata kelola administrasi SDM</p>
        <table class="w-full border border-gray-200 text-[10px]">
          <tr class="bg-[#f0f9ff]">
            <th class="border px-2 py-1 text-left">Standar</th>
            <th class="border px-2 py-1 text-left">Cakupan Standar</th>
            <th class="border px-2 py-1 text-left">Indikator Kinerja Utama</th>
            <th class="border px-2 py-1 text-left">Target Kinerja</th>
          </tr>
          <tr>
            <td class="border px-2 py-1">Standar Dosen</td>
            <td class="border px-2 py-1">Perencanaan dan pengelolaan dosen.</td>
            <td class="border px-2 py-1">A.3.1 Ekuivalensi Waktu Mengajar Penuh DTPS.</td>
            <td class="border px-2 py-1">12 ≤ EWMP ≤ 16</td>
          </tr>
          <tr>
            <td class="border px-2 py-1"></td>
            <td class="border px-2 py-1">Evaluasi dan pengembangan kinerja dosen.</td>
            <td class="border px-2 py-1">A.3.2 Jumlah Kegiatan pengembangan/sertifikasi Dosen per tahun.</td>
            <td class="border px-2 py-1">1 Kegiatan per tahun</td>
          </tr>
          <tr>
            <td class="border px-2 py-1"></td>
            <td class="border px-2 py-1"></td>
            <td class="border px-2 py-1">A.3.3  Persentase capaian Indeks Kinerja Dosen.</td>
            <td class="border px-2 py-1">≥ 3,5</td>
          </tr>
          <tr>
            <td class="border px-2 py-1">Standar Tenaga Kependidikan</td>
            <td class="border px-2 py-1">Perencanaan dan pengelolaan tenaga kependidikan.</td>
            <td class="border px-2 py-1">A.3.4 Rata-rata tingkat kehadiran tenaga kependidikan.</td>
            <td class="border px-2 py-1">80%</td>           
          </tr>
          <tr>
            <td class="border px-2 py-1"></td>
            <td class="border px-2 py-1">Evaluasi dan pengembangan kinerja tenaga kependidikan.</td>
            <td class="border px-2 py-1">A.3.5 Jumlah kegiatan pengembangan/sertifikasi laboran per tahun.</td>
            <td class="border px-2 py-1">1 Kegiatan per tahun</td>           
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
      pathDetail: "#",
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
      pathDetail: "#",
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
      pathDetail: "#",
    },
    {
      butir: "1.5 [PENINGKATAN]",
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
      pathDetail: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Header Halaman */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-bold text-gray-800">C1: BUDAYA MUTU</h1>
          <p className="text-[#00B4D8] text-sm font-medium uppercase tracking-widest">
            Teknik Informatika UNTAG Surabaya
          </p>
        </div>
      </header>

      {/* Konten */}
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
                  DOKUMEN
                </th>
                <th className="w-[15%] px-4 py-4 text-center text-xs font-bold text-white uppercase">
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
                    <div className="flex flex-col gap-2 max-h-32 overflow-y-auto">
                      {item.files &&
                        item.files.map((file, i) => (
                          <a
                            key={i}
                            href={file.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-1 px-2 py-1 bg-gray-100 hover:bg-sky-500 hover:text-white rounded-md transition-all text-[11px] whitespace-nowrap"
                          >
                            <FileSearch className="w-3 h-3" />
                            {file.name}
                          </a>
                        ))}
                    </div>
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
