"use client";

import React, { useEffect, useState } from "react";
import CarCard from "@components/userClient/elements/CarCard";
import { CarModel } from "@utils/types";
import CarFilter from "@components/userClient/elements/CarFilter";
import { useSearchParams } from "next/navigation";
import { Loading } from "notiflix";
import { DateObject } from "react-multi-date-picker";
import "@styles/fleet-page.css";

const page = () => {
  const searchParams = useSearchParams();
  const carSegment = searchParams.get("carSegment") ?? "";
  const minDate = new DateObject().add(1, "day");

  const [carModels, setCarModels] = useState<CarModel[]>([]);
  const [filteredModels, setFilteredModels] = useState<CarModel[]>([]);
  useEffect(() => {
    Loading.standard();
    const fetchCarModels = async () => {
      const response = await fetch(`/api/turev/carPrices`, {
        method: "POST",
        body: JSON.stringify({
          pickupDate: minDate.format("DD-MM-YYYY"),
          pickupTime: "18:00",
          rentalDuration: "1",
          currency: "TL",
        }),
      });

      const data = await response.json();
      setCarModels(data);
    };
    fetchCarModels();
  }, []);

  useEffect(() => {
    Loading.remove();
  }, [filteredModels]);

  return (
    <div className="fleet-page-container">
      <CarFilter
        carModels={carModels}
        carSegment={carSegment}
        setFilteredModels={setFilteredModels}
      />
      <div
        className="car-filter-page-container"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="car-grid">
          {filteredModels.map((car) => (
            <CarCard car={car} />
          ))}
        </div>
        {filteredModels.length === 0 ? (
          <div className="no-cars-message">
            <h1 className="no-cars-text">
              Aradığınız Kriterlere Uygun Araç Bulunamadı.
            </h1>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default page;
