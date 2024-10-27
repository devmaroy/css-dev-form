import { InputWrapper } from "@/components/form/InputWrapper";
import Icon from "@/components/ui/Icon";
import { BaseInputFieldProps } from "@/types";
import classNames from "classnames";
import { Control, useController } from "react-hook-form";
import Select, { components, DropdownIndicatorProps } from "react-select";

interface InputSelectFieldProps extends BaseInputFieldProps {
  control: Control<any>;
  options: Option[];
}

interface Option {
  value: string;
  label: string;
}

const CustomDropdownIndicator = (props: DropdownIndicatorProps<Option>) => (
  <components.DropdownIndicator {...props}>
    <Icon
      name="chevrons-up-down"
      className="text-bc-gray-200 w-5 h-5 p-0"
      aria-hidden="true"
    />
  </components.DropdownIndicator>
);

export const InputSelectField = ({
  name,
  label,
  placeholder = "",
  withAsterisk = false,
  control,
  options,
  error,
}: InputSelectFieldProps) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    defaultValue: null,
  });

  return (
    <InputWrapper
      name={name}
      label={label}
      withAsterisk={withAsterisk}
      error={error}
    >
      <Select<Option>
        options={options}
        value={options.find((option) => option.value === value) || null}
        onChange={(selectedOption) => onChange(selectedOption?.value)}
        placeholder={placeholder}
        unstyled
        components={{
          IndicatorSeparator: () => null, // Remove separator
          DropdownIndicator: CustomDropdownIndicator,
        }}
        classNames={{
          control: () =>
            classNames(
              "appearance-none p-0 m-0 w-full !min-h-[0px] px-3.5 py-3.5 rounded-md",
            ),
          placeholder: () => "text-bc-gray-200",
          input: () => "text-bc-blue-400",

          menu: () =>
            "mt-1 border border-bc-gray-200 rounded-md shadow-lg bg-white overflow-hidden absolute top-[500px]",
          menuList: () => "py-1",
          option: (state) =>
            classNames(
              "px-3.5 py-2.5 text-bc-blue-400 cursor-pointer",
              state.isFocused && "bg-bc-gray-100",
              state.isSelected && "bg-bc-gray-200",
            ),
          multiValue: () => "bg-bc-gray-100 rounded",
          multiValueLabel: () => "px-2 py-1 text-bc-blue-400",
          multiValueRemove: () => "px-1 hover:bg-bc-gray-200 rounded-r",

          clearIndicator: () =>
            "text-bc-gray-200 hover:text-bc-gray-300 cursor-pointer",
          dropdownIndicator: () =>
            "text-bc-gray-200 hover:text-bc-gray-300 cursor-pointer ",
          indicatorSeparator: () => "bg-bc-gray-200",
          noOptionsMessage: () => "text-bc-gray-200 p-3.5",
        }}
      />
    </InputWrapper>
  );
};
