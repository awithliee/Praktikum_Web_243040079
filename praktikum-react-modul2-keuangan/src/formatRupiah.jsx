// src/formatRupiah.js
// Mengubah angka menjadi teks rupiah, contoh: 15000 -> "Rp 15.000"
export function formatRupiah(angka) {
  const tanda = angka < 0 ? '-' : '';
  return `${tanda}Rp ${Math.abs(angka).toLocaleString('id-ID')}`;
}