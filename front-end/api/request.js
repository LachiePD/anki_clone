const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function request(path, options = {}) {
  const response = await fetch(`${apiUrl}${path}`, {
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    ...options,
  });
  const data = await response.json();
  return { ...data, status: response.status };
}
