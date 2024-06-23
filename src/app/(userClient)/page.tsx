import CarSearchForm from "@components/userClient/CarSearchForm";
import "@styles/client.css";
import React from "react";
import Segments from "@components/userClient/Segments";

const page = () => {
  return (
    <div className="flex flex-col relative">
      <div>
        <video
          src={require("../../public/assets/videos/bgVideo.mp4")}
          autoPlay
          muted
          loop
          className="object-contain w-full h-full rounded-b-3xl -z-10"
        ></video>
        <div className="flex absolute left-40 z-10" style={{ top: "13%" }}>
          <CarSearchForm />
        </div>
        <div
          className="flex flex-col items-end absolute right-8 text-white font-bold text-5xl justify-between h-44 pointer-events-none"
          style={{ top: "40%" }}
        >
          <h1 className="text-orange-100">Türkiyenin Dört Bir Yanında</h1>
          <h1 className="text-orange-200">Yola Çıkmanın En Kolay Yolu,</h1>
          <h1 className="text-orange-300">Uzun Süreli Konfor,</h1>
          <h1 className="text-orange-400">Uzun Dönem Kirala!</h1>
        </div>
      </div>
      <Segments />
    </div>
  );
};

export default page;
