import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { FaArrowRightLong } from "react-icons/fa6";

const hotSearches = [
  "سشوار",
  "ضد افتاب",
  "کانسیلر",
  "ابرسان",
  "سشوار",
  "ضد افتاب",
  "کانسیلر",
  "ابرسان",
];

function SearchForMobile() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <IoSearchOutline onClick={() => setIsOpen(!isOpen)} className="w-6 h-6" />

      {/* countainer */}
      <div
        className={`w-full h-70 fixed top-0 right-0 bg-white z-10 duration-400 p-1  flex justify-center ${isOpen ? "translate-y-0" : "-translate-y-full"}`}
      >
        {/* inner countainer */}
        <div className="w-full max-w-160 p-4 pt-8">
          <div className="flex w-full items-center justify-center">
            <FaArrowRightLong className="w-5 h-5 ml-4 " />
            <div className="relative flex-1">
              <input
                className="w-full bg-white border border-[#c56498] pl-12 rounded-sm p-2 focus:outline focus:outline-(--primary) focus:border-(--primary)"
                type="search"
                name=""
                id=""
                placeholder="محصولت رو پیدا کن"
              />
              <IoSearchOutline className="w-10 h-10 absolute left-0 top-px bg-(--primary) p-1.5 text-white rounded-l-sm" />
            </div>
          </div>

          {/* قسمت زیر جستجو */}
          <div className="w-full pr-9 mt-1 ">
            <p className="text-[#444] text-sm">جستجو های پرطرفدار</p>
            <div className="flex flex-wrap gap-1 mt-1">
              {hotSearches.map((item,index)=>(
                <div className="text-sm text-[#333] p-0.5 px-1.5 border border-gray-300 rounded-sm" key={index}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* backdrop */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 z-9"
        ></div>
      )}
    </div>
  );
}

export default SearchForMobile;
