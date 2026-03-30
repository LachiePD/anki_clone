import "./globals.css";
import { AuthProvider } from "@/providers/index.mjs";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={"min-h-screen min-w-screen bg-primary overflow-hidden flex"}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
