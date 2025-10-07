import {
  Building,
  ChartColumnBig,
  FileText,
  Inbox,
  LayoutList,
  Settings,
  Truck,
  User,
} from "lucide-react";
import { useLocation } from "react-router-dom";
import PATHS from "../../../routes/paths";
import SidenavItem from "./SidenavItem";

const NavItems = [
  { icon: Inbox, label: "Incoming", link: PATHS.INCOMING },
  { icon: LayoutList, label: "Cases", link: PATHS.CASES },
  { icon: Truck, label: "Suppliers", link: PATHS.SUPPLIERS },
  { icon: User, label: "Clients", link: PATHS.CLIENTS },
  { icon: Building, label: "SBC Entities", link: PATHS.SBC_ENTITIES },
  { icon: ChartColumnBig, label: "Reporting", link: PATHS.REPORTING },
  { icon: Settings, label: "System", link: PATHS.SYSTEM },
  { icon: FileText, label: "PEPPOL invoices", link: PATHS.PEPPOL_INVOICES },
];

const Sidenav = () => {
  const { pathname } = useLocation();

  return (
    <div className="min-w-52 overflow-y-auto">
      {NavItems.map((item) => (
        <SidenavItem
          key={item.label}
          icon={item.icon}
          label={item.label}
          link={item.link}
          isActive={pathname.includes(item.link)}
        />
      ))}
    </div>
  );
};

export default Sidenav;
