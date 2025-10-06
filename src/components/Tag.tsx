import clsx from "clsx";
import type { ReactNode } from "react";

const Tag = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={clsx(
        "font-bold text-white px-4 py-1 text-xs rounded-sm",
        { "bg-secondary": !className?.includes("bg-") },
        className
      )}
    >
      {children}
    </div>
  );
};

export default Tag;
