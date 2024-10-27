import { LayoutDashboard } from "lucide-react";

export const Header = () => {
  return (
    <header className="bg-bc-blue-400 text-white py-4 border-b-4 border-bc-blue-200">
      <div className="container">
        <div className="font-bold text-lg flex items-center gap-2">
          <LayoutDashboard />
          <span>
            BlueCollab<span className="text-bc-blue-200">.</span>
          </span>
        </div>
      </div>
    </header>
  );
};
