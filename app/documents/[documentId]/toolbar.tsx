"use client";

import {
  BoldIcon,
  ItalicIcon,
  LucideIcon,
  StrikethroughIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ToolbarButtonProps {
  onClick: () => void;
  icon: LucideIcon;
  isActive?: boolean;
}

const ToolbarButton = ({
  onClick,
  isActive,
  icon: Icon,
}: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-6 min-w-6 flex justify-center items-center rounded-sm hover:bg-neutral-200/80",
        isActive ? "bg-neutral-200/30" : ""
      )}
    >
      <Icon className="size-4" />
    </button>
  );
};

const Toolbar = () => {
  const sections: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
  }[][] = [
    [
      {
        label: "Bold",
        icon: BoldIcon,
        onClick: () => {},
      },
      {
        label: "Italic",
        icon: ItalicIcon,
        onClick: () => {},
      },
      {
        label: "Underline",
        icon: UnderlineIcon,
        onClick: () => {},
      },
      {
        label: "Strikethrough",
        icon: StrikethroughIcon,
        onClick: () => {},
      },
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () => console.log("Undo"),
      },
    ],
  ];

  return (
    <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-3xl min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
      {sections.map((section, i) => (
        <div key={i} className="flex items-center gap-x-2">
          {section.map(({ label, icon, onClick }, i) => (
            <ToolbarButton key={i} icon={icon} onClick={onClick} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Toolbar;
