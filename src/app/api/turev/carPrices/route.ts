export const POST = async (req: Request) => {
  const { pickupDate, pickupTime, rentalDuration, currency } = await req.json();
  console.log(pickupDate, pickupTime, rentalDuration, currency);
  const [pickupDay, pickupMonth, pickupYear] = pickupDate.split("-");
  const [pickupHour, pickupMin] = pickupTime.split(":");
  let dropoffMonth = parseInt(pickupMonth) + parseInt(rentalDuration);
  let dropoffYear = parseInt(pickupYear);
  if (dropoffMonth > 12) {
    dropoffMonth -= 12;
    dropoffYear = parseInt(pickupYear) + 1;
  }
  const keyHack = process.env.KEY_HACK;
  const serviceAddress = process.env.SERVICE_ADDRESS;
  const userName = process.env.USER_NAME;
  const password = process.env.PASSWORD;
  const carPriceRoute =
    `${serviceAddress}/JsonRez.aspx?` +
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
    `Currency=${currency}`;
  try {
    const response = await fetch(carPriceRoute);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();
    console.log(data);
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
};
