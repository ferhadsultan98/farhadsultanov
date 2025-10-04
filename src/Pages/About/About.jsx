// pages/About.jsx
import React, { useState } from "react";
import {
  Code2,
  Briefcase,
  Calendar,
  MapPin,
  Coffee,
  Target,
  Heart,
} from "lucide-react";
import "./About.scss";

const About = () => {
  const [activeSkillCategory, setActiveSkillCategory] = useState("All");

  const skills = [
    { name: "JavaScript", level: 90, category: "Frontend" },
    { name: "React", level: 95, category: "Frontend" },
    { name: "TypeScript", level: 85, category: "Frontend" },
    { name: "Next.js", level: 88, category: "Frontend" },
    { name: "SCSS/CSS", level: 92, category: "Frontend" },
    { name: "Node.js", level: 75, category: "Backend" },
    { name: "MongoDB", level: 70, category: "Database" },
    { name: "Git/GitHub", level: 90, category: "Tools" },
  ];

  const interests = [
    { icon: Code2, name: "Coding", desc: "Yeni texnologiyalar öyrənmək" },
    { icon: Coffee, name: "Coffee", desc: "Mükəmməl qəhvə hazırlama" },
    {
      icon: Target,
      name: "Problem Solving",
      desc: "Mürəkkəb problemləri həll etmək",
    },
    {
      icon: Heart,
      name: "Open Source",
      desc: "Açıq mənbə layihələrdə iştirak",
    },
  ];

  const education = [
    {
      id: 1,
      year: '2018 - 2022',
      degree: 'Bachelor of Computer Science',
      institution: 'Bakı Dövlət Universiteti',
      location: 'Bakı, Azərbaycan',
      description: 'Kompüter elmləri sahəsində bakalavr dərəcəsi. Web development və proqramlaşdırma üzərində fokuslandım.',
      achievements: [
        'GPA: 3.8/4.0',
        'Final layihə: E-commerce platformu',
        'Web Development Club üzvü'
      ]
    }
  ];

  const categories = ["All", "Frontend", "Backend", "Database", "Tools"];

  const filteredSkills =
    activeSkillCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === activeSkillCategory);

  return (
    <div className="aboutPage">
      {/* Name Header */}
      <section className="nameHeader">
        <h1 className="animatedName">My About</h1>
      </section>

      {/* Quick Info */}
      <section className="quickInfo">
        <div className="infoContainer">
          <div className="infoCard">
            <MapPin size={20} />
            <div className="infoContent">
              <h4>Məkan</h4>
              <p>Bakı, Azərbaycan</p>
            </div>
          </div>

          <div className="infoCard">
            <Briefcase size={20} />
            <div className="infoContent">
              <h4>Status</h4>
              <p>Full-time Available</p>
            </div>
          </div>

          <div className="infoCard">
            <Calendar size={20} />
            <div className="infoContent">
              <h4>Yaş</h4>
              <p>25 yaş</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="skillsSection">
        <div className="container">
          <div className="sectionHeader">
            <h2>Texniki Bacarıqlar</h2>
            <p>İstifadə etdiyim əsas texnologiyalar və səviyyələr</p>
          </div>

          <div className="skillsFilter">
            {categories.map((category) => (
              <button
                key={category}
                className={`filterBtn ${
                  activeSkillCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveSkillCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="skillsGrid">
            {filteredSkills.map((skill, index) => (
              <div key={index} className="skillCard">
                <div className="skillTop">
                  <span className="skillName">{skill.name}</span>
                  <span className="skillPercent">{skill.level}%</span>
                </div>
                <div className="skillBarContainer">
                  <div
                    className="skillBar"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="skillTag">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="educationSection">
        <div className="container">
          <div className="sectionHeader">
            <h2>Education</h2>
            <p>Akademik təhsil</p>
          </div>

          <div className="educationList">
            {education.map((edu) => (
              <div key={edu.id} className="educationCard">
                <div className="educationHeader">
                  <div className="educationTop">
                    <div>
                      <h3>{edu.degree}</h3>
                      <p className="institution">{edu.institution}</p>
                      <span className="location">
                        <MapPin size={14} />
                        {edu.location}
                      </span>
                    </div>
                    <div className="educationYear">
                      <Calendar size={16} />
                      <span>{edu.year}</span>
                    </div>
                  </div>
                </div>
                <p className="educationDescription">{edu.description}</p>
                <div className="educationAchievements">
                  <h4>Highlights</h4>
                  <ul>
                    {edu.achievements.map((ach, i) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests */}
      <section className="interestsSection">
        <div className="container">
          <div className="sectionHeader">
            <h2>Maraqlarım</h2>
            <p>İşdən əlavə məni maraqlandıran sahələr</p>
          </div>

          <div className="interestsGrid">
            {interests.map((interest, index) => {
              const IconComponent = interest.icon;
              return (
                <div key={index} className="interestCard">
                  <IconComponent size={32} />
                  <h4>{interest.name}</h4>
                  <p>{interest.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
