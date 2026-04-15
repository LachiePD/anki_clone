import "./globals.css";
import { AuthProvider } from "@/providers/index.mjs";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={" flex max-w-screen  bg-primary  "}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
