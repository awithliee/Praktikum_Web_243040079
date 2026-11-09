// src/FormTransaksi.jsx
// Formulir terkendali: setiap input terhubung ke state lewat value dan onChange
import { useState } from 'react';

function FormTransaksi({ onTambah }) {
  const [keterangan, setKeterangan] = useState('');
  const [nominal, setNominal] = useState(''); // nilai input selalu berupa teks
  const [jenis, setJenis] = useState('pemasukan');

  // Validasi
  const keteranganTerlaluPanjang = keterangan.length > 40;
  const nominalTidakValid = nominal !== '' && Number(nominal) <= 0;
  const tidakValid =
    keterangan.trim() === '' ||
    keteranganTerlaluPanjang ||
    nominal === '' ||
    Number(nominal) <= 0;

  const tanganiKirim = (event) => {
    event.preventDefault(); // cegah reload halaman
    if (tidakValid) return;

    // Number(nominal) agar "5000" + "2000" tidak menjadi "50002000"
    onTambah({
      keterangan: keterangan.trim(),
      nominal: Number(nominal),
      jenis: jenis,
    });

    // kosongkan kembali formulir
    setKeterangan('');
    setNominal('');
    setJenis('pemasukan');
  };

  return (
    <form onSubmit={tanganiKirim}>
      <div className="form-grup">
        <label htmlFor="keterangan">Keterangan</label>
        <input
          id="keterangan"
          className="input"
          type="text"
          placeholder="Contoh: Uang saku, makan siang"
          value={keterangan}
          onChange={(event) => setKeterangan(event.target.value)}
        />
        {keteranganTerlaluPanjang && (
          <p className="galat">Keterangan maksimal 40 karakter.</p>
        )}
      </div>

      <div className="baris form-grup">
        <div>
          <label htmlFor="nominal">Nominal (Rp)</label>
          <input
            id="nominal"
            className="input"
            type="number"
            placeholder="0"
            value={nominal}
            onChange={(event) => setNominal(event.target.value)}
          />
        </div>

        <div>
          <label htmlFor="jenis">Jenis</label>
          <select
            id="jenis"
            className="input"
            value={jenis}
            onChange={(event) => setJenis(event.target.value)}
          >
            <option value="pemasukan">Pemasukan</option>
            <option value="pengeluaran">Pengeluaran</option>
          </select>
        </div>
      </div>

      {nominalTidakValid && <p className="galat">Nominal harus lebih dari 0.</p>}

      <button className="tombol" type="submit" disabled={tidakValid}>
        Tambah Transaksi
      </button>
    </form>
  );
}

export default FormTransaksi;