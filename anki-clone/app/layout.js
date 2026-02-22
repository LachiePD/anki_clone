import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"h-screen w-screen bg-primary overflow-hidden flex"}>
	  {children}
      </body>
    </html>
  );
}
