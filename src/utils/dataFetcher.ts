import { Notify } from "notiflix";

export const fetchExchangeRatesData = async () => {
  try {
    const response = await fetch("/api/exchangeRates");
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    }
    Notify.failure("Veriler getirilirken bir hata oluştu.");
  } catch (error) {
    console.error(error);
  }
};

export const fetchCarModelsData = async () => {
  try {
    const response = await fetch("/api/turev/carModels");
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      return data;
    }
    Notify.failure("Veriler getirilirken bir hata oluştu.");
  } catch (error) {
    console.error(error);
  }
};
