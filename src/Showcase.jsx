const namaSaya = "M Ali Fauzi JR";
const githubProfil = "https://github.com/awithliee";

function Showcase() {
  return (
    <section style={{ marginTop: "40px" }}>
      <h2
        style={{
          fontFamily: "'Orbitron', sans-serif",
          fontSize: "18px",
          letterSpacing: "2px",
          textTransform: "uppercase",
          color: "#00E5FF",
          borderBottom: "1px solid rgba(0, 229, 255, 0.3)",
          paddingBottom: "8px",
          margin: "0 0 16px 0",
        }}
      >
        Showcase Portofolio Mini
      </h2>

      {/* Tentang Saya */}
      <div
        style={{
          backgroundColor: "rgba(15, 22, 38, 0.85)",
          border: "1px solid rgba(255, 43, 214, 0.4)",
          borderLeft: "4px solid #FF2BD6",
          borderRadius: "10px",
          padding: "22px",
          boxShadow: "0 0 20px rgba(255, 43, 214, 0.12)",
        }}
      >
        <h3
          style={{
            margin: "0 0 10px 0",
            fontFamily: "'Orbitron', sans-serif",
            fontSize: "18px",
            color: "#FF2BD6",
          }}
        >
          Tentang Saya
        </h3>
        <p style={{ margin: "0 0 18px 0", lineHeight: "1.6" }}>
          Halo, saya {namaSaya}, mahasiswa Teknik Informatika yang sedang
          belajar pengembangan web. Saya suka membuat tampilan website yang
          rapi dan mudah dipakai. Untuk melihat karya saya, silakan kunjungi
          GitHub saya.
        </p>
        <a
          className="btn-neon"
          href={githubProfil}
          target="_blank"
          rel="noreferrer"
        >
          
          LIHAT KARYA SAYA DI GITHUB
        </a>
      </div>
    </section>
  );
}

export default Showcase;