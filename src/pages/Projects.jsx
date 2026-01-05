import React from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const PROJECTS = [
  {
    title: "💼 Personal Portfolio Website",
    desc: "A fully responsive portfolio built using React, Framer Motion, Tailwind CSS and modern UI/UX animations. Clean design showcasing skills, projects, contact form, and smooth transitions.",
    ss: "/projects/My-Portfilio.png",
    tech: ["React", "Framer Motion", "Tailwind CSS", "JavaScript"],
    live: "#",
    code: "https://github.com/S-SOHEL",
  },
  {
    title: "❌ Tic Tac Toe Game",
    desc: "Minimal and fun Tic Tac Toe game built using React and JavaScript. Handles winning logic, draw detection, and real-time UI updates.",
    ss: "/projects/Tic-Tac-Toe.png",
    tech: ["React", "JavaScript", "CSS"],
    live: "#",
    code: "https://github.com/S-SOHEL",
  },
  {
    title: "🏨 Hotel Management System",
    desc: "A functional hotel management system featuring room booking, user dashboard, hotel admin panel, authentication, and database storage using MERN stack.",
    ss: "/projects/Hotel Webside.png",
    tech: ["MongoDB", "Express", "React", "Node.js", "Tailwind", "JWT"],
    live: "#",
    code: "https://github.com/S-SOHEL",
  },
  {
    title: "🎵 Spotify Clone",
    desc: "A stylish Spotify-like music player clone designed using React and Tailwind. Features playlists UI, smooth transitions, and mobile responsiveness.",
    ss: "/projects/Spotify-Clone.png",
    tech: ["React", "Tailwind", "CSS"],
    live: "#",
    code: "https://github.com/S-SOHEL",
  },
  {
    title: "🌐 RBN-Style Website Clone",
    desc: "A clean and responsive clone of an RBN-like modern UI website made with HTML, CSS, JS, and React. Focus on animations and layout accuracy.",
    ss: "/projects/Rbn Hotel Webside.png",
    tech: ["React", "CSS", "JavaScript"],
    live: "#",
    code: "https://github.com/S-SOHEL",
  },
  {
    title: "📚 Major Final Year Project (Coming Soon)",
    desc: "Your main final-year engineering project. Once you share the name and details, it will be updated with full description, tech stack, live link, and code link.",
    ss: "/projects/Ai-Twin.png",
    tech: ["MERN", "Express", "MongoDB", "React"],
    live: "#",
    code: "https://github.com/S-SOHEL",
  },
];

export default function Projects() {
  return (
    <motion.section
      className="container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      id="projects"
    >
      <div
        className="card"
        style={{
          background: "rgba(255,255,255,0.03)",
          borderRadius: 16,
          padding: 30,
        }}
      >
        <motion.h2
          className="text-4xl font-semibold text-cyan-400 mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          🚀 Projects
        </motion.h2>

        <p className="text-gray-400 mb-10">
          A collection of my development work — MERN stack apps, UI clones, and creative projects.
        </p>

        <div
          className="projects-grid"
          style={{
            display: "grid",
            gap: 24,
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          }}
        >
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.15 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              style={{
                background:
                  "linear-gradient(145deg, rgba(20,20,20,0.9), rgba(10,10,10,0.9))",
                border: "1px solid rgba(0,255,255,0.1)",
                borderRadius: 16,
                padding: 16,
                overflow: "hidden",
                boxShadow: "0 0 20px rgba(0,255,255,0.08)",
              }}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                style={{ borderRadius: 12, overflow: "hidden" }}
              >
                <img
                  src={p.ss}
                  alt={p.title}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                    borderRadius: 12,
                  }}
                />
              </motion.div>

              <div style={{ marginTop: 12 }}>
                <h3 style={{ fontSize: 18, color: "#0ea5e9", marginBottom: 6 }}>
                  {p.title}
                </h3>

                <p
                  style={{
                    fontSize: 14,
                    color: "#bbb",
                    marginBottom: 8,
                    lineHeight: 1.6,
                  }}
                >
                  {p.desc}
                </p>

                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: 6,
                    marginBottom: 10,
                  }}
                >
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        background: "rgba(0,255,255,0.05)",
                        border: "1px solid rgba(0,255,255,0.1)",
                        padding: "3px 8px",
                        borderRadius: 6,
                        fontSize: 12,
                        color: "#aaf",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    gap: 10,
                  }}
                >
                  <motion.a
                    href={p.code}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      background: "rgba(255,255,255,0.05)",
                      color: "#0ea5e9",
                      padding: "6px 12px",
                      borderRadius: 8,
                      fontSize: 13,
                      border: "1px solid rgba(0,255,255,0.1)",
                      textDecoration: "none",
                    }}
                  >
                    <Github size={14} /> Code
                  </motion.a>

                  <motion.a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.08 }}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                      background:
                        "linear-gradient(90deg, #06b6d4, #0891b2)",
                      color: "#fff",
                      padding: "6px 12px",
                      borderRadius: 8,
                      fontSize: 13,
                      textDecoration: "none",
                    }}
                  >
                    <ExternalLink size={14} /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
