function KartuProfil({ nama, npm, kelas, status, fotoUrl }) {
  return (
    <div
      style={{
        backgroundColor: "rgba(15, 22, 38, 0.85)",
        border: "1px solid rgba(0, 229, 255, 0.35)",
        borderLeft: "4px solid #00E5FF",
        borderRadius: "10px",
        padding: "20px",
        maxWidth: "420px",
        margin: "0 auto",
        boxShadow: "0 0 20px rgba(0, 229, 255, 0.15)",
      }}
    >
      {/* Foto profil: hanya tampil jika fotoUrl diisi */}
      {fotoUrl && (
        <img
          src={fotoUrl}
          alt={`Foto ${nama}`}
          style={{
            display: "block",
            margin: "0 auto 12px",
            width: "110px",
            height: "110px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid #00E5FF",
            boxShadow: "0 0 18px rgba(0, 229, 255, 0.6)",
          }}
        />
      )}

      <h3
        style={{
          margin: "0 0 10px 0",
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "20px",
          color: "#00E5FF",
        }}
      >
        {nama}
      </h3>
      <p style={{ margin: "4px 0" }}>NPM: {npm}</p>
      <p style={{ margin: "4px 0" }}>Kelas: {kelas}</p>
      <p style={{ margin: "4px 0" }}>Program Studi: Teknik Informatika</p>

      <span
        style={{
          display: "inline-block",
          marginTop: "12px",
          padding: "3px 12px",
          border: "1px solid #00FF9C",
          borderRadius: "999px",
          color: "#00FF9C",
          fontSize: "14px",
          fontWeight: "600",
        }}
      >
        Status Akademik: {status}
      </span>
    </div>
  );
}

export default KartuProfil;