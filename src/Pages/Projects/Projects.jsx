// pages/Projects.jsx
import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Search,
  Code,
  Palette,
  Smartphone,
  Globe,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import projectsData from "./projectsData.json"; // Datanı import edirik
import "./Projects.scss";

// JSON-dakı ikon adlarını real ikon komponentləri ilə əlaqələndirən obyekt
const iconMap = {
  Globe: Globe,
  Code: Code,
  Smartphone: Smartphone,
  Palette: Palette,
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Datanı import edilmiş obyektdən alırıq
  const { categories, projects } = projectsData;

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeFilter === "all" || project.category === activeFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="projectsPage">
      {/* Name Header */}
      <section className="nameHeader">
        <h1 className="animatedName">My Projects</h1>
      </section>

      {/* All Projects */}
      <section className="allProjectsSection">
        <div className="sectionHeader">
          <h2>All Projects</h2>
          <p>Bütün layihələrimi kəşf edin</p>
        </div>

        {/* Filters & Search */}
        <div className="projectsControls">
          <div className="searchBox">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filterTabs">
            {categories.map((category) => {
              // Düzgün ikonu iconMap-dən alırıq
              const IconComponent = iconMap[category.icon];
              return (
                <button
                  key={category.id}
                  className={`filterTab ${
                    activeFilter === category.id ? "active" : ""
                  }`}
                  onClick={() => setActiveFilter(category.id)}
                >
                  <IconComponent size={18} />
                  <span>{category.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="projectsGrid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="projectCard">
              <div className="projectImageContainer">
                {/* --- DƏYİŞİKLİK BURADA BAŞLAYIR --- */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="projectImage"
                />
                {/* --- DƏYİŞİKLİK BURADA BİTİR --- */}
                <div className="projectOverlay">
                  <div className="projectActions">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projectAction"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projectAction"
                      >
                        <Github size={18} />
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="projectInfo">
                <div className="projectMeta">
                  <span className="projectDate">{project.date}</span>
                </div>
                <h3 className="projectTitle">{project.title}</h3>
                <p className="projectDescription">{project.description}</p>
                <div className="projectTags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="projectTag">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link to={`/projects/${project.id}`} className="detailsButton">
                  <span>Daha ətraflı</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="noResults">
            <p>Axtarışınıza uyğun layihə tapılmadı.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Projects;
