const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export const attemptLogin = async (credentials) => {
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
    console.log("api , attemptLogin error");
    console.log(error.message);
	  return {message: error.message, status:0}
  }
};
