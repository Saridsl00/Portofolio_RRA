import { useState, FormEvent } from "react";
import { Mail, Send, FileText, X, ArrowUpRight, Code2 } from "lucide-react";
import Brand from "../components/Brand";
import SectionLabel from "../components/SectionLabel";

export default function Contact() {
  const [showCvModal, setShowCvModal] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const cvPath = "/cv.pdf";
  const myEmail = "your.email@example.com";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${myEmail}?subject=${encodeURIComponent(
      `Portfolio Inquiry from ${name}`
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="contact-section relative">
      <div className="section-wrap contact-inner">
        <SectionLabel number="04">GET IN TOUCH</SectionLabel>

        {/* Layout 2 Kolom Sejajar */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-6 items-center">
          {/* SISI KIRI: Teks Utama & Social Links */}
          <div className="contact-info flex flex-col justify-center min-w-0">
            <p className="eyebrow">HAVE AN IDEA IN MIND?</p>

            <h2 className="contact-title mb-4">
              Let's make <br />
              something <span>great.</span>
            </h2>

            <p className="contact-description text-gray-300 text-xs md:text-sm leading-relaxed mb-6 max-w-md">
              I am currently open to full-time, contract, or freelance opportunities.
              Whether you have a question or just want to say hi, feel free to drop a message!
            </p>

            {/* Social Links */}
            <div className="social-links-container pt-4 border-t border-gray-800/80">
              <p className="text-[11px] text-gray-400 mb-3 uppercase tracking-wider font-semibold">
                Connect with me
              </p>
              <div className="flex flex-wrap gap-2.5">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-900/60 hover:bg-gray-800 border border-gray-800 rounded-lg text-xs font-medium text-gray-300 transition-all"
                >
                  <Code2 size={14} /> GitHub <ArrowUpRight size={12} />
                </a>

                <a
                  href="https://linkedin.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-900/60 hover:bg-gray-800 border border-gray-800 rounded-lg text-xs font-medium text-gray-300 transition-all"
                >
                  <Code2 size={14} /> LinkedIn <ArrowUpRight size={12} />
                </a>

                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 bg-gray-900/60 hover:bg-gray-800 border border-gray-800 rounded-lg text-xs font-medium text-gray-300 transition-all"
                >
                  <Code2 size={14} /> Instagram <ArrowUpRight size={12} />
                </a>
              </div>
            </div>
          </div>

          {/* SISI KANAN: Form & Preview CV */}
          <div className="contact-card min-w-0 bg-gray-900/40 backdrop-blur-md p-5 md:p-6 rounded-2xl border border-gray-800 shadow-xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Mail size={18} className="text-cyan-400" /> Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div>
                <label className="block text-[11px] font-medium text-gray-400 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-gray-950/60 border border-gray-800 rounded-lg text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-gray-950/60 border border-gray-800 rounded-lg text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-[11px] font-medium text-gray-400 mb-1">
                  Message
                </label>
                <textarea
                  required
                  rows={3}
                  placeholder="Write your message here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-gray-950/60 border border-gray-800 rounded-lg text-xs text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition-all resize-none"
                ></textarea>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-2.5 mt-2">
                <button
                  type="submit"
                  className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg text-xs shadow-md transition-all cursor-pointer"
                >
                  <Send size={14} /> SEND MESSAGE
                </button>

                <button
                  type="button"
                  onClick={() => setShowCvModal(true)}
                  className="flex items-center justify-center gap-2 px-5 py-2.5 bg-gray-800/80 hover:bg-gray-700/80 border border-gray-700 text-gray-200 font-medium rounded-lg text-xs transition-all cursor-pointer"
                >
                  <FileText size={14} /> PREVIEW CV
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Footer */}
        <footer className="site-footer flex flex-col md:flex-row items-center justify-between gap-4 mt-16 pt-6 border-t border-gray-800 text-[11px] text-gray-400">
          <Brand />
          <p>Designed with intention. Built with curiosity.</p>
          <a href="#home" className="hover:text-white transition-all">
            BACK TO TOP ↑
          </a>
        </footer>
      </div>

      {/* Modal Preview CV */}
      {showCvModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl h-[85vh] bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 flex flex-col">
            <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900">
              <h3 className="text-xs font-medium text-gray-200 flex items-center gap-2">
                <FileText size={15} className="text-cyan-400" /> Curriculum Vitae
              </h3>
              <button
                onClick={() => setShowCvModal(false)}
                className="p-1 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-all cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            <div className="flex-1 w-full h-full bg-gray-950">
              <iframe
                src={`${cvPath}#toolbar=0`}
                className="w-full h-full border-none"
                title="CV Preview"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}