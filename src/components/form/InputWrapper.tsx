import { ReactNode } from "react";

import Icon from "@/components/ui/Icon";
import { BaseInputFieldProps } from "@/types";
import classNames from "classnames";

interface InputWrapperProps extends BaseInputFieldProps {
  children: ReactNode;
}

export const InputWrapper = ({
  name,
  label,
  withAsterisk = false,
  className = "",
  children,
  error,
  icon,
}: InputWrapperProps) => {
  return (
    <div className={classNames("flex flex-col space-y-1", className)}>
      <label htmlFor={name} className="font-medium text-bc-blue-400">
        {label} {withAsterisk && <span className="text-bc-red-400">*</span>}
      </label>

      <div
        className={classNames(
          "relative flex items-center w-full border rounded-md shadow-sm transition-all ",
          "text-bc-blue-400 leading-tight focus-within:outline-none focus-within:ring-2",
          error
            ? "border-red-500 focus-within:ring-red-500"
            : "border-bc-gray-200 focus-within:ring-bc-gray-300",
          className,
        )}
      >
        <div
          className={classNames("w-full", {
            "text-bc-red-400": error,
          })}
        >
          {children}
        </div>

        {icon && (
          <div className="flex pr-3.5 items-center pointer-events-none">
            <Icon name={icon} className="text-bc-gray-200" size={20} />
          </div>
        )}
      </div>

      {error && <p className="text-bc-red-400 text-sm">{error}</p>}
    </div>
  );
};
