
import React from 'react';
import KartuProfil from './KartuProfil';

function App() {
  // 1. Data daftar mata kuliah praktikum semester ini
  const daftarPraktikum = [
    {
      id: 101,
      kode: 'IF211',
      nama: 'Pemrograman Web (React & Laravel)',
      sks: 3,
      hari: 'Senin'
    },
    {
      id: 102,
      kode: 'IF212',
      nama: 'Sistem Basis Data (PostgreSQL)',
      sks: 3,
      hari: 'Rabu'
    },
    {
      id: 103,
      kode: 'IF213',
      nama: 'Rekayasa Perangkat Lunak Terapan',
      sks: 3,
      hari: 'Kamis'
    },
    {
      id: 104,
      kode: 'IF214',
      nama: 'Arsitektur Sistem Terdistribusi',
      sks: 2,
      hari: 'Jumat'
    }
  ];

  // 2. Fungsi penanganan interaksi event tombol
  const notifikasiSapaan = () => {
    alert(
      'Selamat datang di Modul 1! Anda berhasil menguasai fondasi arsitektur React JS.'
    );
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Praktikum Pemrograman Web</h1>

      <p>
        Laboratorium Informatika - Modul 1: Pengenalan React JS & Vite
      </p>

      <hr />

      {/* 3. Komponen Profil Mahasiswa */}
      <h2>Profil Mahasiswa Praktikan</h2>

      <KartuProfil />

      <hr />

      {/* 4. Daftar Rencana Praktikum Semester */}
      <h2>Daftar Rencana Praktikum Semester (List Rendering)</h2>

      {daftarPraktikum.map((matkul) => (
        <div
          key={matkul.id}
          style={{
            border: '1px solid #ccc',
            borderRadius: '8px',
            padding: '12px',
            marginBottom: '10px'
          }}
        >
          <h3>
            {matkul.kode} - {matkul.nama}
          </h3>

          <p>Jadwal Sesi: {matkul.hari}</p>

          <p>{matkul.sks} SKS</p>
        </div>
      ))}

      <hr />

      {/* 5. Uji Interaktivitas Event */}
      <h2>Uji Interaktivitas Event</h2>

      <button onClick={notifikasiSapaan}>
        Klik Disini
      </button>
    </div>
  );
}

export default App;
