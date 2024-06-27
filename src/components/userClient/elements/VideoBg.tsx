"use client";
import React from "react";
import bgVideo from "@public/assets/videos/bgVideo.mp4";
import "@styles/bg-video.css";

const VideoBg = () => {
  return (
    <video autoPlay muted preload="metadata" loop className="video-container">
      <source src={bgVideo} type="video/mp4" />
    </video>
  );
};

export default VideoBg;
