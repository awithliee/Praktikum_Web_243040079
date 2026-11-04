// src/TypeWriter.jsx
// Menampilkan teks huruf demi huruf (efek mesin tik)
import { useState, useEffect } from "react";

function TypeWriter({ teks, kecepatan = 70 }) {
  const [jumlah, setJumlah] = useState(0); // berapa huruf yang sudah tampil

  useEffect(() => {
    if (jumlah >= teks.length) return; // sudah selesai
    const timer = setTimeout(() => setJumlah(jumlah + 1), kecepatan);
    return () => clearTimeout(timer);
  }, [jumlah, teks, kecepatan]);

  return (
    <span>
      {teks.slice(0, jumlah)}
      <span className="kursor-ketik">|</span>
    </span>
  );
}

export default TypeWriter;