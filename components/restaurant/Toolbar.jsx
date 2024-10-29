"use client";

import { usePathname } from "next/navigation";

const Toolbar = () => {
  const path = usePathname();
  const pageNames = [
    { name: "Pending Orders", route: "/restaurant/orders" },
    { name: "Completed Orders", route: "/restaurant/orders/completed" },
    { name: "Packed Orders", route: "/restaurant/orders/packed" },
    { name: "Catalog", route: "/restaurant/catalog" },
  ];

  return (
    <div className="w-full py-3 flex justify-between items-center px-5 border-b-2 border-grey-light-3">
      {/* Page Title */}
      <h3 className="font-semibold text-3xl">
        {pageNames.find((elem) => elem.route === path)?.name}
      </h3>

      {/* Toolbar Actions */}
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="flex items-center border-grey-medium border-2 rounded-full overflow-hidden">
          <input
            type="text"
            required
            placeholder="Search"
            className="py-2 px-4 outline-none"
          />
          <button className="bg-red-500 px-4 py-2 h-10 text-white rounded-r-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>

        {/* Sort Button */}
        <button className="flex items-center gap-2 px-4 py-2 bg-grey-light-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h10m-6 6h6"
            />
          </svg>
          Sort
        </button>

        {/* Filter Button */}
        <button className="flex items-center gap-2 px-4 py-2 bg-grey-light-1 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707v5.172a1 1 0 01-1.707.707l-2-2A1 1 0 019 18.172V13a1 1 0 00-.293-.707L2.293 6.707A1 1 0 012 6V4z"
            />
          </svg>
          Filters
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
