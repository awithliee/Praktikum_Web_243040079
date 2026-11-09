// src/App.jsx
import { useState, useEffect } from "react";
import "./App.css";
import Kartu from "./Kartu";
import RingkasanSaldo from "./RingkasanSaldo";
import FormTransaksi from "./FormTransaksi";
import ItemTransaksi from "./ItemTransaksi";

const KUNCI_STORAGE = "catatan-keuangan";

function App() {
  // State utama: baca dari localStorage saat pertama kali tampil
  const [daftarTransaksi, setDaftarTransaksi] = useState(() => {
    try {
      const dataTersimpan = localStorage.getItem(KUNCI_STORAGE);
      return dataTersimpan ? JSON.parse(dataTersimpan) : [];
    } catch {
      return []; // jika isi localStorage rusak, mulai dari kosong
    }
  });

  // useEffect: simpan ke localStorage setiap daftarTransaksi berubah
  useEffect(() => {
    localStorage.setItem(KUNCI_STORAGE, JSON.stringify(daftarTransaksi));
  }, [daftarTransaksi]);

  // Menambah transaksi: array BARU berisi transaksi baru + transaksi lama
  const tambahTransaksi = (dataBaru) => {
    const transaksiBaru = { id: Date.now(), ...dataBaru };
    setDaftarTransaksi([transaksiBaru, ...daftarTransaksi]);
  };

  // Menghapus transaksi: ambil semua KECUALI yang id-nya sama
  const hapusTransaksi = (id) => {
    setDaftarTransaksi(
      daftarTransaksi.filter((transaksi) => transaksi.id !== id),
    );
  };

  // Nilai turunan: dihitung dari state, tidak disimpan sebagai state baru
  const totalMasuk = daftarTransaksi
    .filter((transaksi) => transaksi.jenis === "pemasukan")
    .reduce((jumlah, transaksi) => jumlah + transaksi.nominal, 0);

  const totalKeluar = daftarTransaksi
    .filter((transaksi) => transaksi.jenis === "pengeluaran")
    .reduce((jumlah, transaksi) => jumlah + transaksi.nominal, 0);

  const saldo = totalMasuk - totalKeluar;

  return (
    <div className="wadah">
      <h1 className="judul">Catatan Keuangan Mini</h1>
      <p className="subjudul">
        Laboratorium Informatika - Modul 2: React Lanjutan
      </p>

      <Kartu judul="Ringkasan">
        <RingkasanSaldo
          saldo={saldo}
          totalMasuk={totalMasuk}
          totalKeluar={totalKeluar}
        />
      </Kartu>

      <Kartu judul="Tambah Transaksi">
        <FormTransaksi onTambah={tambahTransaksi} />
      </Kartu>

      <Kartu judul="Daftar Transaksi">
        {/* Conditional rendering: pesan khusus jika belum ada transaksi */}
        {daftarTransaksi.length === 0 ? (
          <p className="kosong">
            Belum ada transaksi. Tambahkan transaksi pertamamu!
          </p>
        ) : (
          <ul className="daftar">
            {daftarTransaksi.map((transaksi) => (
              <ItemTransaksi
                key={transaksi.id}
                transaksi={transaksi}
                onHapus={hapusTransaksi}
              />
            ))}
          </ul>
        )}
      </Kartu>
    </div>
  );
}

export default App;
