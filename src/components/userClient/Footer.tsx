import React from "react";
import NavigationMenu from "@components/userClient/NavigationMenu";
import cityBg from "@public/assets/images/city-bg.png";
import "@styles/footer.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-navigation">
          <NavigationMenu />
        </div>
      </div>
      <img
        className="footer-background"
        src={cityBg.src}
        alt="City Background"
      />
    </div>
  );
}
