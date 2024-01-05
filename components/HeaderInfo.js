import React from "react";

export default function HeaderInfo() {
  return (
    <header className="header">
      <img src="./image/avatar.png" alt="Profile photo" />
      <div className="header-info">
        <h1>Vladislav Burhovetskiy</h1>
        <h3>Frontend Developer</h3>
        <a href="https://vladislav-burhovetskiy.github.io/portfolio/">
          <p>portfolio.website</p>
        </a>
        <div className="header-btn-container">
          <a href="mailto: mylivladislav@gmail.com" className="header-link">
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/vladislav-burhovetskiy-4ab264245/"
            className="header-link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </header>
  );
}
