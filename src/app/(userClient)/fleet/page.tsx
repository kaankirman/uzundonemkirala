"use client";
import React, { useEffect, useState } from "react";
import CarCard from "@components/userClient/elements/CarCard";
import { fetchCarModelsData } from "@utils/dataFetcher";
import DropdownMenu from "@components/userClient/elements/DropdownMenu";
import { CarModel } from "@utils/types";
import CarFilter from "@components/userClient/elements/CarFilter";
import { useSearchParams } from "next/navigation";

const page = () => {
  const searchParams = useSearchParams();
  const carSegment = searchParams.get("carSegment") ?? "";
  const [carModels, setCarModels] = useState<CarModel[]>([]);
  const [filteredModels, setFilteredModels] = useState<CarModel[]>([]);
  useEffect(() => {
    const fetchCarModels = async () => {
      const response = await fetchCarModelsData();
      setCarModels(response);
    };
    fetchCarModels();
  }, []);

  return (
    <div className="w-full h-full bg-gradient-to-b px-6 pt-32 pb-4 from-orange-50 to-orange-200">
      <CarFilter carModels={carModels} carSegment={carSegment} setFilteredModels={setFilteredModels} />
      <div
        className="flex flex-col px-4 py-4 h-5/6 w-full rounded-2xl shadow-lg overflow-y-scroll"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="grid grid-cols-2 gap-5">
          {filteredModels.map((car) => (
            <CarCard car={car} />
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
