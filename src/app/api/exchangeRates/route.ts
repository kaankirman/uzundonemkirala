const tcmb = require("node-tcmb");
export const GET = async (req: Request) => {
  try {
    const data = await tcmb.rates.today();
    if (!data) {
      return new Response("Database connection error", {
        status: 500,
      });
    }
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response("Error", { status: 500 });
  }
};
