import React from "react";
import HeaderInfo from "./components/HeaderInfo.js";
import Main from "./components/main.js";
import FooterLinks from "./components/FooterLinks.js";

export default function App() {
  return (
    <div>
      <HeaderInfo />
      <Main />
      <FooterLinks />
    </div>
  );
}
