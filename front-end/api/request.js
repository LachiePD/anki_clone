const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function request(path, options = {}) {
  console.log(API_URL);
  const response = await fetch(`${API_URL}${path}`, {
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    ...options,
  });
  const data = await response.json();
  return { ...data, status: response.status, ok: response.ok };
}
