"use client";
import React, { useEffect, useState } from "react";
import luxuryBg from "@public/assets/images/luxBg.jpg";
import ecoBg from "@public/assets/images/ecoBg.jpg";
import highBg from "@public/assets/images/highBg.jpg";
import midBg from "@public/assets/images/midBg.jpg";
import Link from "next/link";
import "@styles/segments.css";
import { DateObject } from "react-multi-date-picker";
import { CarModel } from "@utils/types";
import { Loading } from "notiflix";

const Segments = () => {
  const minDate = new DateObject().add(1, "day");
  const [carModels, setCarModels] = useState<CarModel[]>([]);
  const [lowestRentalPerGroup, setLowestRentalPerGroup] = useState<CarModel[]>(
    []
  );
  const [ust, setUst] = useState<number | null>(null);
  const [orta, setOrta] = useState<number | null>(null);
  const [ekonomik, setEkonomik] = useState<number | null>(null);
  const [luks, setLuks] = useState<number | null>(null);

  const roundToHigherTenth = async (value: number) => {
    return Math.round(value / 100) * 100;
  };

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
    const desiredGroups = ["Lüks", "Orta", "Ekonomik", "Üst"];

    const filteredCarModels = carModels.filter((car) =>
      desiredGroups.includes(car.group_str)
    );

    const lowestRentalPerGroup = desiredGroups.map((group) => {
      const carsInGroup = filteredCarModels.filter(
        (car) => car.group_str === group
      );
      if (carsInGroup.length === 0) return null;

      return carsInGroup.reduce((lowest, car) => {
        const carTotalRental = parseFloat(car.total_rental || "Infinity");
        const lowestTotalRental = parseFloat(lowest.total_rental || "Infinity");
        return carTotalRental < lowestTotalRental ? car : lowest;
      });
    });

    const result = lowestRentalPerGroup.filter(
      (car): car is CarModel => car !== null
    );
    setLowestRentalPerGroup(result);
    Loading.remove();
  }, [carModels]);

  useEffect(() => {
    const setPrices = async () => {
      if (lowestRentalPerGroup.length > 3) {
        setLuks(
          await roundToHigherTenth(
            parseInt(lowestRentalPerGroup[0].total_rental!)
          )
        );
        setOrta(
          await roundToHigherTenth(
            parseInt(lowestRentalPerGroup[1].total_rental!)
          )
        );
        setEkonomik(
          await roundToHigherTenth(
            parseInt(lowestRentalPerGroup[2].total_rental!)
          )
        );
        setUst(
          await roundToHigherTenth(
            parseInt(lowestRentalPerGroup[3].total_rental!)
          )
        );
      }
    };
    setPrices();
  }, [lowestRentalPerGroup]);

  return (
    <div className="segment-container">
      <div className="segment-row">
        <div className="segment-card">
          <img src={luxuryBg.src} className="segment-image" />
          <div className="segment-price-container">
            {luks ? <h1 className="segment-price">{luks} TL + KDV</h1> : null}
            <h1 className="segment-price-desc">başlayan fiyatlar</h1>
          </div>
          <div className="segment-gradient-overlay">
            <div className="segment-text-container">
              <h1 className="segment-title">LÜKS</h1>
              <h1 className="segment-desc">Lüks araçlarımıza göz atın!</h1>
              <Link
                className="segment-link"
                href={{
                  pathname: "/fleet",
                  query: {
                    carSegment: "Lüks",
                  },
                }}
              >
                Gözat
              </Link>
            </div>
          </div>
        </div>
        <div className="segment-card">
          <img src={highBg.src} className="segment-image" />
          <div className="segment-price-container">
            {ust ? (
              <h1 className="segment-price">
                {ust} TL + KDV
              </h1>
            ) : null}
            <h1 className="segment-price-desc">başlayan fiyatlar</h1>
          </div>
          <div className="segment-gradient-overlay">
            <div className="segment-text-container">
              <h1 className="segment-title">ÜST</h1>
              <h1 className="segment-desc">
                Üst segment araçlarımıza göz atın!
              </h1>
              <Link
                className="segment-link"
                href={{
                  pathname: "/fleet",
                  query: {
                    carSegment: "Üst",
                  },
                }}
              >
                Gözat
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="segment-row">
        <div className="segment-card">
          <img src={midBg.src} className="segment-image" />
          <div className="segment-price-container">
            {orta ? (
              <h1 className="segment-price">
                {orta} TL + KDV
              </h1>
            ) : null}
            <h1 className="segment-price-desc">başlayan fiyatlar</h1>
          </div>
          <div className="segment-gradient-overlay">
            <div className="segment-text-container">
              <h1 className="segment-title">ORTA</h1>
              <h1 className="segment-desc">
                Orta segment araçlarımıza göz atın!
              </h1>
              <Link
                className="segment-link"
                href={{
                  pathname: "/fleet",
                  query: {
                    carSegment: "Orta",
                  },
                }}
              >
                Gözat
              </Link>
            </div>
          </div>
        </div>
        <div className="segment-card">
          <img src={ecoBg.src} className="segment-image" />
          <div className="segment-price-container">
            {ekonomik ? (
              <h1 className="segment-price">
                {ekonomik} TL + KDV
              </h1>
            ) : null}
            <h1 className="segment-price-desc">başlayan fiyatlar</h1>
          </div>
          <div className="segment-gradient-overlay">
            <div className="segment-text-container">
              <h1 className="segment-title">EKONOMİK</h1>
              <h1 className="segment-desc">Ekonomik araçlarımıza göz atın!</h1>
              <Link
                className="segment-link"
                href={{
                  pathname: "/fleet",
                  query: {
                    carSegment: "Ekonomik",
                  },
                }}
              >
                Gözat
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Segments;
