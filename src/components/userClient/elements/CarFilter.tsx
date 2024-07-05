import { CarModel } from "@utils/types";
import React, { useEffect, useState } from "react";
import DropdownMenu from "./DropdownMenu";
import Transition from "./Transition";
import "@styles/car-filter.css"; // import the css file

interface CarFilterProps {
  carSegment?: string;
  carModels: CarModel[];
  setFilteredModels: (models: CarModel[]) => void;
}

const CarFilter = ({
  carSegment,
  carModels,
  setFilteredModels,
}: CarFilterProps) => {
  const [selectedSegment, setSelectedSegment] = useState<string | null>(null);
  const [selectedFuelType, setSelectedFuelType] = useState<string | null>(null);
  const [selectedGearType, setSelectedGearType] = useState<string | null>(null);
  const [selectedPersonCount, setSelectedPersonCount] = useState<string | null>(
    null
  );
  const [segmentOptions, setSegmentOptions] = useState<string[]>([]);
  const [fuelTypes, setFuelTypes] = useState<string[]>([]);
  const [gearTypes, setGearTypes] = useState<string[]>([]);
  const [personCount, setPersonCount] = useState<string[]>([]);

  useEffect(() => {
    const getUniqueGroupStrValues = (models: CarModel[]): string[] => {
      const groupStrSet = new Set(models.map((model) => model.group_str));
      return Array.from(groupStrSet);
    };
    const getUniqueFuelTypeValues = (models: CarModel[]): string[] => {
      const fuelTypeSet = new Set(models.map((model) => model.fuel));
      return Array.from(fuelTypeSet);
    };
    const getUniqueGearTypeValues = (models: CarModel[]): string[] => {
      const gearTypeSet = new Set(models.map((model) => model.transmission));
      return Array.from(gearTypeSet);
    };
    const getUniquePersonCountValues = (models: CarModel[]): string[] => {
      const personCountSet = new Set(models.map((model) => model.chairs));
      return Array.from(personCountSet);
    };
    setFuelTypes(getUniqueFuelTypeValues(carModels));
    setGearTypes(getUniqueGearTypeValues(carModels));
    setPersonCount(getUniquePersonCountValues(carModels));
    setSegmentOptions(getUniqueGroupStrValues(carModels));
    if (carSegment) {
      setSelectedSegment(carSegment);
    }
  }, [carModels]);

  useEffect(() => {
    let data = carModels;
    if (selectedFuelType) {
      data = data.filter((model) => model.fuel === selectedFuelType);
    }
    if (selectedGearType) {
      data = data.filter((model) => model.transmission === selectedGearType);
    }
    if (selectedPersonCount) {
      data = data.filter((model) => model.chairs === selectedPersonCount);
    }
    if (selectedSegment) {
      data = data.filter((model) => model.group_str === selectedSegment);
      
    }
    data.sort((a, b) => parseFloat(a.total_rental!) - parseFloat(b.total_rental!));
    setFilteredModels(data);
  }, [
    selectedSegment,
    selectedFuelType,
    selectedGearType,
    selectedPersonCount,
    carModels,
  ]);

  const handleDropdownSelect = (
    value: any,
    setter: React.Dispatch<React.SetStateAction<string | null>>
  ) => {
    setter(value);
  };

  const handleClearFilter = () => {
    setSelectedSegment("");
    setSelectedFuelType("");
    setSelectedGearType("");
    setSelectedPersonCount("");
  };

  return (
    <div className="car-filter-container">
      <Transition duration={0.3}>
        <div className="car-filter-column">
          <label className="car-filter-label">Segment</label>
          <DropdownMenu
            options={segmentOptions.map((option) => ({
              id: option,
              name: option,
            }))}
            currentOption={selectedSegment}
            onSelect={(value) =>
              handleDropdownSelect(value, setSelectedSegment)
            }
          />
        </div>
      </Transition>
      <Transition duration={0.5}>
        <div className="car-filter-column">
          <label className="car-filter-label">Yakıt Türü</label>
          <DropdownMenu
            options={fuelTypes.map((option) => ({
              id: option,
              name: option,
            }))}
            currentOption={selectedFuelType}
            onSelect={(value) =>
              handleDropdownSelect(value, setSelectedFuelType)
            }
          />
        </div>
      </Transition>
      <Transition duration={0.7}>
        <div className="car-filter-column">
          <label className="car-filter-label">Vites Türü</label>
          <DropdownMenu
            options={gearTypes.map((option) => ({
              id: option,
              name: option,
            }))}
            currentOption={selectedGearType}
            onSelect={(value) =>
              handleDropdownSelect(value, setSelectedGearType)
            }
          />
        </div>
      </Transition>
      <Transition duration={0.9}>
        <div className="car-filter-column">
          <label className="car-filter-label">Kişi Sayısı</label>
          <DropdownMenu
            options={personCount.map((option) => ({
              id: option,
              name: option,
            }))}
            currentOption={selectedPersonCount}
            onSelect={(value) =>
              handleDropdownSelect(value, setSelectedPersonCount)
            }
          />
        </div>
      </Transition>
      <Transition duration={1.1}>
        <button className="clear-filter-button" onClick={handleClearFilter}>
          Temizle
        </button>
      </Transition>
    </div>
  );
};

export default CarFilter;
