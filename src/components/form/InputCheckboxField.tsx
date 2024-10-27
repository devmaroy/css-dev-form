import { BaseInputFieldProps } from "@/types";
import classNames from "classnames";
import { Check } from "lucide-react";
import { Control, useController } from "react-hook-form";

interface InputCheckboxFieldProps extends BaseInputFieldProps {
  control: Control<any>;
}

export const InputCheckboxField = ({
  name,
  label,
  className = "",
  withAsterisk = false,
  control,
  error,
}: InputCheckboxFieldProps) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    defaultValue: false,
  });

  return (
    <div className={classNames("flex flex-col", className)}>
      <div className="flex items-center gap-2">
        <div className="relative w-5 h-5 flex-shrink-0">
          <input
            type="checkbox"
            id={name}
            checked={!!value}
            onChange={(e) => onChange(e.target.checked)}
            className={classNames(
              "text-bc-blue-400 appearance-none placeholder-bc-gray-200 w-full h-full border leading-tight border-bc-gray-200 rounded-md focus:outline-none focus:ring-1 transition-all focus:ring-bc-gray-300 focus:border-bc-gray-300",
              className,
            )}
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <Check
              className={classNames("w-3 h-3 text-bc-blue-400", {
                hidden: !value,
              })}
              strokeWidth={3}
            />
          </div>
        </div>
        <label htmlFor={name} className="font-medium text-bc-blue-400">
          {label} {withAsterisk && <span className="text-red-500">*</span>}
        </label>
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
