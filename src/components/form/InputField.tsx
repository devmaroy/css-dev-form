import { InputWrapper } from "@/components/form/InputWrapper";
import { BaseInputFieldProps } from "@/types";
import { UseFormRegister } from "react-hook-form";

interface InputFieldProps extends BaseInputFieldProps {
  register: UseFormRegister<any>;
}

export const InputField = ({
  name,
  type = "text",
  label,
  placeholder = "",
  withAsterisk = false,
  register,
  error,
  icon,
}: InputFieldProps) => {
  return (
    <InputWrapper
      name={name}
      label={label}
      withAsterisk={withAsterisk}
      error={error}
      icon={icon}
    >
      <input
        type={type}
        id={name}
        {...register(name)}
        placeholder={placeholder}
        className="appearance-none focus:outline-none focus:ring-0 placeholder-bc-gray-200 w-full px-3.5 py-3.5 rounded-md"
      />
    </InputWrapper>
  );
};
