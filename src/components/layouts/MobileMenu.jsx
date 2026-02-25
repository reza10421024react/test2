import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoIosClose } from "react-icons/io";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const MenuItems = [
  { to: "category", label: "دسته بندی" },
  { to: "/suggestion", label: "پیشنهاد ویژه" },
  { to: "/", label: "خانه" },
  { to: "/brands", label: "برند ها" },
  { to: "/club", label: "باشگاه مشتریان" },
  { to: "/help", label: "راهنمای ارسال" },
];

function CustomNavLink({ to, label }) {
  const resolved = useResolvedPath(to);
  const matchUrl = useMatch({ path: resolved.pathname, end: true });

  return (
    <li>
      <Link
        className={`block p-3 text-(--primary) ${matchUrl ? "shadow-lg bg-[#ff149311]" : ""}`}
        to={to}
      >
        {label}
      </Link>
    </li>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div>
      {/* icon */}
      <div className="">
        <FiMenu onClick={() => toggleMenu()} className="w-10 h-10 p-2" />
      </div>

      {/* countainer */}
      <div
        className={`fixed w-80 right-0 top-0 bottom-0 bg-[linear-gradient(200deg,white,#ff88ff)] z-10 transition-all duration-500 ${isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}`}
      >
        {/* header */}
        <div className="relative border-b border-gray-300 shadow-sm">
          <div className=" text-2xl text-(--primary) font-bold p-3 pb-4">
            برند من
          </div>
          <IoIosClose
            onClick={() => toggleMenu()}
            className="absolute left-3 top-4 w-6 h-6"
          />
        </div>

        <ul className="flex flex-col h-full mt-4">
          {MenuItems.map((item) => (
            <CustomNavLink label={item.label} to={item.to} key={item.to} />
          ))}
        </ul>
      </div>

      {/* menu backdrop */}
      {isOpen && (
        <div
          onClick={() => toggleMenu()}
          className="fixed inset-0 bg-black/70 z-9"
        ></div>
      )}
    </div>
  );
}

export default MobileMenu;
