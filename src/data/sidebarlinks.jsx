import { MdDashboard } from "react-icons/md";
import { FaLink } from "react-icons/fa6";
import { TbReportAnalytics } from "react-icons/tb";
import { BsBank } from "react-icons/bs";
export const sidebar = [
  {
    id: 1,
    title: "My Dashboard",
    icon: <MdDashboard fontSize={24} />,
    path: "/my-dashboard",
  },
  {
    id: 2,
    title: "TOTM links",
    icon: <FaLink  fontSize={24} />,
    path: "/totm",
  },
  {
    id: 3,
    title: "Daily Summary",
    icon: <TbReportAnalytics fontSize={24} />,
    path: "/daily-summary",
  },
  {
    id: 4,
    title: "Bank Details",
    icon: <BsBank  fontSize={24} />,
    path: "/bank-details",
  },
];
