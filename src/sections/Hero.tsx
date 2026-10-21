import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="hero section-wrap">
      <div className="hero-heading">
        <p className="eyebrow">CREATIVE MIND · DIGITAL WORLD</p>

        <h1 className="hero-title" aria-label="PORTOFOLIO">
          {"PORTOFOLIO".split("").map((letter, index) => (
            <span key={index}>{letter}</span>
          ))}
        </h1>
      </div>

      <div className="hero-content">
        <div className="hero-roles">
          <span>WEB</span>
          <span>DESIGN</span>
          <span>CREATIVE</span>
        </div>

        <div className="portrait">
          <img src="/profile.png" alt="Foto profil Raihan Rizkia Abil" />
          <span className="portrait-caption">
            THE PERSON BEHIND THE PIXELS.
          </span>
        </div>

        <div className="hero-name">
          <p>HELLO, I'M</p>
          <h2>
            RAIHAN
            <br />
            RIZKIA
            <br />
            ABIL<span>.</span>
          </h2>
          <p className="hero-description">
            I create thoughtful digital experiences through design,
            technology, and creativity.
          </p>
          <a className="primary-button" href="#projects">
            Explore my work <ArrowDown size={16} />
          </a>
        </div>
      </div>

      {/*
      <div className="hero-footer">
        <span>BASED IN INDONESIA</span>
        <span>AVAILABLE FOR OPPORTUNITIES</span>
        <a href="#about">SCROLL TO DISCOVER ↓</a>
      </div>
      */}
    </section>
  );
}