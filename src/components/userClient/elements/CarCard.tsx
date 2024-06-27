import React, { useEffect, useState } from "react";
import { CarModel, SearchData } from "@utils/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Transition from "./Transition";
import "@styles/car-card.css"; // Import the css file

type CarCardProps = {
  car: CarModel;
  searchData?: SearchData;
};

const CarCard = ({ car, searchData }: CarCardProps) => {
  const path = usePathname();
  const [rentalPrice, setRentalPrice] = useState<number | null>(null);

  const roundToHigherTenth = async (value: number) => {
    return Math.round(value / 100) * 100;
  };

  useEffect(() => {
    const adjustRentalPrice = async () => {
      if (car.total_rental) {
        let multiplier = 1;
        let totalRentalPrice = parseInt(car.total_rental);
        switch (searchData?.km) {
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
  }, [searchData?.km]);

  return (
    <Transition duration={0.5}>
      <div className="car-card-container">
        {path.startsWith("/carPrices") && (
          <Link
            className="car-card-link"
            title="Rezervasyon Yap"
            href={{
              pathname: "/carPrices/form",
              query: {
                searchData: JSON.stringify(searchData),
                car: JSON.stringify(car),
              },
            }}
          ></Link>
        )}
        <div className="car-card-image-container">
          <img
            src={`https://uzundonemkirala.com/Files/img/Car-Images/${car.image_path}`}
            alt={`${car.brand} ${car.type}`}
            className="car-card-image"
          />
        </div>
        <div className="car-card-gradient-left"></div>
        <div className="car-card-details-left">
          <h1 className="car-card-title">{`${car.brand} ${car.type}`}</h1>
          <h1 className="car-card-subtitle">Özellikler</h1>
          <p className="car-card-features">
            <span>Yakıt: {car.fuel}</span>
            <span>Vites: {car.transmission}</span>
            <span>Kişi: {car.chairs}</span>
            <span>Bagaj: {car.small_bags}</span>
          </p>
        </div>
        <div className="car-card-gradient-right"></div>
        <div className="car-card-details-right">
          <h1 className="car-card-rental-conditions">Koşullar</h1>
          <p className="car-card-conditions">
            <span>Sürücü Yaşı: {car.driver_age}</span>
            <span>Tecrübe: {car.driving_license_age}</span>
            {path.startsWith("/carPrices") && <span>Km: {searchData?.km}</span>}
            {path.startsWith("/carPrices") && (
              <span>Kira Süresi: {searchData?.rentalDuration} ay</span>
            )}
          </p>
          {path.startsWith("/carPrices") && (
            <h1 className="car-card-price">
              {rentalPrice} {car.currency}{" "}
              <span className="car-card-price-sub">+ KDV</span>
            </h1>
          )}
        </div>
      </div>
    </Transition>
  );
};

export default CarCard;
