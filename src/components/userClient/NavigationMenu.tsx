"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {
  FaInstagram,
  FaFacebook,
  FaXTwitter,
  FaWhatsapp,
  FaPhoneVolume,
} from "react-icons/fa6";
import Image from "next/image";
import logoWText from "@public/assets/images/logoWithText.png";
import { RiCustomerService2Fill } from "react-icons/ri";

export default function NavigationMenu() {
  const year = new Date().getFullYear();

  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-row justify-between mb-12">
        <Image
          src={logoWText}
          height={250}
          width={250}
          objectFit="cover"
          alt="background"
        />
        <div className="flex flex-row items-center">
          <Link
            href="/"
            rel="noopener noreferrer"
            target="_blank"
            className="navigation-menu-link"
          >
            <FaInstagram
              size={24}
              className="mx-2 text-orange-400 transition duration-300 hover:text-white"
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
              className="mx-2 text-orange-400 transition duration-300 hover:text-white"
            />
          </Link>
        </div>
      </div>
      <div className="flex flex-row justify-between mb-12 h-fit ml-16">
        <div className="navigation-menu-option-container">
          <label className="navigation-menu-label">Kurumsal</label>
          <Link href="/" className="navigation-menu-link">
            Hakkımızda
          </Link>
          <Link href="/" className="navigation-menu-link">
            Kiralama Şartları
          </Link>
          <Link href="/" className="navigation-menu-link">
            İletişim
          </Link>
        </div>
        <div className="navigation-menu-option-container">
          <label className="navigation-menu-label">Araçlar</label>
          <Link href="/" className="navigation-menu-link">
            Tüm Araçlarımız
          </Link>
        </div>

        <div className="flex flex-col items-center shadow-xl mr-16 rounded-2xl bg-orange-400 px-7 py-4">
          <div className="flex flex-row mb-4">
            <FaWhatsapp size={48} className="text-green-500 mx-3" />
            <RiCustomerService2Fill size={48} className="text-white mx-3" />
            <FaPhoneVolume size={48} className="text-blue-500 mx-3" />
          </div>
          <label className="font-extrabold text-md mb-3">
            WhatsApp, Müşteri hizmetleri ve Rezervasyon Hattı{" "}
          </label>
          <p className="text-lg">+90 540 369 96 63</p>
        </div>
      </div>
      <div className="flex flex-row self-end">
        <span className="self-end text-orange-400">
          Uzun Dönem Kirala® {year}
        </span>
      </div>
    </div>
  );
}
