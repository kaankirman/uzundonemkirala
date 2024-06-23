import React from "react";
import luxuryBg from "@public/assets/images/luxBg.jpg";
import ecoBg from "@public/assets/images/ecoBg.jpg";
import highBg from "@public/assets/images/highBg.jpg";
import midBg from "@public/assets/images/midBg.jpg";
import Link from "next/link";

const Segments = () => {
  return (
    <div className="flex flex-col bg-gradient-to-b from-white to-orange-200">
      <div className="flex flex-row px-8 py-10">
        <div className="flex flex-col relative border border-orange-400 h-56 w-full mx-10 rounded-xl overflow-hidden">
          <img
            src={luxuryBg.src}
            className="object-cover w-full h-full absolute"
          />
          <div className="flex flex-col items-end absolute right-10 bottom-10 z-20">
            <h1 className="text-2xl font-bold text-orange-400">32.250,00 TL</h1>
            <h1 className="text-sm font-bold text-white">başlayan fiyatlar</h1>
          </div>
          <div className="absolute flex flex-col top-0 left-0 z-10 w-full h-full bg-gradient-to-b from-transparent to-black opacity-100 ">
            <div className="absolute bottom-10 left-10">
              <h1 className="text-5xl font-bold text-orange-400 mb-1">LÜKS</h1>
              <h1 className="text-xl text-white mb-6">
                Lüks araçlarımıza göz atın!
              </h1>
              <Link
                className="text-orange-400 text-sm shadow-lg px-5 p-2 rounded-xl font-extrabold transition duration-300 border border-orange-400 hover:text-white hover:bg-orange-400"
                href={{
                  pathname: "/fleet",
                  query: {
                    carSegment: "Lüks",
                  },
                }}
              >
                Gözat
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col relative border border-orange-400 h-56 w-full mx-10 rounded-xl overflow-hidden">
          <img
            src={highBg.src}
            className="object-cover w-full h-full absolute"
          />
          <div className="flex flex-col items-end absolute right-10 bottom-10 z-20">
            <h1 className="text-2xl font-bold text-orange-400">26.300,00 TL</h1>
            <h1 className="text-sm font-bold text-white">başlayan fiyatlar</h1>
          </div>
          <div className="absolute flex flex-col top-0 left-0 z-10 w-full h-full bg-gradient-to-b from-transparent to-black opacity-100 ">
            <div className="absolute bottom-10 left-10">
              <h1 className="text-5xl font-bold text-orange-400 mb-1">ÜST</h1>
              <h1 className="text-xl text-white mb-6">
                Üst segment araçlarımıza göz atın!
              </h1>
              <Link
                className="text-orange-400 text-sm shadow-lg px-5 p-2 rounded-xl font-extrabold transition duration-300 border border-orange-400 hover:text-white hover:bg-orange-400"
                href={{
                  pathname: "/fleet",
                  query: {
                    carSegment: "Üst",
                  },
                }}
              >
                Gözat
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row px-8 py-10">
        <div className="flex flex-col relative border border-orange-400 h-56 w-full mx-10 rounded-xl overflow-hidden">
          <img
            src={midBg.src}
            className="object-cover w-full h-full absolute"
          />
          <div className="flex flex-col items-end absolute right-10 bottom-10 z-20">
            <h1 className="text-2xl font-bold text-orange-400">21.500,00 TL</h1>
            <h1 className="text-sm font-bold text-white">başlayan fiyatlar</h1>
          </div>
          <div className="absolute flex flex-col top-0 left-0 z-10 w-full h-full bg-gradient-to-b from-transparent to-black opacity-100 ">
            <div className="absolute bottom-10 left-10">
              <h1 className="text-5xl font-bold text-orange-400 mb-1">ORTA</h1>
              <h1 className="text-xl text-white mb-6">
                Orta segment araçlarımıza göz atın!
              </h1>
              <Link
                className="text-orange-400 text-sm shadow-lg px-5 p-2 rounded-xl font-extrabold transition duration-300 border border-orange-400 hover:text-white hover:bg-orange-400"
                href={{
                  pathname: "/fleet",
                  query: {
                    carSegment: "Orta",
                  },
                }}
              >
                Gözat
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col relative border border-orange-400 h-56 w-full mx-10 rounded-xl overflow-hidden">
          <img
            src={ecoBg.src}
            className="object-cover w-full h-full absolute"
          />
          <div className="flex flex-col items-end absolute right-10 bottom-10 z-20">
            <h1 className="text-2xl font-bold text-orange-400">20.250,00 TL</h1>
            <h1 className="text-sm font-bold text-white">başlayan fiyatlar</h1>
          </div>
          <div className="absolute flex flex-col top-0 left-0 z-10 w-full h-full bg-gradient-to-b from-transparent to-black opacity-100 ">
            <div className="absolute bottom-10 left-10">
              <h1 className="text-5xl font-bold text-orange-400 mb-1">
                EKONOMİK
              </h1>
              <h1 className="text-xl text-white mb-6">
                Ekonomik araçlarımıza göz atın!
              </h1>
              <Link
                className="text-orange-400 text-sm shadow-lg px-5 p-2 rounded-xl font-extrabold transition duration-300 border border-orange-400 hover:text-white hover:bg-orange-400"
                href={{
                  pathname: "/fleet",
                  query: {
                    carSegment: "Ekonomik",
                  },
                }}
              >
                Gözat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Segments;
