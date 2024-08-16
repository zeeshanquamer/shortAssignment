import React, { useState } from "react";
import { motion } from "framer-motion";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosArrowRoundBack } from "react-icons/io";
import { sidebar } from "../data/sidebarlinks";
import SidebarLinks from "./SidebarLinks";
const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const sidebarAnimation = {
    width: expanded ? "300px" : "70px",
    transition: { type: "spring", stiffness: 150 },
  };
  const sidebarMobile = {
    width: expanded ? "100%" : "70px",
  };

  return (
    <>
      <motion.div
        animate={sidebarAnimation}
        className={`${
          !expanded ? "items-center" : ""
        } flex-col p-4 shadow-md md:flex hidden`}
      >
        {/* hamburger menu */}
        <div className="cursor-pointer" onClick={() => setExpanded(!expanded)}>
          {expanded ? (
            <IoIosArrowRoundBack fontSize={40} />
          ) : (
            <GiHamburgerMenu fontSize={24} />
          )}
        </div>
        {/* sidebar links */}
        <div className={`flex  flex-col gap-y-4 p-2`}>
          {sidebar.map((link) => (
            <SidebarLinks key={link.id} {...link} expanded={expanded} />
          ))}
        </div>
      </motion.div>
      <motion.div
        animate={sidebarMobile}
        className={`${
          !expanded ? "items-center" : ""
        } md:hidden flex flex-col p-4 shadow-md`}
      >
        {/* hamburger menu */}
        <div className="cursor-pointer" onClick={() => setExpanded(!expanded)}>
          {expanded ? (
            <IoIosArrowRoundBack fontSize={40} />
          ) : (
            <GiHamburgerMenu fontSize={24} />
          )}
        </div>
        {/* sidebar links */}
        <div className={`flex flex-col gap-y-4 p-2`}>
          {sidebar.map((link) => (
            <SidebarLinks key={link.id} {...link} expanded={expanded} />
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
