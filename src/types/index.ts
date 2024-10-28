import { IconName } from "@/components/ui/Icon";

export interface BaseInputFieldProps {
  name: string;
  type?: string;
  label: string;
  placeholder?: string;
  withAsterisk?: boolean;
  className?: string;
  error?: string;
  icon?: IconName;
}
