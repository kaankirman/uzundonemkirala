"use client"
import React from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { BsCalendar2Week, BsClock } from "react-icons/bs";
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import DropdownMenu from "@components/userClient/elements/DropdownMenu";
import Link from "next/link";

const CarSearchForm = () => {
  const minDate = new DateObject().add(1, "day");
  const [selectedDate, setSelectedDate] = React.useState<DateObject | null>(
    minDate
  );
  const [selectedPickTime, setSelectedPickTime] =
    React.useState<DateObject | null>(
      new DateObject().setHour(18).setMinute(15)
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
    { id: 4, name: "4 Ay" },
    { id: 6, name: "6 Ay" },
    { id: 12, name: "12 Ay" },
  ];

  const kmOptions = [
    { id: 2000, name: "2000 Km/Ay" },
    { id: 3000, name: "3000 Km/Ay" },
    { id: 4000, name: "4000 Km/Ay" },
    { id: 5000, name: "5000 Km/Ay" },
  ];

  return (
    <div className="flex text-xl *:text-2xl">
      <div className="flex flex-row justify-center items-center">
        <div className="flex flex-col">
          <div className="flex flex-row mb-10">
            <div className="flex flex-col w-full">
              <label className="font-bold text-white mb-5">Alış Tarihi</label>
              <div className="flex flex-row border w-fit h-12 bg-white border-gray-300 rounded-md transition duration-300 hover:border-orange-400 items-center px-2">
                <BsCalendar2Week size={24} className="text-orange-400 mr-2" />
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
            <div className="flex flex-col w-full ml-7">
              <label className="font-bold  text-white mb-5 rounde">
                Alış Saati
              </label>
              <div className="flex flex-row border w-fit h-12 bg-white border-gray-300 rounded-md transition duration-300 hover:border-orange-400 items-center px-2 none">
                <BsClock size={24} className="text-orange-400 mr-2" />
                <DatePicker
                  value={selectedPickTime}
                  onChange={setSelectedPickTime}
                  placeholder="Alış saati seçin"
                  minDate={new Date().setDate(15)}
                  format="HH:mm"
                  className="orange"
                  containerStyle={{ border: "none" }}
                  inputClass="cursor-pointer outline-none w-40"
                  disableDayPicker
                  plugins={[<TimePicker hideSeconds mStep={15} />]}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row w-full">
            <div className="flex flex-col">
              <label className="font-bold  text-white mb-5">
                Kiralama Süresi
              </label>
              <DropdownMenu
                options={durationOptions}
                currentOption={selectedRentDuration}
                onSelect={(value) =>
                  handleDropdownSelect(value, setSelectedRentDuration)
                }
              />
            </div>
            <div className="flex flex-col pl-7">
              <label className="font-bold  text-white mb-5">
                Aylık Kilometre
              </label>
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
                pickupTime: selectedPickTime?.format("HH:mm"),
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
