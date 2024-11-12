"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@providers/UserAuthProvider";

const ManagementSidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility
  const path = usePathname();
  const { auth } = useAuth();

  const toggleSidebar = () => setIsOpen(!isOpen); // Toggle sidebar visibility

  const navs = [
    {
      name: "Dashboard",
      href: "/management/dashboard",
      icon: "/assets/icons/dashboard.png",
      iconActive: "/assets/icons/dashboard-active.png",
    },
    {
      name: "Email",
      href: "/management/email",
      icon: "/assets/icons/email.png",
      iconActive: "/assets/icons/email-active.png",
    },
    {
      name: "Delivery",
      href: "/management/delivery",
      icon: "/assets/icons/motorbike.png",
      iconActive: "/assets/icons/motorbike-active.png",
    },
    {
      name: "Partner Requests",
      href: "/management/partner-requests",
      icon: "/assets/icons/store.png",
      iconActive: "/assets/icons/store-active.png",
    },
    {
      name: "Queries",
      href: "/management/queries",
      icon: "/assets/icons/question.png",
      iconActive: "/assets/icons/question-active.png",
    },
  ];

  const isActive = (href) =>
    path === href ? "text-danger-blue font-bold hover:none" : "";

  return (
    <>
      {/* Toggle button for mobile screens */}
      <button
        className="lg:hidden fixed left-0 z-50 bg-accent-blue py-2 px-3 rounded-r-full"
        onClick={toggleSidebar}
      >
        {isOpen ? (
          "Close"
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        )}
      </button>

      {/* Overlay for smaller screens */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } lg:hidden`}
        onClick={toggleSidebar}
      ></div>

      {/* Sidebar Container */}
      <div
        className={`fixed top-0 left-0 h-full lg:min-w-max bg-white z-50 w-80 p-6 transform transition-transform pb-10 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:flex lg:flex-col lg:w-64`}
      >
        <div className="">
          <div className="py-8 flex flex-col gap-3 justify-center items-center">
            <Image
              src="/assets/images/snape.png"
              width={100}
              height={100}
              alt="profile image"
              className="rounded-full border-4 border-secondary-blue aspect-square object-cover object-top"
            />
            <p className="font-extrabold text-2xl text-danger-blue tracking-wide">
              {auth.user.name}
            </p>
            <p className="font-medium text-xl text-grey-medium">
              Management Admin
            </p>
          </div>
          <div className="py-4 max-w-80">
            <ul className="flex flex-col gap-5 text-xl font-extralight">
              {navs.map((navItem) => (
                <li
                  key={navItem.name}
                  className={`py-2 px-5 ${isActive(
                    navItem.href
                  )} rounded-md font-semibold`}
                >
                  <Image
                    src={
                      path === navItem.href ? navItem.iconActive : navItem.icon
                    }
                    width={30}
                    height={30}
                    className={`${
                      path !== navItem.href && "opacity-60"
                    } inline-block p-1 mr-3`}
                    alt={navItem.name}
                  />
                  <Link
                    className={`${
                      path === navItem.href
                        ? "cursor-auto"
                        : "hover:scale-125 hover:font-bold"
                    } transition-all transform-gpu`}
                    href={navItem.href}
                  >
                    {navItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {isOpen && (
            <button
              onClick={toggleSidebar}
              className="absolute lg:hidden top-4 right-4 rounded-full p-3 bg-accent-blue"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default ManagementSidebar;
