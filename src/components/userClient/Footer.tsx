import React from "react";
import NavigationMenu from "@components/userClient/NavigationMenu";
import cityBg from "@public/assets/images/city-bg.png"
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="relative flex flex-col bg-gradient-to-b from-orange-200 to-black">
      <div className="flex flex-col z-10">
        <div className="flex flex-col px-64 py-4">
          <NavigationMenu />
        </div>
      </div>
      <img
        className="absolute bottom-0 left-0 z-0 rounded-3xl object-cover opacity-10 w-screen "
        src={cityBg.src}
      />
    </div>
  );
}
