// pages/Projects.jsx
import React, { useState, useEffect, useRef } from "react";
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
import projectsData from "./projectsData.json";
import "./Projects.scss";

const iconMap = {
  Globe: Globe,
  Code: Code,
  Smartphone: Smartphone,
  Palette: Palette,
};

// Image Carousel Component - Sadələşdirilmiş və Debug
const ImageCarousel = ({ images, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef(null);

  // Debug: Console-da nə baş verir görək
  useEffect(() => {
    console.log('Hover status:', isHovered);
    console.log('Images count:', images?.length);
    console.log('Current index:', currentIndex);
  }, [isHovered, currentIndex, images]);

  // Slider Effect
  useEffect(() => {
    // Təmizlə
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    if (isHovered && images && images.length > 1) {
      console.log('Starting slider...');
      
      timerRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = (prevIndex + 1) % images.length;
          console.log('Changing from', prevIndex, 'to', nextIndex);
          return nextIndex;
        });
      }, 1000);
    } else if (!isHovered) {
      console.log('Resetting to first image');
      setCurrentIndex(0);
    }

    // Cleanup
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isHovered, images]);

  if (!images || images.length === 0) {
    return <div className="noImage">No Images</div>;
  }

  return (
    <div
      className="imageCarouselWrapper"
      onMouseEnter={() => {
        console.log('MOUSE ENTER!');
        setIsHovered(true);
      }}
      onMouseLeave={() => {
        console.log('MOUSE LEAVE!');
        setIsHovered(false);
      }}
    >
      <div className="imagesStack">
        {images.map((imageSrc, idx) => (
          <img
            key={idx}
            src={imageSrc}
            alt={`${alt} ${idx + 1}`}
            className={`slideImage ${idx === currentIndex ? 'visible' : 'hidden'}`}
            style={{
              opacity: idx === currentIndex ? 1 : 0,
              zIndex: idx === currentIndex ? 2 : 1
            }}
          />
        ))}
      </div>
      
      {/* Debug indicator */}
      <div className="debugInfo" style={{
        position: 'absolute',
        bottom: '5px',
        right: '5px',
        background: 'rgba(0,0,0,0.7)',
        color: 'white',
        padding: '2px 5px',
        fontSize: '10px',
        borderRadius: '3px',
        zIndex: 100
      }}>
        {currentIndex + 1}/{images.length} {isHovered ? '▶' : '⏸'}
      </div>
    </div>
  );
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

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
      <section className="nameHeader">
        <h1 className="animatedName">My Projects</h1>
      </section>

      <section className="allProjectsSection">
        <div className="sectionHeader">
          <h2>All Projects</h2>
          <p>Bütün layihələrimi kəşf edin</p>
        </div>

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

        <div className="projectsGrid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="projectCard">
              <div className="projectImageContainer">
                <ImageCarousel images={project.images} alt={project.title} />
                <div className="projectOverlay">
                  <div className="projectActions">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="projectAction"
                        onClick={(e) => e.stopPropagation()}
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
                        onClick={(e) => e.stopPropagation()}
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
