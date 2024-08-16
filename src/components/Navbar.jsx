import React from "react";
import { navbarLinks } from "../data/navbarLinks";
import { NavLink, useLocation } from "react-router-dom";
import { BiNotification, BiSearch } from "react-icons/bi";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const {pathname} = useLocation();
  return (
    <div className="flex justify-between items-center h-[5rem] p-4 pt-8  border-gray-200 border-b-2">
      {/* logo container */}
      <div className="font-semibold">Logo</div>
      <div className="flex  font-semibold ">
        {/* navbar links container */}
        <div className="md:flex hidden justify-between items-center gap-x-32 ">
          {navbarLinks.map((link) => (
            <NavLink className="relative " to={link.path} key={link.id}>
              {link.title}
              {/* bottom active container */}
              <div className={` absolute -bottom-5 ${link.path === pathname ? "w-full" :"w-0"} bg-[#3aa078] h-1.5 transition-all duration-200 ` }></div>
            </NavLink>
          ))}
        </div>
      </div>
      {/* icons container */}
      <div className="flex justify-between items-center md:gap-x-16 gap-x-6">
        <BiSearch fontSize={24} />
        <MdOutlineNotificationsActive fontSize={24} />
        <FaRegUserCircle fontSize={24} />
      </div>
    </div>
  );
};

export default Navbar;
