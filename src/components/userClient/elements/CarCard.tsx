import React, { useEffect, useState } from "react";
import { CarModel } from "@utils/types";

type CarCardProps = {
  car: CarModel;
  km?: string;
  rentalDuration?: string;
};

const CarCard = ({ car, km, rentalDuration }: CarCardProps) => {
  const [rentalPrice, setRentalPrice] = useState<number | null>(null);
  const roundToHigherTenth = async (value: number) => {
    console.log(value);
    return Math.round(value / 100) * 100;
  };

  useEffect(() => {
    const adjustRentalPrice = async () => {
      if (car.total_rental) {
        let multiplier = 1;
        let totalRentalPrice = parseInt(car.total_rental);
        switch (km) {
          case "3000":
            multiplier = 1.05;
            break;
          case "4000":
            multiplier = 1.1;
            break;
          case "5000":
            multiplier = 1.15;
            break;
          default:
            break;
        }
        totalRentalPrice *= multiplier;
        const round = await roundToHigherTenth(totalRentalPrice);
        setRentalPrice(round);
      }
    };
    adjustRentalPrice();
  }, [km]);

  return (
    <div className="relative w-full rounded-2xl h-52 bg-white shadow-lg mx-2 overflow-hidden border-2 border-black transition duration-300 hover:border-company-orange hover:shadow-company-orange">
      <div className="absolute inset-0 flex justify-center items-center">
        <img
          src={`https://uzundonemkirala.com/Files/img/Car-Images/${car.image_path}`}
          alt={`${car.brand} ${car.type} `}
          className="object-cover h-full w-full"
        />
      </div>
      <div className="absolute top-0 left-0 w-2/4 h-full bg-gradient-to-r from-black to-transparent"></div>
      <div className="absolute flex flex-col top-2 left-8">
        <h1 className="font-bold text-3xl text-company-orange mb-3">
          {`${car.brand} ${car.type} `}
        </h1>
        <h1 className="text-xl font-bold mb-3 text-white">Özellikler</h1>
        <p className="flex flex-col *:font-bold *:text-sm text-neutral-300">
          <span>Yakıt: {car.fuel}</span>
          <span>Vites: {car.transmission}</span>
          <span>Kişi: {car.chairs}</span>
          <span>Bagaj: {car.small_bags}</span>
        </p>
      </div>
      <div className="absolute top-0 right-0 w-2/4 h-full bg-gradient-to-l from-black to-transparent"></div>
      <div className="absolute flex flex-col top-2 right-8 items-end">
        <h1 className="text-xl font-bold mb-3 text-white">
          Kiralama Koşulları
        </h1>
        <p className="flex flex-col mb-5 *:font-bold *:text-sm text-neutral-300">
          <span>Sürücü Yaşı: {car.driver_age}</span>
          <span>Tecrübe: {car.driving_license_age}</span>
          {car.total_rental ? <span>Km: {km}</span> : null}
          {car.total_rental ? (
            <span>Kira Süresi: {rentalDuration} ay</span>
          ) : null}
        </p>
        {car.total_rental ? (
          <h1 className="text-3xl font-bold text-company-orange">
            {rentalPrice} {car.currency}
          </h1>
        ) : null}
      </div>
    </div>
  );
};

export default CarCard;
