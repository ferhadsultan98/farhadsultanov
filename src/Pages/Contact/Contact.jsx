// pages/Contact.jsx
import React, { useState } from 'react';
import { 
  Mail,
  MapPin,
  Phone,
  Send,
  Github,
  Linkedin,
  Twitter
} from 'lucide-react';
import './Contact.scss';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => setSubmitStatus(null), 3000);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sultanoworks@gmail.com',
      link: 'mailto:sultanoworks@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+994 55 525 41 93',
      link: 'tel:+994555254193'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Bakı, Azərbaycan',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      url: 'https://github.com/farhadsultanov'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/farhadsultanov'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      url: 'https://twitter.com/farhadsultanov'
    }
  ];

  return (
    <div className="contactPage">
      {/* Name Header */}
      <section className="nameHeader">
        <h1 className="animatedName">Get In Touch</h1>
      </section>

      {/* Contact Section */}
      <section className="contactSection">
        <div className="container">
          <div className="contactGrid">
            {/* Left Side - Info */}
            <div className="contactInfo">
              <div className="infoBlock">
                <h2>Let's Talk</h2>
                <p>Bir layihəniz var və ya sadəcə salam demək istəyirsiniz? Mənimlə əlaqə saxlayın.</p>
              </div>

              <div className="infoList">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon;
                  return (
                    <div key={index} className="infoItem">
                      <div className="infoIcon">
                        <IconComponent size={20} />
                      </div>
                      <div className="infoContent">
                        <h4>{info.label}</h4>
                        {info.link ? (
                          <a href={info.link}>{info.value}</a>
                        ) : (
                          <p>{info.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="socialLinks">
                <h3>Follow Me</h3>
                <div className="socialIcons">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="socialIcon"
                        aria-label={social.name}
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="contactForm">
              <form onSubmit={handleSubmit}>
                <div className="formGroup">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="What is this about?"
                  />
                </div>

                <div className="formGroup">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button 
                  type="submit" 
                  className="submitButton"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send size={18} />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="successMessage">
                    Mesajınız göndərildi! Tezliklə cavab verəcəyəm.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
