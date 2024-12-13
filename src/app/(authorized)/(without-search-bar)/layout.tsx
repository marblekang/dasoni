import HeaderMain from "@/components/headers/main";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className="bg-white shadow-md  h-full w-full relative">
      <HeaderMain />
      <main className="h-[calc(100%-64px)]">{children}</main>
    </div>
  );
};

export default Layout;
