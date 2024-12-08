import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <div className="bg-white shadow-md  h-full w-full relative ">
      <header className="h-10 flex items-center bg-gray-300">
        {/* header */}
        <div className="flex justify-center w-full ">Header</div>
      </header>
      <main className="pb-10 overflow-y-scroll scrollbar-hide  ">
        {children}
      </main>
      {/* footer */}
      <footer className="h-10 absolute w-full bottom-0 left-0 flex justify-center items-center bg-gray-300">
        Footer
      </footer>
    </div>
  );
};

export default Layout;
