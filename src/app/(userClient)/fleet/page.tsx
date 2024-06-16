import React from "react";
import carBg from "@public/assets/images/ecoBg.jpg";

const page = () => {
  return (
    <div className="w-full h-full bg-gradient-to-b px-6 pt-32 pb-4 from-orange-50 to-orange-200">
      <div className="flex flex-col px-4 py-4 h-full w-full rounded-2xl shadow-lg overflow-y-scroll">
        <div className="flex flex-row mb-4">
          <div className="relative w-full rounded-2xl h-52 bg-white shadow-lg mx-2 overflow-hidden">
            <div className="absolute inset-0 flex justify-center items-center">
              <img
                src={carBg.src}
                alt="Fiat Egea"
                className="object-cover h-full w-full"
              />
            </div>
            <div className="absolute top-0 left-0 w-2/4 h-full bg-gradient-to-r from-black to-transparent"></div>
            <div className="absolute flex flex-col top-2 left-8">
              <h1 className="font-bold text-3xl text-company-orange mb-3">
                Renault Clio
              </h1>
              <h1 className="text-xl font-bold mb-3 text-white">Özellikler</h1>
              <p className="flex flex-col *:font-bold *:text-sm text-neutral-300">
                <span>Yakıt:</span>
                <span>Vites:</span>
                <span>Kişi:</span>
                <span>Bagaj:</span>
              </p>
            </div>
            <div className="absolute top-0 right-0 w-2/4 h-full bg-gradient-to-l from-black to-transparent"></div>
            <div className="absolute flex flex-col top-2 right-8 items-end">
              <h1 className="text-xl font-bold mb-3 text-white">Kiralama Koşulları</h1>
              <p className="flex flex-col mb-5 *:font-bold *:text-sm text-neutral-300">
                <span>Sürücü Yaşı:</span>
                <span>Tecrübe:</span>
                <span>Km:</span>
                <span>Kira Süresi:</span>
              </p>
              <h1 className="text-3xl font-bold text-company-orange">
                20.250,00 TL
              </h1>
            </div>
          </div>
          <div className="w-full rounded-2xl h-52 bg-white shadow-lg mx-2"></div>
        </div>
        <div className="flex flex-row mb-4">
          <div className="w-full rounded-2xl h-52 bg-white shadow-lg mx-2"></div>
          <div className="w-full rounded-2xl h-52 bg-white shadow-lg mx-2"></div>
        </div>
        <div className="flex flex-row mb-4">
          <div className="w-full rounded-2xl h-52 bg-white shadow-lg mx-2"></div>
          <div className="w-full rounded-2xl h-52 bg-white shadow-lg mx-2"></div>
        </div>
        <div className="flex flex-row mb-4">
          <div className="w-full rounded-2xl h-52 bg-white shadow-lg mx-2"></div>
          <div className="w-full rounded-2xl h-52 bg-white shadow-lg mx-2"></div>
        </div>
        <div className="flex flex-row mb-4">
          <div className="w-full rounded-2xl h-52 bg-white shadow-lg mx-2"></div>
          <div className="w-full rounded-2xl h-52 bg-white shadow-lg mx-2"></div>
        </div>
        <div className="flex flex-row mb-4">
          <div className="w-full rounded-2xl h-52 bg-white shadow-lg mx-2"></div>
          <div className="w-full rounded-2xl h-52 bg-white shadow-lg mx-2"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
