"use client";
import Sidebar from "@components/restaurant/Sidebar";
import { usePathname } from "next/navigation";

export default function RestaurantLayout({ children }) {
  const path=usePathname();
  const noSideBarPaths=["/register"];
  const resetLayout=noSideBarPaths.includes(path);

  return <div>{children}</div>;
    {/*<div className="wrapper grid grid-cols-[1fr_3fr] relative gap-4">
      {!resetLayout && <Sidebar/>}
      {children}
    </div>
  );*/}
}
