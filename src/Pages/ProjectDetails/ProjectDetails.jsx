// pages/ProjectDetails.jsx
import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  ArrowRight
} from 'lucide-react';
import projectsData from '../Projects/projectsData.json'; // JSON import
import './ProjectDetails.scss';


const ProjectDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const project = projectsData.projects.find(p => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="projectDetailsPage">
        <div className="container">
          <div className="notFound">
            <h2>Layihə tapılmadı</h2>
            <Link to="/projects" className="backButton">
              <ArrowLeft size={18} />
              <span>Layihələrə qayıt</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentIndex = projectsData.projects.findIndex(p => p.id === parseInt(id));
  const nextProject = projectsData.projects[currentIndex + 1];

  return (
    <div className="projectDetailsPage">
      {/* Name Header */}
      <section className="nameHeader">
        <h1 className="animatedName">{project.title}</h1>
      </section>

      {/* Hero Section */}
      <section className="projectHero">
        <div className="container">
          <button onClick={() => navigate('/projects')} className="backButton">
            <ArrowLeft size={18} />
            <span>Layihələrə Qayıt</span>
          </button>

          <div className="heroContent">
            <div className="heroMeta">
              <span className="metaTag">{project.category}</span>
              <span className="metaTag">{project.date}</span>
            </div>
            
            <p className="heroDescription">{project.description}</p>

            <div className="heroLinks">
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="heroLink">
                  <ExternalLink size={18} />
                  <span>Canlı Nümayiş</span>
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="heroLink secondary">
                  <Github size={18} />
                  <span>Koda Bax</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="mainImage">
        <div className="container">
          {/* --- DƏYİŞİKLİK BURADA BAŞLAYIR --- */}
          <div className="imageWrapper">
            <img src={project.image} alt={project.title} className="detailImage" />
          </div>
          {/* --- DƏYİŞİKLİK BURADA BİTİR --- */}
        </div>
      </section>

      {/* Overview */}
      <section className="overviewSection">
        <div className="container">
          <div className="overviewGrid">
            <div className="overviewSidebar">
              <div className="sidebarBlock">
                <h3>Kateqoriya</h3>
                <p>{project.category}</p>
              </div>
              <div className="sidebarBlock">
                <h3>İl</h3>
                <p>{project.date}</p>
              </div>
              <div className="sidebarBlock">
                <h3>Stack</h3>
                <div className="stackList">
                  {project.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="overviewContent">
              <h2>Layihənin icmalı</h2>
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Grid */}
      <section className="techSection">
        <div className="container">
          <h2>Texnologiyalar</h2>
          <div className="techGrid">
            {project.tags.map((tech, i) => (
              <div key={i} className="techItem">
                <span>{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Next Project */}
      {nextProject && (
        <section className="nextSection">
          <div className="container">
            <div className="nextContent">
              <span className="nextLabel">Növbəti Layihə</span>
              <Link to={`/projects/${nextProject.id}`} className="nextLink">
                <span className="nextTitle">{nextProject.title}</span>
                <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default ProjectDetails;
