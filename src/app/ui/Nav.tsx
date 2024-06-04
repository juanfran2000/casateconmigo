"use client";
import Image from "next/image";
import { useState, useContext } from "react";
import { MagicMotion } from "react-magic-motion";
import { AdviserContext } from "../context/AdviserContext";
import { Navbar, NavbarMenuToggle } from "@nextui-org/react";
import Link from "next/link";

type Props = {
  elements: { name: string; link: string }[];
};

export default function Nav({ elements }: Props) {
  let [isOpen, setIsOpen] = useState(false);
  const whatsapp = useContext(AdviserContext) as any;
  const handleOrderClick = () => {
    // Construir el enlace de WhatsApp con la información del producto y la imagen
    const whatsappMessage = `Me interesa conocer más sobre sus anillos, pude revisar su web`;

    // Reemplaza '1234567890' con tu número de teléfono de WhatsApp
    const whatsappLink = `https://wa.me/+593${
      whatsapp.adviser.tel
    }?text=${encodeURIComponent(whatsappMessage)}`;

    // Abrir el enlace en una nueva pestaña
    window.open(whatsappLink, "_blank");
  };

  return (
    <nav>
      <div className="bg-myZinc h-[55px] flex items-center justify-center text-myWhite gap-2">
        <h3>Adquiere tu anillo.</h3>
        <button className="flex items-center gap-1" onClick={handleOrderClick}>
          Agendar una cita
          <span className="icon-[material-symbols--arrow-forward-rounded] text-3xl text-myWhite hover:scale-110 transition-all" />
        </button>
      </div>

      <Navbar
        isMenuOpen={isOpen}
        onMenuOpenChange={setIsOpen}
        className="bg-myWhite flex justify-between md:px-0 md:justify-around h-[80px] items-center text-myZinc"
      >
        <div className="max-w-[180px]">
          <Link className="flex items-center" href="/">
            <Image
              src="/logoBlack.svg"
              priority={true}
              alt="logo de jortega"
              width={400}
              height={80}
            />
          </Link>
        </div>
        <ul className="gap-8 items-center hidden md:flex lg:gap-12">
          {elements.map((element, index) => {
            const indexNav = `custom_${index}`;
            return (
              <li key={indexNav}>
                <Link href={element.link}>{element.name}</Link>
              </li>
            );
          })}
          <hr className="border-r border-gray-300 h-8" />
          <li className="flex justify-center items-center text-myWhite">
            <button
              className="py-3 px-8 bg-myZinc rounded-lg hover:ring-2 hover:ring-offset-2 hover:ring-myZinc transition-all ease-out duration-300"
              rel="noopener noreferrer"
              onClick={handleOrderClick}
            >
              Whatsapp
            </button>
          </li>
        </ul>

        <NavbarMenuToggle
          aria-label={isOpen ? "Close menu" : "Open menu"}
          className="flex items-center md:hidden"
        />
      </Navbar>
      <MagicMotion
        transition={{ type: "spring", stiffness: 180, damping: 60, mass: 1.1 }}
      >
        <div className="overflow-hidden">
          {isOpen && (
            <nav
              className={`${isOpen ? "block" : "hidden"} md:hidden bg-myWhite`}
            >
              <ul className="flex flex-col gap-3 py-6 px-6">
                {elements.map((element, index) => {
                  const indexHamburger = `custom_${index}`;
                  return (
                    <li key={indexHamburger}>
                      <a href={element.link}>{element.name}</a>
                    </li>
                  );
                })}
                <button
                  className="py-3 w-full bg-myZinc rounded-lg hover:ring-2 hover:ring-offset-2 hover:ring-myZinc transition-all ease-out duration-300 text-myWhite text-center"
                  rel="noopener noreferrer"
                  onClick={handleOrderClick}
                >
                  Whatsapp
                </button>
              </ul>
            </nav>
          )}
        </div>
      </MagicMotion>
      <hr className={`${isOpen ? "hidden" : "block"} border-gray-300`} />
    </nav>
  );
}
