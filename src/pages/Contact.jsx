import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import githubLogo from "../../public/github.png";
import linkedinLogo from "../../public/linkedin.png";
import gmailLogo from "../../public/gmail.png";
import whatsappLogo from "../../public/whatsapp.png";
import instagramLogo from "../../public/insta.png";
import facebookLogo from "../../public/facebook.png";

import "../CSS/Contact.css";
import "../index.css";

export default function Contact() {
  const formRef = useRef();
  const [toast, setToast] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_egshmy6",
        "template_5f7gjzr",
        formRef.current,
        "7WEd4htXcmgIORvwT"
      )
      .then(
        () => {
          setToast("success");
          formRef.current.reset();
          setTimeout(() => setToast(""), 3000);
        },
        () => {
          setToast("error");
          setTimeout(() => setToast(""), 3000);
        }
      );
  };

  const quickLinks = [
    { img: githubLogo, link: "https://github.com/S-SOHEL" },
    { img: linkedinLogo, link: "https://www.linkedin.com/in/shaikh-sohel-74s6786/" },
    { img: gmailLogo, link: "mailto:shaikhsohel6786@gmail.com" },
    { img: whatsappLogo, link: "https://wa.me/8010155174" },
    { img: instagramLogo, link: "https://www.instagram.com/your_instagram_id" },
    { img: facebookLogo, link: "https://www.facebook.com/your_facebook_profile" },
  ];

  return (
    <section className="contact-section" id="contact">
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="contact-title"
      >
        Let’s Connect & Collaborate 🤝
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="contact-subtitle"
      >
        I’m Shaikh Sohel — a MERN Stack & AI enthusiast.  
        Feel free to reach out for projects or collaboration.
      </motion.p>

      {/* Social Links */}
      <div className="contact-links">
        {quickLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15 }}
          >
            <img src={item.img} alt="social" className="social-icon" />
          </motion.a>
        ))}
      </div>

      {/* Contact Form */}
      <motion.form
        ref={formRef}
        onSubmit={sendEmail}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        className="contact-form"
      >
        <input name="name" placeholder="Your Name" required />
        <input name="email" type="email" placeholder="Your Email" required />
        <input name="subject" placeholder="Subject" />
        <textarea name="message" rows="5" placeholder="Your Message..." required />
        <button type="submit" className="contact-btn">
          🚀 Send Message
        </button>
      </motion.form>

      {/* Toast Notification */}
      {toast && (
        <div className={`toast ${toast}`}>
          {toast === "success"
            ? "✅ Message sent successfully!"
            : "❌ Failed to send message"}
        </div>
      )}
    </section>
  );
}
