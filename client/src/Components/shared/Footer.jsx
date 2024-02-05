import React from "react";
import Logo from "./Logo";
import { AboutF, ServicesF, HelpfulF, ContactF } from "@/utils/Data"; 
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <Logo />
            </div>
            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
              consequuntur amet culpa cum itaque neque.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            {renderFooterSection("About Us", AboutF)}
            {renderFooterSection("Our Services", ServicesF)}
            {renderFooterSection("Helpful Links", HelpfulF)}
            {renderFooterSection("Contact Us", ContactF)}
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">All rights reserved. Terms & Conditions</span>
            </p>
            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; {new Date().getFullYear()} Company Name
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function renderFooterSection(title, items) {
  return (
    <div className="text-center sm:text-left">
      <p className="text-lg font-medium text-gray-900">{title}</p>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <Link href={item.to} className="text-gray-500 hover:text-teal-600">
              {item.link}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
