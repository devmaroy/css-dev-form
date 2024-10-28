import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-bc-gray-100 min-h-screen">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
