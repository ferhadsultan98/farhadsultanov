// pages/Experience.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, 
  Calendar,
  MapPin,
  Award,
  ArrowRight
} from 'lucide-react';
import experiencesData from './experiencesData.json';
import './Experiences.scss';

const Experience = () => {
  const { experiences, certifications } = experiencesData;

  return (
    <div className="experiencePage">
      {/* Name Header */}
      <section className="nameHeader">
        <h1 className="animatedName">My Experience</h1>
      </section>

      {/* Work Experience */}
      <section className="workExperienceSection">
        <div className="container">
          <div className="sectionHeader">
            <h2>Work Experience</h2>
            <p>Professional karyera yolum</p>
          </div>

          <div className="experienceList">
            {experiences.map((exp) => (
              <div key={exp.id} className="experienceCard">
                <div className="experienceHeader">
                  <div className="experienceTop">
                    <div className="experienceTitle">
                      <h3>{exp.role}</h3>
                      <div className="experienceMeta">
                        <span className="experienceCompany">
                          <Briefcase size={16} />
                          {exp.company}
                        </span>
                        <span className="experienceLocation">
                          <MapPin size={16} />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    <div className="experienceYear">
                      <Calendar size={16} />
                      <span>{exp.year}</span>
                    </div>
                  </div>
                  <span className="experienceType">{exp.type}</span>
                </div>

                <p className="experienceDescription">{exp.description}</p>

                <div className="experienceDetails">
                  <div className="detailBlock">
                    <h4>Technologies</h4>
                    <div className="techTags">
                      {exp.technologies.map((tech, i) => (
                        <span key={i} className="techTag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <Link to={`/experience/${exp.slug}`} className="viewDetailsBtn">
                  <span>Daha ətraflı</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="certificationsSection">
        <div className="container">
          <div className="sectionHeader">
            <h2>Certifications</h2>
            <p>Professional sertifikatlar</p>
          </div>

          <div className="certificationsGrid">
            {certifications.map((cert) => (
              <div key={cert.id} className="certCard">
                <Award size={24} />
                <h3>{cert.title}</h3>
                <p className="certIssuer">{cert.issuer}</p>
                <div className="certMeta">
                  <span className="certYear">{cert.year}</span>
                  <span className="certCredential">{cert.credential}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;
