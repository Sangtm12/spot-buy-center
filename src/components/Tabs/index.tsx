import clsx from "clsx";
import { useState, type ReactNode } from "react";

const Tabs = ({
  tabs = [],
  className,
}: {
  tabs: { label: string; content: ReactNode }[];
  className?: string;
}) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0].label || "");

  return (
    <div className={clsx("flex flex-col gap-2", className)}>
      <div className={clsx("flex border-b border-border")}>
        {tabs.map((tab, index: number) => (
          <button
            key={index}
            className={clsx("px-6 py-2 -mb-[1px] cursor-pointer", {
              "bg-white border border-border border-b-0 font-semibold":
                selectedTab === tab.label,
              "bg-white hover:brightness-95 transition-[filter] border-b border-border":
                selectedTab !== tab.label,
            })}
            onClick={() => setSelectedTab(tab.label)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="flex-1 border border-border rounded-sm p-2 min-h-0">
        {tabs.find((tab) => tab.label === selectedTab)?.content}
      </div>
    </div>
  );
};

export default Tabs;
