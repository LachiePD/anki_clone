import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"min-h-screen min-w-screen bg-primary overflow-hidden flex"}>
	  {children}
      </body>
    </html>
  );
}
