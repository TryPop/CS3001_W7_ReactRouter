import React from "react";

const Home = () => {
  return (
    <div className="header">
      <div className="header-row">
        <div className="left-info">
          <h1>Saran Shankar</h1>
          <div className="social-links">
            <a href="https://linkedin.com/in/rsarans186">
              linkedin.com/in/rsarans186
            </a>
            <span className="dot">•</span>
            <a href="https://github.com/try3d">github.com/try3d</a>
          </div>
        </div>
        <div className="contact-info">
          <div>
            Email:{" "}
            <a href="mailto:rsarans186@gmail.com">rsarans186@gmail.com</a>
          </div>
          <div>
            Mobile: <a href="tel:+917845911685">+91 78459 11865</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

