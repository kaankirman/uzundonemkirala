"use client";
import React, { useEffect } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { BsCalendar2Week } from "react-icons/bs";
import DropdownMenu from "@components/userClient/elements/DropdownMenu";
import Link from "next/link";
import Notiflix, { Notify } from "notiflix";
import "@styles/car-search-form.css";
import "@styles/datepicker.css"

const CarSearchForm = () => {
  const minDate = new DateObject().add(1, "day");
  const [selectedDate, setSelectedDate] = React.useState<DateObject | null>(
    minDate
  );
  const [selectedRentDuration, setSelectedRentDuration] = React.useState<
    number | null
  >(1);
  const [selectedMonthlyKm, setSelectedMonthlyKm] = React.useState<
    number | null
  >(2000);

  const handleDropdownSelect = (
    value: number,
    setter: React.Dispatch<React.SetStateAction<number | null>>
  ) => {
    setter(value);
  };

  const durationOptions = [
    { id: 1, name: "1 Ay" },
    { id: 2, name: "2 Ay" },
    { id: 3, name: "3 Ay" },
    { id: 4, name: "4 Ay" },
    { id: 5, name: "5 Ay" },
    { id: 6, name: "6 Ay" },
    { id: 7, name: "7 Ay" },
    { id: 8, name: "8 Ay" },
    { id: 9, name: "9 Ay" },
    { id: 10, name: "10 Ay" },
    { id: 11, name: "11 Ay" },
    { id: 12, name: "12 Ay" },
  ];

  const kmOptions = [
    { id: 2000, name: "2000 Km/Ay" },
    { id: 3000, name: "3000 Km/Ay" },
    { id: 4000, name: "4000 Km/Ay" },
    { id: 5000, name: "5000 Km/Ay" },
  ];

  useEffect(() => {
    Notiflix.Loading.init({
      svgColor: "#ff9b0e",
      backgroundColor: "rgba(0,0,0,0)",
    });
    Notify.init({
      position: "center-top",
      timeout: 3000,
    });

    Notiflix.Confirm.init({
      okButtonBackground: "#F44336",
      titleColor: "#F44336",
    });
  }, []);

  return (
    <div className="car-search-container">
      <div className="car-search-inner-container">
        <div className="car-search-form">
          <div className="car-search-date">
            <div className="car-search-date-picker-container">
              <label className="car-search-label">Alış Tarihi</label>
              <div className="car-search-date-input">
                <BsCalendar2Week size={24} className="car-search-icon" />
                <DatePicker
                  value={selectedDate}
                  onChange={setSelectedDate}
                  placeholder="Tarih seçin"
                  format="DD/MM/YYYY"
                  className="orange"
                  containerStyle={{ border: "none" }}
                  inputClass="cursor-pointer outline-none w-40"
                />
              </div>
            </div>
          </div>
          <div className="car-search-dropdowns">
            <div className="car-search-dropdown">
              <label className="car-search-label">Kiralama Süresi</label>
              <DropdownMenu
                options={durationOptions}
                currentOption={selectedRentDuration}
                onSelect={(value) =>
                  handleDropdownSelect(value, setSelectedRentDuration)
                }
              />
            </div>
            <div className="car-search-dropdown car-search-dropdown-margin">
              <label className="car-search-label">Aylık Kilometre</label>
              <DropdownMenu
                options={kmOptions}
                currentOption={selectedMonthlyKm}
                onSelect={(value) =>
                  handleDropdownSelect(value, setSelectedMonthlyKm)
                }
              />
            </div>
          </div>
          <Link
            className="list-button"
            href={{
              pathname: "/carPrices",
              query: {
                pickupDate: selectedDate?.format("DD-MM-YYYY"),
                pickupTime: "10:00",
                rentalDuration: selectedRentDuration?.toString(),
                km: selectedMonthlyKm?.toString(),
                currency: "TL",
              },
            }}
          >
            Uygun Araçları Listele
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarSearchForm;
