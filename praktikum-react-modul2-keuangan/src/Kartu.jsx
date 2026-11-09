// src/Kartu.jsx
// Komponen pembungkus: judul lewat props, isi lewat children
function Kartu({ judul, children }) {
  return (
    <section className="kartu">
      <h2>{judul}</h2>
      {children}
    </section>
  );
}

export default Kartu;