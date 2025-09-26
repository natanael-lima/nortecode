import React, { useState } from "react";
import {
  FiExternalLink,
  FiGithub,
  FiCode,
  FiSmartphone,
  FiGlobe,
} from "react-icons/fi";
import { BiGridAlt } from "react-icons/bi";
import { projects } from "../lib/data";

const categories = [
  "Todos",
  "Web Development",
  "Mobile App",
  "Dashboard",
  "Enterprise",
  "Social",
  "Education",
  "Real Estate",
];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter(
          (project) =>
            project.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  // Patrón intercalado de columnas
  const getSizePattern = (index: number) => {
    const pattern = ["col-span-2", "col-span-1", "col-span-1", "col-span-2"];
    return pattern[index % pattern.length];
  };

  // Íconos según categoría
  const getCategoryIcon = (category: string) => {
    switch (category.toLowerCase()) {
      case "mobile app":
        return <FiSmartphone className="w-4 h-4" />;
      case "web development":
        return <FiGlobe className="w-4 h-4" />;
      case "dashboard":
        return <BiGridAlt className="w-4 h-4" />;
      default:
        return <FiCode className="w-4 h-4" />;
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center py-10">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nuestro <span className="text-teal-700">Portfolio</span>
          </h1>
          <p className="text-lg text-gray-600/70 max-w-2xl mx-auto px-4">
            Descubra nuestras soluciones innovadoras elaboradas con precisión y
            creatividad.
          </p>
        </div>

        {/* Submenú categorías */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-lg font-medium transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-teal-700 text-white shadow-md  hover:shadow-lg hover:shadow-teal-500/20"
                  : "bg-neutral-200 text-gray-700 hover:bg-gray-200 hover:scale-101 "
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {filteredProjects.map((project, index) => (
            <div
                key={project.id}
                className={`hover:scale-105 group relative rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100 ${getSizePattern(
                  index
                )} h-[350px]`} // altura fija para uniformidad
              >
                {/* Imagen como background */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
                />

                {/* Overlay oscuro para contraste */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-950/80 via-black/40 to-black/20"></div>

                {/* Categoría arriba */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center space-x-1 bg-teal-50 text-teal-900 px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                  </span>
                </div>

                {/* Info + Footer */}
                <div className="absolute bottom-0 left-0 right-0 p-4 z-10 bg-gradient-to-t from-black/50 via-black/40 to-transparent">
                   {/* Título */}
                    <h3 className="text-lg font-bold text-white mb-2">
                      {project.title}
                    </h3>

                    {/* Tecnologías */}
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className=" text-teal-100/75 px-2 py-0.5 bg-teal-800/50 border-1 border-teal-100/30 rounded-full text-xs font-normal"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="bg-gray-700/80 text-white px-2 py-0.5 rounded-md text-xs font-medium">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Descripción */}
                    <p className="text-sm text-gray-200 line-clamp-2 mb-3">
                      {project.description}
                    </p>

                  <div className="flex items-center justify-between">
                     <button className="group gap-1 border-1 px-4 py-2 rounded-lg transition hover:bg-teal-100 hover:text-teal-900 cursor-pointer text-teal-50 px-4 py-1 rounded-lg font-medium transition-all duration-300 ease-in-out ">
                              Solicitar presupuesto
                      </button>
                    <div className="flex space-x-3">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-300 hover:text-white transition transform hover:scale-110"
                        >
                          <FiExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
