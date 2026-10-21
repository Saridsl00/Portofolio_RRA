import { motion } from "motion/react";
import { Code2, Palette } from "lucide-react";
import SectionLabel from "../components/SectionLabel";

export default function About() {
  return (
    <section id="about" className="section-wrap content-section">
      <SectionLabel number="01">ABOUT ME</SectionLabel>

      <motion.div
        className="about-grid"
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div>
          <p className="eyebrow">A LITTLE INTRODUCTION</p>

          <h2 className="section-title">
            Not just creating.
            <br />
            <span>Creating with purpose.</span>
          </h2>
        </div>

        <div className="about-copy">
          <p>
            Hi! I'm <strong> Lee Haechan</strong>, a creative individual
            passionate about building digital experiences that look
            beautiful and work beautifully.
          </p>

          <p>
            I enjoy exploring the intersection of design and technology,
            turning ideas into meaningful, accessible, and user-friendly
            products.
          </p>

          <div className="skill-list">
            {/* <span>
              <Code2 size={15} /> Web Development
            </span> */}

            <span>
              <Palette size={15} /> UI / UX Design
            </span>
          </div>
        </div>
      </motion.div>

      <div className="about-bottom">
        <div>
          <span className="stat-number">01.</span>
          <h3>Curious by nature</h3>
          <p>Always learning, exploring, and improving.</p>
        </div>

        <div>
          <span className="stat-number">02.</span>
          <h3>Detail oriented</h3>
          <p>Thoughtful decisions from concept to execution.</p>
        </div>

        <div>
          <span className="stat-number">03.</span>
          <h3>Built to grow</h3>
          <p>Every project is an opportunity to do better.</p>
        </div>
      </div>
    </section>
  );
}