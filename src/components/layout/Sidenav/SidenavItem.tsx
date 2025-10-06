import clsx from "clsx";
import type { LucideProps } from "lucide-react";
import { Link } from "react-router-dom";

const SidenavItem = ({
  icon: Icon,
  label,
  link,
  isActive,
}: {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  label: string;
  link: string;
  isActive: boolean;
}) => {
  return (
    <Link to={link}>
      <div
        className={clsx(
          "h-24 flex flex-col items-center justify-center bg-background cursor-pointer",
          {
            "bg-white border-2 border-border border-r-0": isActive,
            "hover:brightness-95 transition-[filter] border-r-2 border-border":
              !isActive,
          }
        )}
      >
        <Icon
          className={clsx("transition-all", {
            "scale-120 -ml-[3px]": isActive,
          })}
        />{" "}
        <p className={clsx({ "text-sm": !isActive, "text-lg": isActive })}>
          {label}
        </p>
      </div>
    </Link>
  );
};

export default SidenavItem;
