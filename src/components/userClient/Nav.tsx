"use client";
import "@styles/nav.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@public/assets/images/logo.png";
import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { IoMenu } from "react-icons/io5";

const Nav: React.FC = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  const [showOnMobile, setShowOnMobile] = React.useState(false);
  const [dropdown, setDropdown] = React.useState(false);
  useEffect(() => {
    setShowOnMobile(isMobile);
  }, [isMobile]);

  const handleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="navbar-container">
      <nav className="navbar">
        <div className="navbar-logo">
          <Link href="/">
            <Image
              src={logo}
              width={showOnMobile ? 40 : 70}
              height={showOnMobile ? 40 : 70}
              alt="logo"
            />
          </Link>
        </div>
        {showOnMobile && (
          <IoMenu className="menu-icon" onClick={handleDropdown} />
        )}
        {dropdown && showOnMobile && (
          <ul className="navbar-options-container">
            <Link
              className="navbar-options"
              href="/"
              onClick={() => setDropdown(false)}
            >
              ANASAYFA
            </Link>
            <Link
              className="navbar-options"
              href="/fleet"
              onClick={() => setDropdown(false)}
            >
              ARAÇLARIMIZ
            </Link>
            <Link
              className="navbar-options"
              href="/about"
              onClick={() => setDropdown(false)}
            >
              HAKKIMIZDA
            </Link>
          </ul>
        )}
        {!showOnMobile && (
          <ul className="navbar-options-container">
            <Link className="navbar-options" href="/">
              ANASAYFA
            </Link>
            <Link className="navbar-options" href="/fleet">
              ARAÇLARIMIZ
            </Link>
            <Link className="navbar-options" href="/about">
              HAKKIMIZDA
            </Link>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Nav;
