import React from "react";
import HeaderBtn from "./HeaderLinks"

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
        <HeaderBtn />
      </div>
    </header>
  );
}
