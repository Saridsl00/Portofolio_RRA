import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ExternalLink, Code2 } from "lucide-react";
import SectionLabel from "../components/SectionLabel";
import { projects, categories, type Category } from "../data/content";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [showAll, setShowAll] = useState<boolean>(false);

  // Memfilter project sesuai tab kategori yang sedang aktif
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  // Mengambil 3 project awal jika showAll = false, atau semua jika showAll = true
  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 3);

  // Mengubah kategori sekaligus me-reset limit ke 3 project
  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
    setShowAll(false);
  };

  return (
    <section id="projects" className="section-wrap content-section">
      <SectionLabel number="02">SELECTED PROJECTS</SectionLabel>

      <div className="section-heading-row flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
  <h2 className="section-title text-2xl md:text-3xl font-bold whitespace-nowrap">
    Some things <span className="ml-2">I've created.</span>
  </h2>

  <p className="text-sm text-gray-400 max-w-md">
    A selection of experiments, ideas, and work in progress.
  </p>
</div>

      {/* Tab Filter Navigasi */}
      <div className="category-tabs flex gap-4 my-6 overflow-x-auto pb-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selectedCategory === category
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-800/60 text-gray-400 hover:text-white hover:bg-gray-700/60"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* List Project (1 Baris 1 Project, Posisi Selang-Seling) */}
      <div className="project-list flex flex-col gap-16 w-full">
        <AnimatePresence mode="wait">
          {displayedProjects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.article
                key={project.id}
                className={`project-card flex flex-col ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } items-center justify-between gap-8 w-full`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.08 }}
              >
                {/* Detail Keterangan Teks */}
                <div className="project-body w-full md:w-1/2">
                  <p className="eyebrow">{project.category}</p>
                  <h3 className="text-2xl font-bold my-2">{project.title}</h3>
                  <p className="project-description text-gray-300 mb-4">
                    {project.description}
                  </p>

                  <div className="project-tags flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-800 rounded-md text-xs text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="project-buttons flex gap-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="ghost-button flex items-center gap-2"
                      >
                        <Code2 size={16} /> Code
                      </a>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noreferrer"
                        className="primary-button flex items-center gap-2"
                      >
                        <ExternalLink size={16} /> Demo
                      </a>
                    )}
                  </div>
                </div>

                {/* Foto Project */}
                <div className="project-image w-full md:w-1/2 relative overflow-hidden rounded-lg">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-auto object-cover rounded-lg"
                    />
                  )}
                  <span className="project-number absolute top-3 right-3 bg-black/60 px-2 py-1 rounded text-xs">
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Tombol View All / Show Less */}
      {filteredProjects.length > 3 && (
        <div className="flex justify-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-cyan-500/25 transition-all duration-300 cursor-pointer"
          >
            {showAll ? "Show Less" : "View All"}
          </button>
        </div>
      )}
    </section>
  );
}