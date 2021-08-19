import { useEffect, useRef, useState } from "react";
import { MenuBar } from "./menu/MenuBar";
import { Sidebar } from "./sidebar/Sidebar";
import { ChildrenProps } from "../interfaces/Childen";
import { Dashboard } from "./workspace/Dashboard";

export const Layout = ({ children }: ChildrenProps) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  // console.log(isSidebarOpen);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // console.log(wrapperRef);

  const handleSideBar = () => {
    isSidebarOpen !== true ? setIsSidebarOpen(true) : setIsSidebarOpen(false);
  };
  const ClickOut = (ref: any) => {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: { target: any }) {
        if (ref.current && !ref.current.contains(event.target)) {
          if (screen.width < 640) setIsSidebarOpen(false)
          // screen.width < 640 ? setIsSidebarOpen(false) : setIsSidebarOpen(true);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };

  ClickOut(wrapperRef);

  return (
    <div className='w-full flex flex-row'>
      <Sidebar
        refer={wrapperRef}
        className={`${
          isSidebarOpen !== true ? "hidden " : "block z-50 fixed  md:static"
        }`}
      />
      <section className='w-full flex flex-col'>
        <MenuBar active={handleSideBar} />
        <Dashboard>{children}</Dashboard>
      </section>
    </div>
  );
};
