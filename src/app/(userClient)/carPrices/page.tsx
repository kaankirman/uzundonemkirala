"use client";
import React, { useEffect, useState } from "react";
import CarCard from "@components/userClient/elements/CarCard";
import { useSearchParams } from "next/navigation";
import { CarModel } from "@utils/types";
import CarFilter from "@components/userClient/elements/CarFilter";

const page = () => {
  const searchParams = useSearchParams();
  const pickupDate = searchParams.get("pickupDate") ?? "";
  const pickupTime = searchParams.get("pickupTime") ?? "";
  const rentalDuration = searchParams.get("rentalDuration") ?? "";
  const km = searchParams.get("km") ?? "";
  const currency = searchParams.get("currency") ?? "";
  const [carModels, setCarModels] = useState<CarModel[]>([]);
  const [filteredModels, setFilteredModels] = useState<CarModel[]>([]);
  useEffect(() => {
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

      console.log(response);
      const data = await response.json();
      console.log(data);
      setCarModels(data);
    };
    fetchCarModels();
  }, []);

  return (
    <div className="w-full h-full bg-gradient-to-b px-6 pt-32 pb-4 from-orange-50 to-orange-200">
      <CarFilter carModels={carModels} setFilteredModels={setFilteredModels} />
      <div
        className="flex flex-col px-4 py-4 h-5/6 w-full rounded-2xl shadow-lg overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="grid grid-cols-2 gap-5">
          {filteredModels.map((car) => (
            <CarCard rentalDuration={rentalDuration} km={km} car={car} />
          ))}
        </div>
        {filteredModels.length === 0 ? (
          <div className="flex justify-center items-center h-1/2">
            <h1 className="text-2xl font-bold text-gray-500">
              Aradığınız Kriterlere Uygun Araç Bulunamadı.
            </h1>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default page;
