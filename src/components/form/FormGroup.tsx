import { ReactNode } from "react";

interface FormGroupProps {
  children: ReactNode;
}

export const FormGroup = ({ children }: FormGroupProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{children}</div>
  );
};
