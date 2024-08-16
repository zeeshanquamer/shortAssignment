import React from "react";
import { motion } from "framer-motion";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const SidebarPage = ({ expanded, setExpanded }) => {
  return (
    <motion.div className="relative flex h-screen">
      {/* sidebar component */}
      <Sidebar expanded={expanded} setExpanded={setExpanded} />
      <motion.div className="flex-1 overflow-auto">
        {/* outlet container */}
        <motion.div>
          <Outlet />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default SidebarPage;
