import clsx from "clsx";
import type { ReactNode } from "react";

const Button = ({
  children,
  variant = "primary",
  className,
}: {
  children: ReactNode;
  variant?: "primary" | "danger";
  className?: string;
}) => {
  return (
    <button
      type="button"
      className={clsx(
        "flex gap-2 items-center text-white px-3 py-2 rounded text-sm",
        {
          "bg-blue-400 hover:bg-blue-500": variant === "primary",
          "bg-red-500 hover:bg-red-400": variant === "danger",
        },
        className
      )}
    >
      {children}
    </button>
  );
};

export default Button;
