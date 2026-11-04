// src/ProyekCard.jsx
// Komponen satu kartu proyek, data diterima lewat props
function ProyekCard({ judul, deskripsi, teknologi, repoUrl, warna }) {
  return (
    <div
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid #E3E7F2",
        borderTop: `6px solid ${warna}`,
        borderRadius: "12px",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        textAlign: "left",
      }}
    >
      {/* Judul proyek */}
      <h3 style={{ margin: "0 0 8px 0", color: "#1E2440" }}>{judul}</h3>

      {/* Ringkasan deskripsi */}
      <p style={{ margin: "0 0 12px 0", fontSize: "14px", color: "#5B6380" }}>
        {deskripsi}
      </p>

      {/* Tagar teknologi */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "6px",
          marginBottom: "16px",
        }}
      >
        {teknologi.map((tag) => (
          <span
            key={tag}
            style={{
              backgroundColor: `${warna}22`,
              color: warna,
              padding: "3px 10px",
              borderRadius: "999px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Tombol tautan repositori GitHub */}
      <a
        href={repoUrl}
        target="_blank"
        rel="noreferrer"
        style={{
          marginTop: "auto",
          backgroundColor: warna,
          color: "#FFFFFF",
          textAlign: "center",
          textDecoration: "none",
          padding: "10px",
          borderRadius: "6px",
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
      </a>
    </div>
  );
}

export default ProyekCard;
