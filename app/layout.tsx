import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "La Conga",
  description: "Aplicación web para jugar a La Conga.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
