import { Inbox } from "lucide-react";
import { useLocation } from "react-router-dom";
import PATHS from "../../../routes/paths";
import SidenavItem from "./SidenavItem";

const NavItems = [
  { icon: Inbox, label: "Incoming", link: PATHS.INCOMING },
  { icon: Inbox, label: "Cases", link: PATHS.CASES },
  { icon: Inbox, label: "Suppliers", link: PATHS.SUPPLIERS },
  { icon: Inbox, label: "Clients", link: PATHS.CLIENTS },
  { icon: Inbox, label: "SBC Entities", link: PATHS.SBC_ENTITIES },
  { icon: Inbox, label: "Reporting", link: PATHS.REPORTING },
  { icon: Inbox, label: "System", link: PATHS.SYSTEM },
  { icon: Inbox, label: "PEPPOL invoices", link: PATHS.PEPPOL_INVOICES },
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
