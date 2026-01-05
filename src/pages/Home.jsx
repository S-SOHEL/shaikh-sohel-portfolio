import React from "react";
import { motion } from "framer-motion";
import "../CSS/Home.css";
import "../index.css";


const photo = "/Photo.jpg";
const githubLogo = "/github.png";
const linkedinLogo = "/linkedin.png";
const gmailLogo = "/gmail.png";
const whatsappLogo = "/whatsapp.png";
const instagramLogo = "/insta.png";
const facebookLogo = "/facebook.png";

export default function Home() {
  const professions = [
    "Full Stack MERN Developer",
    "Java & Python Programmer",
    "Frontend & UI Enthusiast",
    "Backend API Developer",
    "Problem Solver",
  ];

  const quickLinks = [
    { img: githubLogo, title: "GitHub", link: "https://github.com/S-SOHEL" },
    {
      img: linkedinLogo,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/shaikh-sohel-74s6786", 
    },
    {
      img: gmailLogo,
      title: "Email",
      link: "mailto:shaikhsohel6786@gmail.com",
    },
    {
      img: whatsappLogo,
      title: "WhatsApp",
      link: "https://wa.me/8010155174", 
    },
    {
      img: instagramLogo,
      title: "Instagram",
      link: "https://www.instagram.com/your_instagram_id", 
    },
    {
      img: facebookLogo,
      title: "Facebook",
      link: "https://www.facebook.com/your_facebook_profile", 
    },
  ];

  return (
    <section className="home-section">
      <style>
        {`
          @keyframes typing { from { width: 0; } to { width: 100%; } }
          @keyframes blink { 50% { border-color: transparent; } }
        `}
      </style>

      {/* Top Section: Photo + Info */}
      <div className="home-top">
        {/* Left: Glowing Photo */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="photo-container"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="photo-ring"
          />
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="photo-frame"
          >
            <motion.img
              src={photo}
              alt="Shaikh Sohel"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="profile-photo"
            />
          </motion.div>
        </motion.div>

        {/* Right: Info Section */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="home-info"
        >
          <h1 className="home-title">
            Hi, I’m{" "}
            <motion.span
              animate={{ backgroundPositionX: ["0%", "200%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="home-name"
            >
              Shaikh Sohel
            </motion.span>
          </h1>

          <p className="typing-effect">
            MERN Stack Developer | Java & Python | SQL & WordPress
          </p>

          <p className="home-subtext">
            I build full stack web applications and clones like personal
            portfolios, tic-tac-toe games, hotel management systems, and
            Spotify / RBN-style clones — always focusing on clean UI, solid
            backend, and good user experience.
          </p>

          <motion.div className="profession-tags">
            {professions.map((role, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.05,
                  background:
                    "linear-gradient(90deg,var(--accent),var(--accent-2))",
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="profession-tag"
              >
                {role}
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="info-cards">
            {[
              { label: "📍 Location", value: "Pune, Maharashtra, India" },
              {
                label: "💻 Tech Skills",
                value:
                  "Java, Python, MERN (MongoDB, Express, React, Node.js), SQL, MySQL, Tailwind, Bootstrap, WordPress",
              },
              {
                label: "🧠 Soft Skills",
                value:
                  "Problem Solving, Teamwork, Communication, Creativity, Self-Learning",
              },
              {
                label: "📧 Contact",
                value: "shaikhsohel6786@gmail.com",
              },
            ].map((info, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 250 }}
                className="info-card"
              >
                <strong>{info.label}</strong>
                <p>{info.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Quick Links */}
      <motion.div className="quick-links">
        <h2 className="quick-links-title">Connect with me</h2>
        <div className="quick-links-list">
          {quickLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.link}
              title={item.title}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, rotate: 5 }}
              transition={{ type: "spring", stiffness: 250 }}
            >
              <motion.img
                src={item.img}
                alt={item.title}
                whileHover={{
                  filter:
                    "drop-shadow(0 0 15px var(--accent)) brightness(1.2)",
                }}
                className="quick-link-img"
              />
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
