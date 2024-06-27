import Link from "next/link";
import React from "react";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaPhoneVolume,
} from "react-icons/fa6";
import Image from "next/image";
import logoWText from "@public/assets/images/logoWithText.png";
import { RiCustomerService2Fill } from "react-icons/ri";
import "@styles/navigation-menu.css"; // import the css file

export default function NavigationMenu() {
  const year = new Date().getFullYear();

  return (
    <div className="navigation-container">
      <div className="navigation-top">
        <Image
          src={logoWText}
          height={250}
          width={250}
          className="navigation-logo"
          alt="background"
        />
        <div className="navigation-icons-container">
          <Link
            href="/"
            rel="noopener noreferrer"
            target="_blank"
            className="navigation-menu-link"
          >
            <FaInstagram
              size={24}
              className="navigation-icon"
            />
          </Link>
          <Link
            href="https://www.facebook.com/people/Uzun-D%C3%B6nem-Kirala/61558078094827/"
            rel="noopener noreferrer"
            target="_blank"
            className="navigation-menu-link"
          >
            <FaFacebook
              size={24}
              className="navigation-icon"
            />
          </Link>
        </div>
      </div>
      <div className="navigation-links-container">
        <div className="navigation-menu-option-container">
          <label className="navigation-menu-label">Kurumsal</label>
          <Link href="/" className="navigation-menu-link">
            Anasayfa
          </Link>
          <Link href="/about" className="navigation-menu-link">
            Hakkımızda
          </Link>
        </div>
        <div className="navigation-menu-option-container">
          <label className="navigation-menu-label">Araçlar</label>
          <Link href="/fleet" className="navigation-menu-link">
            Tüm Araçlarımız
          </Link>
        </div>

        <div className="contact-card">
          <div className="contact-icons">
            <FaWhatsapp size={48} className="contact-icon contact-icon-whatsapp" />
            <RiCustomerService2Fill size={48} className="contact-icon contact-icon-service" />
            <FaPhoneVolume size={48} className="contact-icon contact-icon-phone" />
          </div>
          <label className="contact-label">
            WhatsApp, Müşteri hizmetleri ve Rezervasyon Hattı{" "}
          </label>
          <p className="contact-number">+90 540 369 96 63</p>
        </div>
      </div>
      <div className="footer">
        <span className="footer-text">
          Uzun Dönem Kirala® {year}
        </span>
      </div>
    </div>
  );
}
