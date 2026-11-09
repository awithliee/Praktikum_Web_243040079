// src/ItemTransaksi.jsx
// Satu baris transaksi + tombol hapus
import { formatRupiah } from "./formatRupiah";

function ItemTransaksi({ transaksi, onHapus }) {
  const adalahPemasukan = transaksi.jenis === "pemasukan";

  return (
    <li className="item">
      <div className="item-info">
        <strong>{transaksi.keterangan}</strong>
        <small>{adalahPemasukan ? "Pemasukan" : "Pengeluaran"}</small>
      </div>

      {/* Hijau untuk pemasukan, merah untuk pengeluaran */}
      <span className={`item-nominal ${transaksi.jenis}`}>
        {adalahPemasukan ? "+" : "-"} {formatRupiah(transaksi.nominal)}
      </span>

      <button
        className="tombol tombol-merah tombol-kecil"
        onClick={() => onHapus(transaksi.id)}
      >
        Hapus
      </button>
    </li>
  );
}

export default ItemTransaksi;
