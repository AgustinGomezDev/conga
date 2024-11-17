import type { Metadata } from "next";
import { Onest } from 'next/font/google'
import "./globals.css";
import GithubLink from "@/components/GithubLink";

const onest = Onest({
  subsets: ['latin'],
  display: 'swap',
})

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
        className={`antialiased dark overflow-x-hidden ${onest.className}`}
      >
        <GithubLink />
        {children}
      </body>
    </html>
  );
}
