import "./globals.css";
import { ContextProvider } from "./ContextProvider.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"h-screen w-screen bg-primary overflow-hidden flex"}>
        {
          //TODO think about removing this context. JWT already solves this problem
        }
        <ContextProvider>{children}</ContextProvider>
      </body>
    </html>
  );
}
