import React from "react";
import KartuProfil from "./KartuProfil";
import Showcase from "./Showcase";
import TypeWriter from "./TypeWriter";

// Gaya judul tiap bagian (dipakai berulang)
const gayaJudulBagian = {
  fontFamily: "'Orbitron', sans-serif",
  fontSize: "18px",
  letterSpacing: "2px",
  textTransform: "uppercase",
  color: "#00E5FF",
  paddingBottom: "8px",
  margin: "0 0 16px 0",
};

function App() {
  // 1. Data daftar mata kuliah praktikum semester ini
  const daftarPraktikum = [
    {
      id: 101,
      kode: "IF211",
      nama: "Pemrograman Web (React & Laravel)",
      sks: 3,
      hari: "Senin",
    },
    {
      id: 102,
      kode: "IF212",
      nama: "Sistem Basis Data (PostgreSQL)",
      sks: 3,
      hari: "Rabu",
    },
    {
      id: 103,
      kode: "IF213",
      nama: "Rekayasa Perangkat Lunak Terapan",
      sks: 3,
      hari: "Kamis",
    },
    {
      id: 104,
      kode: "IF214",
      nama: "Arsitektur Sistem Terdistribusi",
      sks: 2,
      hari: "Jumat",
    },
  ];

  // 2. Fungsi penanganan interaksi event tombol
  const notifikasiSapaan = () => {
    alert(
      "Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS.",
    );
  };

  return (
    <div
      style={{ maxWidth: "860px", margin: "0 auto", padding: "40px 24px 60px" }}
    >
      {/* Header */}
      <header style={{ marginBottom: "40px" }}>
        <h1
          style={{
            margin: "0 0 8px 0",
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "32px",
            fontWeight: "800",
            background: "linear-gradient(90deg, #00E5FF, #FF2BD6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Praktikum Pemrograman Web
        </h1>
        <p style={{ margin: 0, color: "#8FA3C7" }}>
          Laboratorium Informatika - Modul 1: Pengenalan React JS & Vite"
        </p>
      </header>

      {/* 3. Komponen Profil Mahasiswa */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={{ margin: 0, color: "#8FA3C7" }}>
          <p>
            <TypeWriter teks="Profil Mahasiswa Praktikan" />
          </p>
        </h2>
        <KartuProfil
          nama="M Ali Fauzi JR"
          npm="233040079"
          kelas="IF - Praktikum Web"
          status="Aktif"
          fotoUrl="/foto.jpeg"
        />
      </section>

      {/* 4. Daftar Rencana Praktikum Semester */}
      <section style={{ marginBottom: "40px" }}>
        <h2 style={gayaJudulBagian}>Daftar Rencana Praktikum Semester</h2>

        {daftarPraktikum.map((matkul) => (
          <div
            key={matkul.id}
            style={{
              backgroundColor: "rgba(15, 22, 38, 0.85)",
              border: "1px solid rgba(0, 229, 255, 0.25)",
              borderLeft: "4px solid #00E5FF",
              borderRadius: "8px",
              padding: "12px 18px",
              marginBottom: "12px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <div>
              <div style={{ fontWeight: "600", color: "#FFFFFF" }}>
                <span style={{ color: "#00E5FF" }}>{matkul.kode}</span> -{" "}
                {matkul.nama}
              </div>
              <div style={{ fontSize: "15px", color: "#8FA3C7" }}>
                Jadwal Sesi: {matkul.hari}
              </div>
            </div>

            <span
              style={{
                border: "1px solid #FF2BD6",
                color: "#FF2BD6",
                borderRadius: "999px",
                padding: "2px 12px",
                fontSize: "14px",
                whiteSpace: "nowrap",
              }}
            >
              {matkul.sks} SKS
            </span>
          </div>
        ))}
      </section>

      {/* 5. Uji Interaktivitas Event */}
      <section>
        <h2 style={gayaJudulBagian}>Uji Interaktivitas Event</h2>
        <button className="btn-neon" onClick={notifikasiSapaan}>
          KLIK DISINI
        </button>
      </section>

      {/* 6. Showcase Portofolio Mini (Tentang Saya + GitHub) */}
      <Showcase />
    </div>
  );
}

export default App;
