import type { Metadata } from "next";
import "./ui/global.css";
import { raleway } from "./ui/fonts";
import { NextUIProvider } from "@nextui-org/react";

export const metadata: Metadata = {
  title: "Cásate Conmigo",
  description: "Joyeria de anillos de boda en Ecuador",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <NextUIProvider>
        <body className={`${raleway.className} antialiased`}>{children}</body>
      </NextUIProvider>
    </html>
  );
}
