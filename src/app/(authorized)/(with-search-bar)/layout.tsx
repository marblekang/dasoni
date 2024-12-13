import HeaderSearchBar from "@/components/headers/search-bar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className="relative">
      <HeaderSearchBar />
      <main
        className="w-full bg-[#FFFCFD]"
        style={{ height: "calc(100vh - 4rem)" }}
      >
        {children}
      </main>
    </div>
  );
};

export default Layout;
