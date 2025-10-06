import { Inbox } from "lucide-react";
import type { ReactNode } from "react";
import { Link, useLocation } from "react-router-dom";
import PATHS from "../../../routes/paths";
import clsx from "clsx";

const NavItems = [
  { icon: <Inbox />, label: "Incoming", link: PATHS.INCOMING },
  { icon: <Inbox />, label: "Cases", link: PATHS.CASES },
  { icon: <Inbox />, label: "Suppliers", link: PATHS.SUPPLIERS },
  { icon: <Inbox />, label: "Clients", link: PATHS.CLIENTS },
  { icon: <Inbox />, label: "SBC Entities", link: PATHS.SBC_ENTITIES },
  { icon: <Inbox />, label: "Reporting", link: PATHS.REPORTING },
  { icon: <Inbox />, label: "System", link: PATHS.SYSTEM },
  { icon: <Inbox />, label: "PEPPOL invoices", link: PATHS.PEPPOL_INVOICES },
];

const Sidenav = () => {
  const { pathname } = useLocation();

  return (
    <div className="min-w-52 border-r-2 border-border">
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

const SidenavItem = ({
  icon,
  label,
  link,
  isActive,
}: {
  icon: ReactNode;
  label: string;
  link: string;
  isActive: boolean;
}) => {
  return (
    <Link to={link}>
      <div
        className={clsx(
          "h-24 flex flex-col items-center justify-center transition-[margin]",
          {
            "bg-white border-2 border-border border-r-0 -mr-[2px]": isActive,
          }
        )}
      >
        {icon} <p className="text-sm">{label}</p>
      </div>
    </Link>
  );
};
