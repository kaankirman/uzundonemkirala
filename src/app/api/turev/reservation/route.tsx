import { v4 as uuidv4 } from "uuid";

export const POST = async (req: Request) => {
  const {
    name,
    surname,
    phoneNumber,
    email,
    city,
    country,
    car,
    rentalPrice,
    searchData,
  } = await req.json();
  const [pickupDay, pickupMonth, pickupYear] = searchData.pickupDate.split("-");
  const [pickupHour, pickupMin] = searchData.pickupTime.split(":");
  let dropoffMonth =
    parseInt(pickupMonth) + parseInt(searchData.rentalDuration);
  let dropoffYear = parseInt(pickupYear);
  const uuid = uuidv4();
  if (dropoffMonth > 12) {
    dropoffMonth -= 12;
    dropoffYear = parseInt(pickupYear) + 1;
  }
  const keyHack = process.env.KEY_HACK;
  const serviceAddress = process.env.SERVICE_ADDRESS;
  const userName = process.env.USER_NAME;
  const password = process.env.PASSWORD;
  const route =
    `${serviceAddress}/JsonRez_Save.aspx?` +
    `Key_Hack=${keyHack}&` +
    `Drop_Off_ID=1&` +
    `Pickup_ID=1&` +
    `Pickup_Day=${pickupDay}&` +
    `Pickup_Month=${pickupMonth}&` +
    `Pickup_Year=${pickupYear}&` +
    `Drop_Off_Day=${pickupDay}&` +
    `Drop_Off_Month=${dropoffMonth.toString()}&` +
    `Drop_Off_Year=${dropoffYear.toString()}&` +
    `Pickup_Hour=${pickupHour}&` +
    `Pickup_Min=${pickupMin}&` +
    `Drop_Off_Hour=${pickupHour}&` +
    `Drop_Off_Min=${pickupMin}&` +
    `User_Name=${userName}&` +
    `User_Pass=${password}&` +
    `Currency=${car.currency}&` +
    `Name=${name}&` +
    `SurName=${surname}&` +
    `MobilePhone=${phoneNumber}&` +
    `Mail_Adress=${email}&` +
    `Cars_Park_ID=${car.cars_park_id}&` +
    `Group_ID=${car.group_id}&` +
    `Rez_ID=${car.rez_id}&` +
    `City=${city}&` +
    `Country=${country}&` +
    `Your_Rez_ID=${uuid}&` +
    `Your_Rent_Price=${rentalPrice}&`+
    `Your_Extra_Price=0&`+
    `Your_Drop_Price=0&` +
    `Flight_Number=${searchData.km}&` +
    `Payment_Type=0`;

  try {
    const response = await fetch(route);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
};
