import Icon from "@/components/ui/Icon";
import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "medium" | "large";
  fullWidth?: boolean;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  isPending?: boolean;
  pendingText?: string;
}

export const Button = ({
  size = "medium",
  fullWidth = false,
  children,
  className,
  type = "button",
  isPending = false,
  pendingText = "Loading...",
  disabled,
  ...props
}: ButtonProps) => {
  const sizeClasses = {
    small: "px-3 py-1.5 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={classNames(
        "font-semibold rounded-md focus:ring-bc-300 text-white bg-bc-blue-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2",
        sizeClasses[size],
        className,
        {
          "hover:bg-bc-blue-400": !disabled,
        },
        { "opacity-50 cursor-not-allowed": disabled },
        { "w-full": fullWidth }
      )}
      type={type}
      disabled={disabled}
      {...props}
    >
      {isPending ? (
        <span className="flex gap-2 items-center">
          {pendingText}

          <Icon name="loader-circle" className="mr-2 h-4 w-4 animate-spin" />
        </span>
      ) : (
        children
      )}
    </button>
  );
};
