import { InputWrapper } from "@/components/form/InputWrapper";
import { BaseInputFieldProps } from "@/types";
import { UseFormRegister } from "react-hook-form";

interface InputTextAreaFieldProps extends BaseInputFieldProps {
  register: UseFormRegister<any>;
}

export const InputTextAreaField = ({
  name,
  label,
  placeholder = "",
  withAsterisk = false,
  register,
  error,
}: InputTextAreaFieldProps) => {
  return (
    <InputWrapper
      name={name}
      label={label}
      withAsterisk={withAsterisk}
      error={error}
    >
      <textarea
        id={name}
        {...register(name)}
        placeholder={placeholder}
        className="appearance-none focus:outline-none focus:ring-0  w-full placeholder-bc-gray-200 px-3.5 py-3.5 rounded-md"
      />
    </InputWrapper>
  );
};
