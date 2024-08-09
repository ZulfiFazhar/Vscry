"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import MenuItems from "./MenuItems.jsx";
import { ThemeSwitcher } from "../theme/ThemeSwitcher.jsx";
import { IoLogoGithub } from "react-icons/io5";
import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";

export default function App() {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];
  const iconSize = 20;
  const socialMediaItems = [
    {
      name: "GitHub",
      href: "http://github.com",
      icon: <IoLogoGithub size={iconSize} />,
    },
    {
      name: "Instagram",
      href: "http://instagram.com",
      icon: <AiFillInstagram size={iconSize} />,
    },
  ];

  return (
    <Navbar className="py-4">
      <NavbarContent justify="start">
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <p className="cursor-pointer">Menu</p>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu>
            {menuItems.map((item, index) => (
              <DropdownItem key={index}>
                <MenuItems path={item.path} name={item.name} />
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>

      <NavbarContent className="gap-6" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit cursor-default">
            Zulfi Fadilah Azhar
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-6" justify="end">
        {socialMediaItems.map((item, index) => (
          <div
            className="p-1 rounded-full w-fit bg-white text-black hover:text-black/60"
            key={index}
          >
            <Link href={item.href} target="_blank">
              {item.icon}
            </Link>
          </div>
        ))}
        {/* <ThemeSwitcher /> */}
      </NavbarContent>
    </Navbar>
  );
}
