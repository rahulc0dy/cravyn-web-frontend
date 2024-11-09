"use client";

<<<<<<< HEAD
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const path = usePathname();
=======
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useAuth } from "@providers/RestaurantAuthProvider";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility
  const path = usePathname();
  const { auth } = useAuth();

  const { name: restaurantName, restaurant_id } = auth.user ?? {
    name: null,
    restaurant_id: null,
  };

  const toggleSidebar = () => setIsOpen(!isOpen); // Toggle sidebar visibility
>>>>>>> e26789f0813acc2ca75013750270da3ee7fad2db

  const orderNavs = [
    { name: "Pending", href: "/restaurant/orders" },
    { name: "Completed", href: "/restaurant/orders/completed" },
    { name: "Packed", href: "/restaurant/orders/packed" },
  ];

  const statsNavs = [
    { name: "Orders", href: "/restaurant/order-stats" },
    { name: "Reviews", href: "/restaurant/reviews" },
    { name: "Customers", href: "/restaurant/customers" },
  ];

  const catalogNavs = [
    { name: "Current Catalog", href: "/restaurant/catalog" },
    { name: "Add New Item", href: "/restaurant/catalog/add" },
    { name: "Update Existing Item", href: "/restaurant/catalog/update" },
    { name: "Discounts", href: "/restaurant/catalog/discounts" },
  ];
<<<<<<< HEAD
  const isActive = (href) =>
    path === href ? "bg-accent-yellow-light font-semiboldhover:none" : "";

  return (
    <div className="sticky py-10">
      <div className="py-4 max-w-80">
        <h4 className="text-xl font-semibold pb-2 border-b-2 border-grey-light-3 mb-2">
          Orders
        </h4>
        <ul className="flex flex-col gap-2 text-lg font-extralight">
          {orderNavs.map((navItem) => (
            <li
              key={navItem.name}
              className={`py-2 px-4 ${isActive(navItem.href)} rounded-md`}
            >
              <Link className={path===navItem.href?"cursor-auto":"hover:text-xl hover:font-bold"} href={navItem.href}>{navItem.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="py-4 max-w-80">
        <h4 className="text-xl font-semibold pb-2 border-b-2 border-grey-light-3 mb-2">
          Your Stats
        </h4>
        <ul className="flex flex-col gap-2 text-lg font-extralight">
          {statsNavs.map((navItem) => (
            <li
              key={navItem.name}
              className={`py-2 px-4 ${isActive(navItem.href)} rounded-md`}
            >
              <Link className={path===navItem.href?"":"hover:text-xl hover:font-bold"} href={navItem.href}>{navItem.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="py-4 max-w-80">
        <h4 className="text-xl font-semibold pb-2 border-b-2 border-grey-light-3 mb-2">
          Catalog
        </h4>
        <ul className="flex flex-col gap-2 text-lg font-extralight">
          {catalogNavs.map((navItem) => (
            <li
              key={navItem.name}
              className={`py-2 px-4 ${isActive(navItem.href)} rounded-md`}
            >
              <Link className={path===navItem.href?"":"hover:text-xl hover:font-bold"} href={navItem.href}>{navItem.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
=======

  const isActive = (href) =>
    path === href ? "bg-[#C0FFD5] font-semibold hover:none" : "";

  return (
    <>
      {/* Toggle button for mobile screens */}
      <button
        className="lg:hidden fixed left-0 z-50 bg-accent-green py-2 px-3 rounded-r-full"
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
        className={`fixed top-0 left-0 h-full lg:min-w-full bg-white z-50 w-72 p-6 transform transition-transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:flex lg:flex-col lg:w-64`}
      >
        <div className="">
          <div className="pb-4">
            <h2 className="text-2xl font-bold text-teal-600">
              {restaurantName}
            </h2>
            <p className=" text-grey-medium">{restaurant_id}</p>
          </div>
          <div className="py-4 max-w-80">
            <h4 className="text-xl font-semibold pb-2 border-b-2 border-grey-light-3 mb-2">
              Orders
            </h4>
            <ul className="flex flex-col gap-2 text-lg font-extralight">
              {orderNavs.map((navItem) => (
                <li
                  key={navItem.name}
                  className={`py-2 px-5 ${isActive(navItem.href)} rounded-md`}
                >
                  <Link
                    className={
                      path === navItem.href
                        ? "cursor-auto"
                        : "hover:text-xl hover:font-bold"
                    }
                    href={navItem.href}
                  >
                    {navItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="py-4 max-w-80">
            <h4 className="text-xl font-semibold pb-2 border-b-2 border-grey-light-3 mb-2">
              Your Stats
            </h4>
            <ul className="flex flex-col gap-2 text-lg font-extralight">
              {statsNavs.map((navItem) => (
                <li
                  key={navItem.name}
                  className={`py-2 px-5 ${isActive(navItem.href)} rounded-md`}
                >
                  <Link
                    className={
                      path === navItem.href
                        ? ""
                        : "hover:text-xl hover:font-bold"
                    }
                    href={navItem.href}
                  >
                    {navItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="py-4 max-w-80">
            <h4 className="text-xl font-semibold pb-2 border-b-2 border-grey-light-3 mb-2">
              Catalog
            </h4>
            <ul className="flex flex-col gap-2 text-lg font-extralight">
              {catalogNavs.map((navItem) => (
                <li
                  key={navItem.name}
                  className={`py-2 px-5 ${isActive(navItem.href)} rounded-md`}
                >
                  <Link
                    className={
                      path === navItem.href
                        ? ""
                        : "hover:text-xl hover:font-bold"
                    }
                    href={navItem.href}
                  >
                    {navItem.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
>>>>>>> e26789f0813acc2ca75013750270da3ee7fad2db
  );
};

export default Sidebar;
