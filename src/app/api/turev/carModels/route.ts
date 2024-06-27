export const GET = async (req: Request) => {
  const keyHack = process.env.KEY_HACK;
  const serviceAddress = process.env.SERVICE_ADDRESS;
  const carModelRoute = `${serviceAddress}/JsonGroup.aspx?Key_Hack=${keyHack}`;
  console.log(carModelRoute);
  try {
    const response = await fetch(carModelRoute);
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }
    const data = await response.json();
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
};
