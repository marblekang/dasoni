import { WrapperWithChildren } from "@/type/layout";

const Layout = ({ children }: WrapperWithChildren) => {
  return <div className="w-full h-full relative">{children}</div>;
};

export default Layout;
