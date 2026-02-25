const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const createUser = async (credentials) => {
  try {
    const response = await fetch(`${apiUrl}/registerUser`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });

    const data = await response.json();
    return await { status: response.status, message: data.message };
  } catch (err) {
    console.error("Error in createUser:", err);
  }
};
