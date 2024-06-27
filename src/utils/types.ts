export type CarModel = {
  big_bags: string;
  brand: string;
  chairs: string;
  currency: string;
  driver_age: string;
  driving_license_age: string;
  fuel: string;
  group_id: string;
  group_name: string;
  group_str: string;
  image_path: string;
  provisionA: string;
  sipp: string;
  small_bags: string;
  transmission: string;
  type: string;
  total_rental?: string;
  cars_park_id?: string;
  rez_id?: string;
};

export type SearchData = {
  pickupDate: string;
  pickupTime: string;
  rentalDuration: string;
  km: string;
};
