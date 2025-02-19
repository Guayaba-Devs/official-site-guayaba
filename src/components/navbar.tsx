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

  const smoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string): void => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };
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
          <a 
          href="#about-us"
          onClick={(e) => smoothScroll(e,'about-us')}
          className="text-xl">
            Nosotros
          </a>
        </NavbarItem>
        <NavbarItem>
          <a href={"#members"}
           onClick={(e) => smoothScroll(e,'members')}
           className="text-xl">
            Miembros
          </a>
        </NavbarItem>
        <NavbarItem>
          <Link 
          href={"#newsletter"}
          onClick={(e) => smoothScroll(e, 'newsletter')}
          className="text-xl"
          >
            Newsletter
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link 
          href={"#posts"} 
          className="text-xl"
          onClick={(e) => smoothScroll(e, 'posts')}
          >
            Posts
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href={"#"} className="text-xl">
            FAQ
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};
