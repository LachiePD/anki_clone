const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const login = async (credentials) => {
  try {
    const response = await fetch(`${apiUrl}/login`, {
      method: "POST",
      credentials: "include",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    const result = await response.json();
    return { message: result.message, status: response.status };
  } catch (error) {
    console.log("api , login error");
    console.log(error.message);
    return { message: error.message, status: 0 };
  }
};

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

export const auth = { login, createUser };
