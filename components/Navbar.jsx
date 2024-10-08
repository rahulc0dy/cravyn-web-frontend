"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import HomeNav from "@components/HomeNav";

const Navbar = () => {
  const path = usePathname();

  if (path == "/") return <HomeNav />;
  else
    return (
      <nav className="max-w-screen-2xl m-auto rounded-xl bg-primary-red sticky top-3 z-50 p-4 shadow-2xl drop-shadow-lg">
        <div className="flex justify-between items-center mx-auto flex-wrap">
          <div className="flex items-center gap-2 text-white">
            <Image src="/assets/images/CRAVYN.png" width={40} height={40} />
            <h2 className="text-xl font-black">CRAVYN</h2>
          </div>
          <div className="flex gap-16 items-center font-semibold text-white">
            <Link className="tab" href="#">
              Home
            </Link>
            <Link className="tab" href="#">
              Dashboard
            </Link>
            <Link className="tab" href="#">
              About
            </Link>
            <Link className="tab" href="#">
              Help
            </Link>
          </div>
          <div className="flex gap-12">
            <div className="flex items-center relative">
              <input
                type="text"
                placeholder="Search"
                className="px-5 py-2 rounded-full"
              ></input>
              <Link className="right-2 absolute" href="#">
                <Image
                  src="/assets/icons/search.svg"
                  width={30}
                  height={30}
                ></Image>
              </Link>
            </div>
            <div className="p-2 rounded-md bg-rose-950 text-white">
              <Link className="tab" href="#">
                Add Restuarant
              </Link>
            </div>
            <div className="p-2 w-10 h-10 flex items-center justify-center rounded-full bg-accent-yellow">
              A
            </div>
          </div>
        </div>
      </nav>
    );
};

export default Navbar;
