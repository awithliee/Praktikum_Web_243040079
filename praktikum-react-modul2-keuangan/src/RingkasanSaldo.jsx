// src/RingkasanSaldo.jsx
// Menampilkan saldo, total pemasukan, dan total pengeluaran (semua dari props)
import { formatRupiah } from './formatRupiah';

function RingkasanSaldo({ saldo, totalMasuk, totalKeluar }) {
  return (
    <div>
      <p className="saldo-label">Saldo saat ini</p>
      {/* className dinamis: hijau jika saldo >= 0, merah jika minus */}
      <p className={saldo >= 0 ? 'saldo-nilai pemasukan' : 'saldo-nilai pengeluaran'}>
        {formatRupiah(saldo)}
      </p>

      <div className="ringkasan-baris">
        <div className="ringkasan-kotak kotak-masuk">
          <small>Total Pemasukan</small>
          <strong className="pemasukan">{formatRupiah(totalMasuk)}</strong>
        </div>
        <div className="ringkasan-kotak kotak-keluar">
          <small>Total Pengeluaran</small>
          <strong className="pengeluaran">{formatRupiah(totalKeluar)}</strong>
        </div>
      </div>
    </div>
  );
}

export default RingkasanSaldo;