"use client";
import "@styles/form-page.css";
import Transition from "@components/userClient/elements/Transition";
import { useRouter } from "next/navigation";
import { Loading, Notify } from "notiflix";
import React, { useEffect } from "react";
import { DateObject } from "react-multi-date-picker";
import { CarModel } from "@utils/types";
import CarFilter from "@components/userClient/elements/CarFilter";

const page = () => {
  const minDate = new DateObject().add(1, "day");
  const router = useRouter();
  const [name, setName] = React.useState<string>("");
  const [surname, setSurname] = React.useState<string>("");
  const [phoneNumber, setPhoneNumber] = React.useState<string>("");
  const [period, setPeriod] = React.useState<string>("1");
  const [city, setCity] = React.useState<string>("");
  const [country, setCountry] = React.useState<string>("Türkiye");

  const [carModels, setCarModels] = React.useState<CarModel[]>([]);
  const [filteredModels, setFilteredModels] = React.useState<CarModel[]>([]);
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

  const handleReservationSave = async () => {
    if (
      name === "" ||
      surname === "" ||
      phoneNumber === "" ||
      period === "" ||
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
        email: " ",
        city: city,
        country: country,
        car: filteredModels[0],
        rentalPrice: 0,
        searchData: {
          pickupDate: minDate.format("DD-MM-YYYY"),
          pickupTime: "11:11",
          rentalDuration: period,
          km: "0",
          currency: "TL",
        },
      }),
    });
    const data = await response.json();
    if (response.ok) {
      if (data[0].success === "False") {
        Notify.failure(data[0].error);
        return;
      }
      Notify.success("İletişim talebiniz başarıyla oluşturuldu.");
      Loading.remove();
      router.push("/");
    } else {
      Notify.failure("İletişim talebi sırasında bir hata oluştu.");
    }
    Loading.remove();
  };

  return (
    <div className="form-page-main-div bg-gradient-to-b from-orange-50 to bg-orange-200">
      <div className="invisible h-0">
        <CarFilter
          carModels={carModels}
          setFilteredModels={setFilteredModels}
        />
      </div>
      <div className="form-page-sub-div">
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
                <label className="form-label">
                  Tahmini kiralama süresi (ay)
                </label>
                <input
                  className="text-input"
                  type="number"
                  max={12}
                  min={1}
                  value={period}
                  onChange={(e) => setPeriod(e.target.value)}
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
            <button onClick={handleReservationSave} className="save-button">
              İletişim Talebi Oluştur
            </button>
          </Transition>
        </div>
      </div>
    </div>
  );
};

export default page;
