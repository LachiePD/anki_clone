const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const routeFactory =
  ({ route, method }) =>
  async (payload) => {
    const options = {
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      method,
    };

    if (method !== "GET" && payload) {
      options.body = JSON.stringify(payload);
    }
    const response = await fetch(route, options);
    const data = await response.json();
    return { ...data, status: response.status };
  };

export const getDeck = routeFactory({
  route: `${apiUrl}/getAllDecks`,
  method: "GET",
});
