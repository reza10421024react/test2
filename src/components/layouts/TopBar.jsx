import React from "react";
import { Link } from "react-router-dom";

const TopBarItems = [
  { title: "هدیه های باارزش", path: "/#" },
  { title: "پیشنهاد ویژه", path: "/#" },
  { title: "ست مخصوص", path: "/#" },
  { title: "بهداشتی", path: "/#" },
  { title: "عطر و ادکلن", path: "/#" },
  { title: "روتین پوستی", path: "/#" },
  { title: "زیور الات", path: "/#" },
  { title: "برقی", path: "/#" },
];
function TopBar() {
  return (
    <div className="lg:hidden scrollX w-full flex fixed top-12 p-3 gap-x-2 bg-white whitespace-nowrap overflow-x-auto z-2">
      {TopBarItems.map((item) => (
        <Link
          to={item.path}
          className="bg-[#ffb7dd] border border-[#ff9dd1] rounded-lg p-1 text-sm text-black/85"
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
}

export default TopBar;
