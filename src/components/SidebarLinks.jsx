import React from "react";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
const linkAnimation = {
  hidden: {
    width: "0px",
    opacity: "0",
  },
  show: {
    width: "100%",
    opacity: "1",
    transition: {
      delay: 0.1,
      duration: 0,
    },
  },
};
const SidebarLinks = ({ title, icon, path, expanded }) => {
  const { pathname } = useLocation();
  return (
    <>
      <motion.div variants={linkAnimation} initial="hidden" animate="show">
        <Link
          to={path}
          className={`flex justify-between p-3 h-12 transition-all duration-0 ${
            pathname === path && expanded ? "bg-[#f2f1f1]" : ""
          }  rounded-sm`}
        >
          <motion.div className="flex gap-x-2 ">
            {/* icon */}
            <p className={`${expanded ? "" : "md:block hidden"}`}>{icon}</p>
            <AnimatePresence mode="wait">
              {expanded && (
                <motion.p
                  variants={linkAnimation}
                  initial="hidden"
                  animate="show"
                  exit="hidden"
                >
                  {/* title */}
                  {title}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
          {/* arrow icon */}
          {expanded && <IoIosArrowForward fontSize={24} />}
        </Link>
      </motion.div>
      {expanded && <hr className={`border-[1px] md:hidden block`} />}
    </>
  );
};

export default SidebarLinks;
