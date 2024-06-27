import React from "react";
import luxuryBg from "@public/assets/images/luxBg.jpg";
import ecoBg from "@public/assets/images/ecoBg.jpg";
import highBg from "@public/assets/images/highBg.jpg";
import midBg from "@public/assets/images/midBg.jpg";
import Link from "next/link";
import "@styles/segments.css";

const Segments = () => {
  return (
    <div className="segment-container">
      <div className="segment-row">
        <div className="segment-card">
          <img src={luxuryBg.src} className="segment-image" />
          <div className="segment-price-container">
            <h1 className="segment-price">32.250,00 TL</h1>
            <h1 className="segment-price-desc">başlayan fiyatlar</h1>
          </div>
          <div className="segment-gradient-overlay">
            <div className="segment-text-container">
              <h1 className="segment-title">LÜKS</h1>
              <h1 className="segment-desc">Lüks araçlarımıza göz atın!</h1>
              <Link
                className="segment-link"
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
        <div className="segment-card">
          <img src={highBg.src} className="segment-image" />
          <div className="segment-price-container">
            <h1 className="segment-price">26.300,00 TL</h1>
            <h1 className="segment-price-desc">başlayan fiyatlar</h1>
          </div>
          <div className="segment-gradient-overlay">
            <div className="segment-text-container">
              <h1 className="segment-title">ÜST</h1>
              <h1 className="segment-desc">
                Üst segment araçlarımıza göz atın!
              </h1>
              <Link
                className="segment-link"
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
      <div className="segment-row">
        <div className="segment-card">
          <img src={midBg.src} className="segment-image" />
          <div className="segment-price-container">
            <h1 className="segment-price">21.500,00 TL</h1>
            <h1 className="segment-price-desc">başlayan fiyatlar</h1>
          </div>
          <div className="segment-gradient-overlay">
            <div className="segment-text-container">
              <h1 className="segment-title">ORTA</h1>
              <h1 className="segment-desc">
                Orta segment araçlarımıza göz atın!
              </h1>
              <Link
                className="segment-link"
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
        <div className="segment-card">
          <img src={ecoBg.src} className="segment-image" />
          <div className="segment-price-container">
            <h1 className="segment-price">20.250,00 TL</h1>
            <h1 className="segment-price-desc">başlayan fiyatlar</h1>
          </div>
          <div className="segment-gradient-overlay">
            <div className="segment-text-container">
              <h1 className="segment-title">EKONOMİK</h1>
              <h1 className="segment-desc">Ekonomik araçlarımıza göz atın!</h1>
              <Link
                className="segment-link"
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
