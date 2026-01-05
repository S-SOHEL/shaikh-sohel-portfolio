import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =======================
   CERTIFICATES DATA
======================= */
const CERTS = {
  tech: [
    {
      title: "DSA Certificate",
      org: "Apna College",
      date: "2025",
      img: "/certs/certificate-dsa.png",
    },
    {
      title: "Internship & Job Preparation",
      org: "Internshala",
      date: "2025",
      img: "/certs/internship-job-prep.png",
    },
  ],

  other: [
    {
      title: "Internship Certificate",
      org: "Company Internship",
      date: "2025",
      img: "/certs/internship.png",
    },
    {
      title: "SOC Internship Letter",
      org: "SOC Program",
      date: "2025",
      img: "/certs/soc-internship-letter.png",
    },
    // {
    //   title: "Certificate Design 1",
    //   org: "Personal",
    //   date: "2025",
    //   img: "/certs/cert1.svg",
    // },
    // {
    //   title: "Certificate Design 2",
    //   org: "Personal",
    //   date: "2025",
    //   img: "/certs/cert2.svg",
    // },
    // {
    //   title: "Certificate Design 3",
    //   org: "Personal",
    //   date: "2025",
    //   img: "/certs/cert3.svg",
    // },
  ],
};

/* =======================
   COMPONENT
======================= */
export default function Certificates() {
  const [tab, setTab] = useState("tech");
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section className="container" style={{ padding: "40px 0" }}>
      <div
        style={{
          background: "#111",
          borderRadius: 14,
          padding: 24,
        }}
      >
        <h2 style={{ fontSize: "1.8rem", color: "#fff" }}>
          Certificates 🏅
        </h2>
        <p style={{ color: "#aaa", marginTop: 6 }}>
          Explore my certifications — technical & others.
        </p>

        {/* TABS */}
        <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
          {["tech", "other"].map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              style={{
                padding: "8px 18px",
                borderRadius: 8,
                border: "none",
                cursor: "pointer",
                background: tab === t ? "#007bff" : "#333",
                color: "#fff",
                fontWeight: 500,
                transition: "0.3s",
              }}
            >
              {t === "tech" ? "Tech" : "Others"}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div
          style={{
            marginTop: 28,
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          <AnimatePresence mode="wait">
            {CERTS[tab].map((c, idx) => {
              const isSVG = c.img.endsWith(".svg");

              return (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  whileHover={{
                    scale: 1.03,
                    boxShadow: "0 0 15px rgba(0,123,255,0.4)",
                  }}
                  style={{
                    background: "#1a1a1a",
                    borderRadius: 12,
                    padding: 16,
                    color: "#fff",
                  }}
                >
                  {/* IMAGE WRAPPER (SVG FIX) */}
                  <div
                    style={{
                      background: isSVG ? "#fff" : "transparent",
                      padding: isSVG ? 10 : 0,
                      borderRadius: 10,
                      marginBottom: 12,
                    }}
                  >
                    <img
                      src={c.img}
                      alt={c.title}
                      style={{
                        width: "100%",
                        height: 160,
                        objectFit: isSVG ? "contain" : "cover",
                        borderRadius: 8,
                      }}
                    />
                  </div>

                  <strong style={{ fontSize: 16 }}>{c.title}</strong>
                  <div style={{ fontSize: 13, color: "#bbb" }}>
                    {c.org} • {c.date}
                  </div>

                  <button
                    onClick={() => setSelectedCert(c)}
                    style={{
                      marginTop: 12,
                      background: "#007bff",
                      border: "none",
                      color: "#fff",
                      borderRadius: 6,
                      padding: "6px 14px",
                      cursor: "pointer",
                    }}
                  >
                    View
                  </button>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(0,0,0,0.85)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 1000,
            }}
          >
            <motion.img
              src={selectedCert.img}
              alt={selectedCert.title}
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "90%",
                maxHeight: "85%",
                borderRadius: 12,
                boxShadow: "0 0 25px rgba(255,255,255,0.25)",
                background: selectedCert.img.endsWith(".svg")
                  ? "#fff"
                  : "transparent",
                padding: selectedCert.img.endsWith(".svg") ? 12 : 0,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
