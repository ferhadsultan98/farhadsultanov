// pages/Home.jsx
import React from 'react';
import { ArrowUpRight, Mail, Download, MapPin } from 'lucide-react';
import GitHubCalendar from 'react-github-calendar';
import ProfileImage from '../../../public/assets/profiltransparent.png'
import './Home.scss';

const Home = () => {
  return (
    <div className="home">
      {/* Main Content - Larger */}
      <div className="homeMainContent">
        {/* Left: About */}
        <div className="leftSection">
          <div className="aboutCard">
            <h1 className="name">Farhad Sultanov</h1>
            <p className="role">Frontend Developer</p>
            
            <div className="location">
              <MapPin size={16} />
              <span>Baku, Azerbaijan</span>
            </div>

            <p className="bio">
              Yaradıcı və müasir web tətbiqlər hazırlayıram. React, TypeScript və 
              CSS texnologiyaları ilə mükəmməl istifadəçi təcrübələri yaradıram.
            </p>

            <div className="availability">
              <div className="indicator"></div>
              <span>Layihələr üçün əlçatandır</span>
            </div>

            <div className="actions">
            
              <a href="mailto:hello@farhadsultanov.com" className="secondaryBtn">
                <Mail size={16} />
              </a>
              <button className="tertiaryBtn">
                <Download size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Large Image Placeholder */}
        <div className="rightSection">
          <div className="imageSection">
            <img src={ProfileImage} alt="ProfileImage" />
          </div>
        </div>
      </div>

      {/* GitHub Calendar - Wider */}
      <div className="githubSection">
        <div className="githubHeader">
          <h2>GitHub Contributions</h2>
          <a href="https://github.com/ferhadsultan98" target="_blank" rel="noopener noreferrer">
            @ferhadsultan98
            <ArrowUpRight size={14} />
          </a>
        </div>
        
        <div className="githubCalendar">
          <GitHubCalendar
            username="ferhadsultan98"
            colorScheme="dark"
            theme={{
              dark: [
                'rgba(255, 255, 255, 0.06)',
                'rgba(64, 224, 208, 0.2)',
                'rgba(64, 224, 208, 0.4)',
                'rgba(64, 224, 208, 0.7)',
                'rgba(64, 224, 208, 1)'
              ]
            }}
            fontSize={11}
            blockSize={11}
            blockMargin={3}
            hideColorLegend={true}
            hideTotalCount={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
