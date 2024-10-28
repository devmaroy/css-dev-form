import { ElementType, ReactNode } from "react";
import classNames from "classnames";

interface PanelProps {
  children: ReactNode;
  className?: string;
  tag?: ElementType; // Allows passing in 'aside', 'section', 'div', etc.
}

export const Panel = ({
  children,
  className = "",
  tag: Tag = "div",
}: PanelProps) => {
  return (
    <Tag
      className={classNames(
        "bg-white rounded-lg border border-bc-blue-100 p-6",
        className
      )}
    >
      {children}
    </Tag>
  );
};
