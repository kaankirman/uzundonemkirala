"use client";
import React, { useEffect } from "react";
import CarCard from "@components/userClient/elements/CarCard";
import { fetchCarModelsData } from "@utils/dataFetcher";
import DropdownMenu from "./DropdownMenu";

const CarList = () => {
  const segmentOptions = [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" },
  ];
  const [selectedSegment, setSelectedSegment] = React.useState<number | null>(
    null
  );
  const [carModels, setCarModels] = React.useState([]);
  useEffect(() => {
    const fetchCarModels = async () => {
      const response = await fetchCarModelsData();
      setCarModels(response);
    };
    fetchCarModels();
  }, []);

  const handleDropdownSelect = (
    value: number,
    setter: React.Dispatch<React.SetStateAction<number | null>>
  ) => {
    setter(value);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-row justify-center">
        <div className="flex flex-col mb-2">
          <label className="font-bold  text-black mb-1">Kiralama Süresi</label>
          <DropdownMenu
            options={segmentOptions}
            currentOption={selectedSegment}
            onSelect={(value) =>
              handleDropdownSelect(value, setSelectedSegment)
            }
          />
        </div>
        <div className="flex flex-col mb-2">
          <label className="font-bold  text-black mb-1">Kiralama Süresi</label>
          <DropdownMenu
            options={segmentOptions}
            currentOption={selectedSegment}
            onSelect={(value) =>
              handleDropdownSelect(value, setSelectedSegment)
            }
          />
        </div>
        <div className="flex flex-col mb-2">
          <label className="font-bold  text-black mb-1">Kiralama Süresi</label>
          <DropdownMenu
            options={segmentOptions}
            currentOption={selectedSegment}
            onSelect={(value) =>
              handleDropdownSelect(value, setSelectedSegment)
            }
          />
        </div>
        <div className="flex flex-col mb-2">
          <label className="font-bold  text-black mb-1">Kiralama Süresi</label>
          <DropdownMenu
            options={segmentOptions}
            currentOption={selectedSegment}
            onSelect={(value) =>
              handleDropdownSelect(value, setSelectedSegment)
            }
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        {carModels.map((car) => (
          <CarCard car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
