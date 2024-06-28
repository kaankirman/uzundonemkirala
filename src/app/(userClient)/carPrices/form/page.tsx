"use client";
import "@styles/form-page.css";
import CarCard from "@components/userClient/elements/CarCard";
import Transition from "@components/userClient/elements/Transition";
import { CarModel } from "@utils/types";
import { useRouter, useSearchParams } from "next/navigation";
import { Loading, Notify } from "notiflix";
import React, { useEffect } from "react";

const page = () => {
  const searchParams = useSearchParams();
  const car: CarModel = JSON.parse(searchParams.get("car")!);
  const searchData = JSON.parse(searchParams.get("searchData")!);
  const router = useRouter();
  const [rentalPrice, setRentalPrice] = React.useState<number | null>(null);
  const [name, setName] = React.useState<string>("");
  const [surname, setSurname] = React.useState<string>("");
  const [phoneNumber, setPhoneNumber] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [city, setCity] = React.useState<string>("");
  const [country, setCountry] = React.useState<string>("Türkiye");

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

  if (!searchParams.has("car") || !searchParams.has("searchData")) {
    return (
      <div className="h-full w-full bg-gradient-to-b from-orange-50 to bg-orange-200 pt-32 pb-4 px-6">
        <div className="flex flex-col justify-center items-center h-full w-full shadow-xl rounded-lg">
          <h1 className="font-bold text-2xl">
            Aradığınız sayfaya ulaşılamadı.
          </h1>
        </div>
      </div>
    );
  }

  const handleReservationSave = async () => {
    if (
      name === "" ||
      surname === "" ||
      phoneNumber === "" ||
      email === "" ||
      city === ""
    ) {
      Notify.failure("Lütfen tüm alanları doldurunuz.");
      return;
    }
    Loading.standard();
    const response = await fetch("/api/turev/reservation", {
      method: "POST",
      body: JSON.stringify({
        name: name,
        surname: surname,
        phoneNumber: phoneNumber,
        email: email,
        city: city,
        country: country,
        car: car,
        rentalPrice: rentalPrice,
        searchData: searchData,
      }),
    });
    const data = await response.json();
    if (response.ok) {
      if (data[0].success === "False") {
        Notify.failure(data[0].error);
        return;
      }
      Notify.success("Rezervasyon talebiniz başarıyla oluşturuldu.");
      Loading.remove();
      router.push("/");
    } else {
      Notify.failure("Rezervasyon talebi sırasında bir hata oluştu.");
    }
    Loading.remove();
  };

  return (
    <div className="form-page-main-div bg-gradient-to-b from-orange-50 to bg-orange-200">
      <div className="form-page-sub-div">
        <div className="form-page-alert">Fiyatlarımıza KDV Dahil değildir!</div>
        <div className="form-page-car-div">
          <CarCard car={car} searchData={searchData} />
        </div>
        <div className="form-page-form-div">
          <div className="form-row">
            <Transition duration={0.4}>
              <div className="form-col">
                <label className="form-label">Ad</label>
                <input
                  className="text-input"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </Transition>
            <Transition duration={0.6}>
              <div className="form-col">
                <label className="form-label">Soyad</label>
                <input
                  className="text-input"
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
            </Transition>
          </div>
          <div className="form-row">
            <Transition duration={0.8}>
              <div className="form-col">
                <label className="form-label">Telefon numarası</label>
                <input
                  className="text-input"
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </Transition>

            <Transition duration={1}>
              <div className="form-col">
                <label className="form-label">E-mail adresi</label>
                <input
                  className="text-input"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </Transition>
          </div>
          <div className="form-row">
            <Transition duration={1.2}>
              <div className="form-col">
                <label className="form-label">Aracın kiralanacağı şehir</label>
                <input
                  className="text-input"
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                />
              </div>
            </Transition>

            <Transition duration={1.4}>
              <div className="form-col">
                <label className="form-label">Aracın kiralanacağı Ülke</label>
                <input
                  className="text-input"
                  type="text"
                  value={country}
                  readOnly
                  onChange={(e) => setCountry(e.target.value)}
                />
              </div>
            </Transition>
          </div>
          <Transition duration={1.6}>
            <button
              onClick={handleReservationSave}
              className="save-button"
            >
              Rezervasyon Talebi Oluştur
            </button>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default page;
