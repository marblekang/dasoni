import { WrapperWithChildren } from "@/type/layout";

const Layout = ({ children }: WrapperWithChildren) => {
  return <div className="w-full min-h-screen relative">{children}</div>;
};

export default Layout;
