"use client";

import {Navbar} from "@/components/Navbar/Navbar";
import SideBar from "@/components/Sidebar/Sidebar";
import { AppDispatch } from "@/store";
import { fetchComponents } from "@/store/slices/ComponentSlice";
import { usePathname } from "next/navigation";
import { Children, useEffect } from "react";
import { useDispatch } from "react-redux";



const LayoutWrapper = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>)  => {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
      dispatch(fetchComponents()); // Carga los datos cuando se monta LayoutWrapper
    }, [dispatch]);
  const pathname = usePathname();

  // Solo mostramos el SideBar en las rutas "/docs" y "/components"
  const showSidebar = pathname.startsWith("/docs") || pathname.startsWith("/allcomponents") || pathname.startsWith("/components") ;

  return (
    <div className="">
      <div className="w-full">

      <Navbar />
      </div>

      <div className="flex">
        <div>
      {showSidebar && <SideBar />}

        </div>
        <div>
          {children}
        </div>

      </div>
    </div>
  );
};

export default LayoutWrapper;
