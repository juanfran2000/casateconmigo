import type { Metadata } from "next";
import "./ui/global.css";
import { raleway } from "./ui/fonts";
import { NextUIProvider } from "@nextui-org/react";
import AdviserContextProvider from "./context/AdviserContext";
import Nav from "./ui/Nav";

export const metadata: Metadata = {
  title: "Cásate Conmigo",
  description: "Joyeria de anillos de boda en Ecuador",
};

const items = [
  { name: "Tienda", link: "/shop" },
  { name: "Conoce más", link: "/mas" },
  { name: "Nosotros", link: "/nosotros" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${raleway.className} antialiased`}>
        <AdviserContextProvider>
          <NextUIProvider>
            <header>
              <Nav elements={items} />
            </header>
            {children}
          </NextUIProvider>
        </AdviserContextProvider>
      </body>
    </html>
  );
}
