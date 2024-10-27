"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const path = usePathname();

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
  const isActive = (href) =>
    path === href ? "bg-accent-yellow-light font-semibold hover:none" : "";

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
              className={`py-2 px-4 ${isActive(navItem.href)} rounded-md`}
            >
              <Link
                className={
                  path === navItem.href ? "" : "hover:text-xl hover:font-bold"
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
              className={`py-2 px-4 ${isActive(navItem.href)} rounded-md`}
            >
              <Link
                className={
                  path === navItem.href ? "" : "hover:text-xl hover:font-bold"
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
  );
};

export default Sidebar;
