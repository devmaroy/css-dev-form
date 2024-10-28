import Icon, { IconName } from "@/components/ui/Icon";
import classNames from "classnames";
import { ReactNode } from "react";

interface TitleProps {
  icon?: IconName;
  children: ReactNode;
  className?: string;
}

export const Title = ({ icon, className = "", children }: TitleProps) => {
  return (
    <h2
      className={classNames(
        "font-bold text-bc-blue-400 text-lg flex items-center gap-2",
        className
      )}
    >
      {icon && <Icon name={icon} className="text-bc-blue-200 flex-shrink-0" />}
      {children}
    </h2>
  );
};
