import React from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Import Pages (Pastikan nama file di folder 'pages' sama persis huruf besar/kecilnya)
import Dashboard from "./pages/Dashboard";

//  Kondisis Eksternal
import A1 from "./pages/kondisi_eksternal/a1";
import A2 from "./pages/kondisi_eksternal/a2";

//  Profil
import B1 from "./pages/profil/b1";
import B2 from "./pages/profil/B2";
import B3 from "./pages/profil/b3";
import B4 from "./pages/profil/b4";
import B5 from "./pages/profil/b5";
import B6 from "./pages/profil/b6";
import B7 from "./pages/profil/b7";
import B8 from "./pages/profil/b8";

//  Standar
import BudayaMutu from "./pages/standar/BudayaMutu";
import Akuntabilitas from "./pages/standar/Akuntabilitas";
import DiferensiasiMisi from "./pages/standar/DiferensiasiMisi";
import RelevansiPendidikan from "./pages/standar/RelevansiPendidikan";
import RelevansiPenelitian from "./pages/standar/RelevansiPenelitian";
import RelevansiPengabdianMasyarakat from "./pages/standar/RelevansiPengabdianMasyarakat";

//  Suplemen
import D1 from "./pages/suplemen/d1";
import D2 from "./pages/suplemen/d2";
import D3 from "./pages/suplemen/d3";
import D4 from "./pages/suplemen/d4";

function App() {
  return (
    <Router>
      <Routes>
        {/* Saat pertama buka web, arahkan ke dasboard */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        <Route path="/dashboard" element={<Dashboard />} />

        {/* Kondisi Eksternal */}
        <Route path="/a1" element={<A1 />} />
        <Route path="/a2" element={<A2 />} />

        {/* Profil */}
        <Route path="/b1" element={<B1 />} />
        <Route path="/b2" element={<B2 />} />
        <Route path="/b3" element={<B3 />} />
        <Route path="/b4" element={<B4 />} />
        <Route path="/b5" element={<B5 />} />
        <Route path="/b6" element={<B6 />} />
        <Route path="/b7" element={<B7 />} />
        <Route path="/b8" element={<B8 />} />

        {/* Standar */}
        <Route path="/budaya-mutu" element={<BudayaMutu />} />
        <Route path="/akuntabilitas" element={<Akuntabilitas />} />
        <Route path="/diferensiasi-misi" element={<DiferensiasiMisi />} />
        <Route path="/relevansi-pendidikan" element={<RelevansiPendidikan />} />
        <Route path="/relevansi-penelitian" element={<RelevansiPenelitian />} />
        <Route
          path="/relevansi-pengabdian-masyarakat"
          element={<RelevansiPengabdianMasyarakat />}
        />

        {/* Suplemen */}
        <Route path="/d1" element={<D1 />} />
        <Route path="/d2" element={<D2 />} />
        <Route path="/d3" element={<D3 />} />
        <Route path="/d4" element={<D4 />} />

        {/* Halaman 404 sederhana jika link salah */}
        <Route
          path="*"
          element={
            <div className="flex justify-center items-center h-screen font-bold">
              404 - Halaman Tidak Ada
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
