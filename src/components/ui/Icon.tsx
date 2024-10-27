import { lazy, Suspense, useMemo } from "react";
import { LucideProps } from "lucide-react";
import dynamicIconImports from "lucide-react/dynamicIconImports";

const fallback = <div style={{ background: "#fff", width: 24, height: 24 }} />;

export type IconName = keyof typeof dynamicIconImports;

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof dynamicIconImports;
}

const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = useMemo(() => lazy(dynamicIconImports[name]), [name]);

  return (
    <Suspense fallback={fallback}>
      <LucideIcon {...props} />
    </Suspense>
  );
};

export default Icon;
