import { InputWrapper } from "@/components/form/InputWrapper";
import DatePicker from "react-datepicker";
import { Control, useController } from "react-hook-form";

import "react-datepicker/dist/react-datepicker.css";

import { BaseInputFieldProps } from "@/types";

interface InputDatePickerProps extends BaseInputFieldProps {
  control: Control<any>;
}

export const InputDatePicker = ({
  name,
  label,
  placeholder = "",
  withAsterisk = false,
  control,
  error,
}: InputDatePickerProps) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    defaultValue: null,
  });

  const handleDateChange = (date: Date | null) => {
    if (date) {
      // Set date to UTC midnight
      const utcDate = new Date(
        Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()),
      );
      onChange(utcDate);
    } else {
      onChange(null);
    }
  };

  return (
    <InputWrapper
      name={name}
      label={label}
      withAsterisk={withAsterisk}
      error={error}
      icon="calendar"
    >
      <DatePicker
        id={name}
        dateFormat="dd.MM.yyyy"
        selected={value}
        onChange={handleDateChange}
        placeholderText={placeholder}
        className="appearance-none focus:outline-none focus:ring-0 placeholder-bc-gray-200 w-full px-3.5 py-3.5 rounded-md"
        wrapperClassName="w-full"
      />
    </InputWrapper>
  );
};
