import React, { useState } from "react";
import "../../styles/Header.css";
import { useMatch, useResolvedPath } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import SearchForMobile from "./SearchForMobile";
import Cart from "../../pages/Cart";
import MobileMenu from "./MobileMenu";
import TopBar from "./TopBar";
import { useCart } from "../../contexts/CartContext";

function CustomNavLink({ to, label }) {
  const resolved = useResolvedPath(to);
  const matchUrl = useMatch({ path: resolved.pathname, end: true });

  return (
    <li>
      <Link className="block p-3 md:p-0 text-(--primary) text-nowrap" to={to}>
        {label}
      </Link>
    </li>
  );
}

function Header() {
  const { cart } = useCart();
  const cartItemsCount = cart.reduce((count, item) => count + item.qty, 0);

  return (
    <>
      <header className="w-full fixed top-0 bg-white z-8">
        <div className="relative h-12 flex justify-between items-center px-4 shadow-lg ">
          {/* mobile menu icon */}
          <div className="md:hidden absolute right-1">
            <MobileMenu />
          </div>

          <div className=" text-xl text-(--primary) font-bold pb-2 mr-8 ml-2 md:mr-0 ">
            برند من
          </div>

          {/* nav for desktop */}
          <div>
            <ul className="hidden md:flex gap-x-[2vw] ">
              <CustomNavLink to="/" label={"خانه"} />
              <CustomNavLink to="category" label={"دسته بندی"} />
              <CustomNavLink to="/suggestion" label={"پیشنهاد ویژه"} />
              <CustomNavLink to="/brands" label={"برند ها"} />
              <CustomNavLink to="/club" label={"باشگاه مشتریان"} />
            </ul>
          </div>

          {/* actions */}
          <div className="flex items-center gap-x-2 ">
            <div className="bg-(--primary) px-[1vw] text-white rounded-md text-xs lg:text-sm">
              با اولین ورود 4 تخفیف بگیر
            </div>
            <Link to={"/login"} className="flex md:ml-0">
              <IoLogInOutline className="w-6 h-6" />
              <div className="flex text-sm">ورود</div>
            </Link>
            {/* search */}
            <div className=" lg:hidden">
              <SearchForMobile />
            </div>

            {/* cart */}
            <Link to={"/cart"} className="relative mr-2 lg:mr-6">
              <MdOutlineShoppingBag className="w-6 h-6" />
              <div className="absolute -right-3 top-2 w-5 h-5 flex justify-center items-center rounded-full bg-(--primary) text-white">
                {cartItemsCount}
              </div>
            </Link>
          </div>
        </div>
      </header>

      {/* searchbox for desktop */}
      <div className="hidden lg:flex fixed z-7 top-12 w-full items-center p-3 px-6 bg-white ">
        <div className=" w-120 ">
          <input
            className="w-full p-2 text-[#222] px-3 border border-gray-400 rounded-sm placeholder:text-gray-400 "
            placeholder="محصولت رو پیدا کن"
            type="search"
            id=""
          />
        </div>
      </div>
    </>
  );
}

export default Header;
