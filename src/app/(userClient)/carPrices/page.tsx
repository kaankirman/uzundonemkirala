"use client";
import "@styles/fleet-page.css";
import React, { useEffect, useState } from "react";
import CarCard from "@components/userClient/elements/CarCard";
import { useSearchParams } from "next/navigation";
import { CarModel } from "@utils/types";
import CarFilter from "@components/userClient/elements/CarFilter";
import { Loading } from "notiflix";

const page = () => {
  const searchParams = useSearchParams();
  const pickupDate = searchParams.get("pickupDate") ?? "";
  const pickupTime = searchParams.get("pickupTime") ?? "";
  const rentalDuration = searchParams.get("rentalDuration") ?? "";
  const km = searchParams.get("km") ?? "";
  const currency = searchParams.get("currency") ?? "";
  const searchData = {
    pickupDate: pickupDate,
    pickupTime: pickupTime,
    rentalDuration: rentalDuration,
    km: km,
  };
  const [carModels, setCarModels] = useState<CarModel[]>([]);
  const [filteredModels, setFilteredModels] = useState<CarModel[]>([]);
  useEffect(() => {
    Loading.standard();
    const fetchCarModels = async () => {
      const response = await fetch(`/api/turev/carPrices`, {
        method: "POST",
        body: JSON.stringify({
          pickupDate: pickupDate,
          pickupTime: pickupTime,
          rentalDuration: rentalDuration,
          currency: currency,
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
      <CarFilter carModels={carModels} setFilteredModels={setFilteredModels} />
      <div
        className="car-filter-page-container"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="car-grid">
          {filteredModels.map((car) => (
            <CarCard key={car.image_path} searchData={searchData} car={car} />
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
