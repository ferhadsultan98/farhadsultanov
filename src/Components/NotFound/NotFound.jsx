// pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';
import './NotFound.scss';

const NotFound = () => {
  return (
    <div className="notFoundPage">
      <div className="container">
        <div className="errorContent">
          <div className="errorCode">
            <span className="number">4</span>
            <span className="number">0</span>
            <span className="number">4</span>
          </div>

          <h1 className="errorTitle">Page Not Found</h1>
          <p className="errorMessage">
            Axtardığınız səhifə mövcud deyil və ya köçürülüb.
          </p>

          <div className="errorActions">
            <Link to="/" className="primaryButton">
              <Home size={18} />
              <span>Back to Home</span>
            </Link>
            <button onClick={() => window.history.back()} className="secondaryButton">
              <ArrowLeft size={18} />
              <span>Go Back</span>
            </button>
          </div>

       
        </div>
      </div>
    </div>
  );
};

export default NotFound;
