import CarSearchForm from "@components/userClient/CarSearchForm";
import "@styles/main-page.css";
import React from "react";
import Segments from "@components/userClient/Segments";
import Transition from "@components/userClient/elements/Transition";
import VideoBg from "@components/userClient/elements/VideoBg";

const page = () => {
  return (
    <div className="main-page-container">
      <div>
        <VideoBg />
        <div className="search-form-container">
          <Transition duration={0.75}>
            <CarSearchForm />
          </Transition>
        </div>
        <div className="headline-container">
          <Transition duration={0.2}>
            <h1 className="headline-text headline-text-1">
              Türkiyenin Dört Bir Yanında
            </h1>
          </Transition>
          <Transition duration={0.6}>
            <h1 className="headline-text headline-text-2">
              Yola Çıkmanın En Kolay Yolu,
            </h1>
          </Transition>
          <Transition duration={1}>
            <h1 className="headline-text headline-text-3">
              Uzun Süreli Konfor,
            </h1>
          </Transition>
          <Transition duration={1.4}>
            <h1 className="headline-text headline-text-4">
              Uzun Dönem Kirala!
            </h1>
          </Transition>
        </div>
      </div>
      <Segments />
    </div>
  );
};

export default page;
