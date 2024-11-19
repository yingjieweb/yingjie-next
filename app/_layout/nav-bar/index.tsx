"use client";

import React, { useState } from "react";
import { navItems } from "./constants";
import { NavItem } from "./components/nav-item";
import { CloseOutlined, MenuOutlined } from "@ant-design/icons";

export default function NavBar() {
  const [curActiveNavEl, setCurActiveNavEl] = useState<string>("#home");
  const [mobileNavVisible, setMobileNavVisible] = useState<boolean>(false);

  const scrollToElement = (targetEl: string) => {
    const element = document.querySelector(targetEl) as HTMLElement;
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[3] flex items-center justify-between bg-white px-[25px] py-[6px] text-[rgba(0,0,0,0.65)] shadow-[0_4px_8px_0_rgba(0,0,0,0.1)]">
      <div className="flex-1 px-[4px] py-[2px] text-[1.5em] font-bold text-[#409EFF]">
        Yingjieweb
      </div>

      {/* desktop nav */}
      <ul className="flex items-center justify-center">
        {navItems.map((nav) => (
          <NavItem
            key={nav.targetEl}
            nav={nav}
            isActive={nav.targetEl === curActiveNavEl}
            className="hidden md:block leading-[1.5] transition-colors duration-300"
            onClick={() => {
              setCurActiveNavEl(nav.targetEl);
              scrollToElement(nav.targetEl);
            }}
          />
        ))}
        <li
          className="block md:hidden cursor-pointer px-3 py-2 text-[1.2em] font-bold"
          onClick={() => setMobileNavVisible(!mobileNavVisible)}
        >
          {mobileNavVisible ? <CloseOutlined /> : <MenuOutlined />}
        </li>
      </ul>

      {/* mobile nav */}
      {mobileNavVisible && (
        <ul className="absolute top-full right-0 z-[3] w-[6em] flex flex-col items-center bg-white shadow-md">
          {navItems.map((nav) => (
            <NavItem
              key={nav.targetEl}
              nav={nav}
              isActive={nav.targetEl === curActiveNavEl}
              onClick={() => {
                setCurActiveNavEl(nav.targetEl);
                scrollToElement(nav.targetEl);
                setMobileNavVisible(false);
              }}
            />
          ))}
        </ul>
      )}
    </nav>
  );
}
