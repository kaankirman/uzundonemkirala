"use client";
import "@styles/client.css";
import "@styles/datepicker.css";
import Link from "next/link";
import Image from "next/image";
import logo from "@public/assets/images/logo.png";
import React, { useEffect } from "react";
import { fetchCarModelsData } from "@utils/dataFetcher";

const Nav: React.FC = () => {
  useEffect(() => {
    const fetchCarModels = async () => {
      const response = await fetchCarModelsData();
      console.log(response);
    };
    fetchCarModels();
  }, []);
  return (
    <div className="absolute bg-black rounded-b-xl bg-opacity-30 top-0 flex flex-col w-full h-auto z-50">
      <nav className="navbar">
        <div className="flex flex-row items-center">
          <Link href="/">
            <Image
              className="logo"
              src={logo}
              width={70}
              height={70}
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex flex-row justify-center items-center">
          <Link className="navbar-options" href="/">
            ANASAYFA
          </Link>
          <Link className="navbar-options" href="/terms">
            KİRALAMA ŞARTLARI
          </Link>
          <Link className="navbar-options" href="#">
            ARAÇLARIMIZ
          </Link>
          <Link className="navbar-options" href="/about">
            HAKKIMIZDA
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
