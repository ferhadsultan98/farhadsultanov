// pages/ExperienceDetails.jsx
import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { 
  ArrowLeft,
  Briefcase,
  Calendar,
  MapPin,
  Award,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import experiencesData from '../Experiences/experiencesData.json';
import './ExperienceDetails.scss';

const ExperienceDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  const experience = experiencesData.experiences.find(exp => exp.slug === slug);

  if (!experience) {
    return (
      <div className="experienceDetailsPage">
        <div className="container">
          <div className="notFound">
            <h2>Təcrübə tapılmadı</h2>
            <Link to="/experience" className="backButton">
              <ArrowLeft size={18} />
              <span>Experience-ə qayıt</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const currentIndex = experiencesData.experiences.findIndex(exp => exp.slug === slug);
  const nextExperience = experiencesData.experiences[currentIndex + 1];

  return (
    <div className="experienceDetailsPage">
      {/* Header */}
      <header className="expHeader">
        <div className="container">
          <button onClick={() => navigate('/experience')} className="backButton">
            <ArrowLeft size={18} />
            <span>Back to Experience</span>
          </button>

          <div className="expMeta">
            <span className="expType">{experience.type}</span>
            <span className="expYear">
              <Calendar size={16} />
              {experience.year}
            </span>
          </div>

          <h1 className="expRole">{experience.role}</h1>
          
          <div className="expCompanyInfo">
            <span className="company">
              <Briefcase size={18} />
              {experience.company}
            </span>
            <span className="location">
              <MapPin size={18} />
              {experience.location}
            </span>
          </div>

          <p className="expDescription">{experience.detailedDescription}</p>
        </div>
      </header>

      {/* Main Content */}
      <section className="expContent">
        <div className="container">
          {/* Responsibilities */}
          <div className="contentBlock">
            <h2>Responsibilities</h2>
            <ul className="respList">
              {experience.responsibilities.map((resp, i) => (
                <li key={i}>
                  <CheckCircle size={20} />
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Projects */}
          {experience.keyProjects && (
            <div className="contentBlock">
              <h2>Key Projects</h2>
              <div className="projectsGrid">
                {experience.keyProjects.map((project, i) => (
                  <div key={i} className="projectItem">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <span className="impact">
                      <Award size={16} />
                      {project.impact}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Achievements */}
          <div className="contentBlock">
            <h2>Achievements</h2>
            <div className="achievementsGrid">
              {experience.achievements.map((ach, i) => (
                <div key={i} className="achievementCard">
                  <Award size={24} />
                  <p>{ach}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div className="contentBlock">
            <h2>Technologies Used</h2>
            <div className="techGrid">
              {experience.technologies.map((tech, i) => (
                <span key={i} className="techBadge">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Next Experience */}
      {nextExperience && (
        <section className="nextExp">
          <div className="container">
            <Link to={`/experience/${nextExperience.slug}`} className="nextExpLink">
              <span className="nextLabel">Next Experience</span>
              <div className="nextInfo">
                <span className="nextRole">{nextExperience.role}</span>
                <span className="nextCompany">{nextExperience.company}</span>
              </div>
              <ArrowRight size={24} />
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default ExperienceDetails;
