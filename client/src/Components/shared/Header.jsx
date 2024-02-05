import { Links } from "@/utils/Data";
import Link from "next/link";
import React from "react";
import { CiUser, CiShoppingBasket, CiMenuBurger } from "react-icons/ci";
import Logo from "./Logo";
export default function Header() {
  return (
    <header className="bg-white">
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
        <Logo />
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <nav aria-label="Global" className="hidden md:block">
            <ul className="flex items-center gap-6 text-sm">
              {Links.map((item) => {
                return (
                  <li
                    key={item.id}
                    className=" font-bold text-gray-400 hover:text-red-300 text-base transition-all"
                  >
                    <Link href={item.to}>{item.link}</Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex items-center gap-4 text-3xl">
            <CiUser />
            <CiShoppingBasket />
            <button className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden">
              <CiMenuBurger />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
