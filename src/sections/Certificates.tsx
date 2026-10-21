import { useState } from "react";
import { Palette, Calendar, X } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import { certificates, type Certificate } from "../data/content";

export default function Certificates() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  return (
    <section id="certificates" className="section-wrap content-section">
      <SectionLabel number="03">CERTIFICATES & LEARNING</SectionLabel>

      <div className="section-heading-row mb-8">
        <h2 className="section-title text-2xl md:text-3xl font-bold whitespace-nowrap">
          Learning never <span>goes out of style.</span>
        </h2>
        <p className="text-sm text-gray-400">
          Knowledge is a journey, not a destination.
        </p>
      </div>

      {/* List Sertifikat */}
      <div className="certificate-list flex flex-col gap-4">
        {certificates.map((certificate: Certificate, index: number) => (
          <article
            key={certificate.title}
            className="certificate-card flex items-center justify-between p-4 bg-gray-900/60 border border-gray-800 rounded-xl transition-all hover:border-gray-700"
          >
            <div className="flex items-center gap-4">
              <div className="certificate-icon p-3 bg-blue-600/20 text-blue-400 rounded-lg">
                <Palette size={21} />
              </div>

              <div className="certificate-details">
                <h3 className="font-semibold text-lg text-white">
                  {certificate.title}
                </h3>
                <p className="text-sm text-gray-400">{certificate.issuer}</p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="certificate-year flex items-center gap-2 text-xs text-gray-400">
                <Calendar size={14} />
                <span>{certificate.year}</span>
              </div>

              {/* Tombol Verified */}
              {certificate.file && (
                <button
                  onClick={() => setSelectedPdf(certificate.file || null)}
                  className="px-4 py-1.5 rounded-full border border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 text-xs font-medium transition-all cursor-pointer"
                >
                  Verified
                </button>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* Modal Preview PDF */}
      {selectedPdf && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-4xl h-[85vh] bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 flex flex-col">
            {/* Header Modal */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800 bg-gray-900">
              <h3 className="text-sm font-medium text-gray-200">
                Preview Certificate
              </h3>
              <button
                onClick={() => setSelectedPdf(null)}
                className="p-1 text-gray-400 hover:text-white rounded-lg hover:bg-gray-800 transition-all"
              >
                <X size={20} />
              </button>
            </div>

            {/* Frame Viewer PDF */}
            <div className="flex-1 w-full h-full bg-gray-950">
              <iframe
                src={`${selectedPdf}#toolbar=0`}
                className="w-full h-full border-none"
                title="Certificate Preview"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}