"use client";

import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export const NavbarTop = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar
      shouldHideOnScroll
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="bg-gradient-to-r from-primary to-secondary h-20"
      maxWidth="lg"
    >
      <NavbarBrand>
        <Image
          src={`images/guayaba-cover.png`}
          alt="logo"
          width={200}
          height={60}
          className="mr-6"
        />
      </NavbarBrand>

      <NavbarContent
        className="hidden sm:flex gap-4 md:gap-14 md:text-base text-white font-semibold"
        justify="center"
      >
        <NavbarItem>
          <Link href={"#nosotros"} className="text-xl">
            Nosotros
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={"#servicios"} className="text-xl">
            Miembros
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={"#contacto"} className="text-xl">
            Newsletter
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={"#contacto"} className="text-xl">
            Posts
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={"#contacto"} className="text-xl">
            FAQ
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
