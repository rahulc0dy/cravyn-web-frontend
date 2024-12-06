"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useQuery } from "@tanstack/react-query";
import { getDashboard } from "@services/businessTeamServices";
import RestaurantSalesCharts from "@components/business/RestaurantSalesCharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const mixedOptions = {
  chart: { toolbar: { show: false } },
  xaxis: { categories: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"] },
  stroke: { width: [0, 2] },
  colors: ["#7C3AED", "#6366F1"],
};
const mixedSeries = [
  {
    name: "Active Customers",
    type: "column",
    data: [4400, 5000, 6500, 7000, 6300, 3700, 4700],
  },
  { name: "Conversion Rate", type: "line", data: [14, 16, 18, 20, 22, 24] },
];

export default function BusinessDashboard() {
  const [isClient, setIsClient] = useState(false);
  const [year, setYear] = useState("2024");
  const [month, setMonth] = useState(null);
  const [day, setDay] = useState(null);
  const [restaurantId, setRestaurantId] = useState(null);
  const [restaurantName, setRestaurantName] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const dashboardRef = useRef();

  const {
    data: dashboardData,
    isSuccess,
    isError,
    isLoading,
    error: dashboardFetchError,
  } = useQuery({
    queryKey: ["business-dashboard", year, month, day],
    queryFn: () => getDashboard(year, month, day),
    refetchIntervalInBackground: false,
  });

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  const handlePrint = () => {
    const originalContent = document.body.innerHTML;

    const printableContent = dashboardRef.current.innerHTML;
    document.body.innerHTML = printableContent;

    window.print();

    document.body.innerHTML = originalContent;

    // Reload the page to reattach event listeners and scripts
    window.location.reload();
  };

  //Restaurant Wise Sales
  const restaurantNames =
    isSuccess &&
    dashboardData.data.totalSalesData.map((item) => item.restaurant_name);
  const totalSales =
    isSuccess &&
    dashboardData.data.totalSalesData.map((item) =>
      parseFloat(item.total_sales)
    );

  const restaurantSalesChartOptions = {
    chart: {
      type: "bar",
      toolbar: { show: false },
    },
    stroke: { width: [0, 2] },
    colors: ["#7C3AED", "#6366F1"],
    xaxis: {
      categories: restaurantNames,
      title: {
        text: "Restaurants",
      },
    },
    yaxis: {
      title: {
        text: "Total Sales (in Rs.)",
      },
    },
    tooltip: {
      y: {
        formatter: (value) => value.toFixed(2), // Format tooltip values
      },
    },
  };

  const restaurantSalesSeries = [
    {
      name: "Total Sales",
      data: totalSales,
    },
  ];

  // Monthly Sales
  const monthlyChartOptions = {
    chart: { toolbar: { show: false } },
    stroke: { curve: "smooth" },
    colors: ["#7C3AED"],
    xaxis: {
      categories: isSuccess
        ? dashboardData.data.monthlySales.map((item) => item.month)
        : ["01", "02", "03", "04", "05", "06", "07"],
    },
    dataLabels: { enabled: false },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100],
      },
    },
  };

  const monthlyChartSeries = [
    {
      name: "Monthly Sales",
      data: isSuccess
        ? dashboardData.data.monthlySales.map(
            (item) => item.monthly_total_sales
          )
        : [620, 500, 600, 430, 480, 580, 470],
    },
  ];

  // Daily Sales
  const days =
    isSuccess && dashboardData.data.dailySales.map((item) => item.day);
  const dailySales =
    isSuccess &&
    dashboardData.data.dailySales.map((item) => item.daily_total_sales);

  const dailySalesChartOptions = {
    chart: { toolbar: { show: false } },
    stroke: { curve: "smooth" },
    colors: ["#7C3AED"],
    xaxis: { categories: days },
    title: { text: "Performance", align: "left" },
  };
  const dailySalesChartSeries = [{ name: "Daily Sales", data: dailySales }];

  // Category Wise Sales
  const doughnutOptions = {
    chart: {
      type: "donut",
    },
    labels: isSuccess
      ? dashboardData.data.categorySales.map((item) => item.category)
      : ["Vegetarian", "Non Vegetarian", "Beverages"],
    colors: ["#7C3AED", "#6366F1", "#A78BFA"],
    legend: {
      position: "top",
      fontSize: "16px",
      markers: {
        shape: "square",
      },
    },
    title: {
      text: "Orders",
      align: "left",
    },
    dataLabels: {
      enabled: false,
    },
    plotOptions: {
      pie: {
        donut: {
          size: "45%",
        },
      },
    },
  };

  const doughnutSeries = isSuccess
    ? dashboardData.data.categorySales.map((item) => item.total_items_sold)
    : [26, 18, 19];

  //Restaurant Wise Sales Ranged

  const restaurants =
    isSuccess &&
    dashboardData.data.rangedSalesData.map((item) => item.restaurant_name);
  const rangedSales =
    isSuccess &&
    dashboardData.data.rangedSalesData.map((item) =>
      parseFloat(item.total_sales)
    );
  const rangedOrders =
    isSuccess &&
    dashboardData.data.rangedSalesData.map((item) =>
      parseInt(item.total_orders)
    );

  const restaurantRangedSalesOptions = {
    chart: { toolbar: { show: false } },
    xaxis: {
      categories: restaurants || [
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
        "Sun",
      ],
    },
    stroke: { width: [0, 3], curve: "smooth" },
    colors: ["#7C3AED", "#0EC5FF"],
    yaxis: [
      {
        title: {
          text: "Sales (₹)",
        },
        labels: {
          formatter: (value) => `₹${value.toFixed(2)}`,
        },
      },
      {
        opposite: true,
        title: {
          text: "Orders",
        },
        labels: {
          formatter: (value) => `${value} orders`,
        },
      },
    ],
    tooltip: {
      shared: true,
      y: [
        {
          formatter: (value) => `₹${value.toFixed(2)}`,
        },
        {
          formatter: (value) => `${value} orders`,
        },
      ],
    },
  };
  const restaurantRangedSalesSeries = [
    {
      name: "Sales",
      type: "column",
      data: rangedSales || [4400, 5000, 6500, 7000, 6300, 3700, 4700],
    },
    {
      name: "Orders",
      type: "line",
      data: rangedOrders || [14, 16, 18, 20, 22, 24],
    },
  ];

  const handleRestaurantSelect = (
    clickedRestaurantId,
    clickedRestaurantName
  ) => {
    setRestaurantId(clickedRestaurantId);
    setRestaurantName(clickedRestaurantName);
    setShowModal(true);
  };

  return (
    <>
      <div className="bg-accent-purple py-16" ref={dashboardRef}>
        <div className="wrapper rounded-2xl bg-white mx-auto transform">
          <div className="grid grid-cols-1 text-center gap-y-12 lg:grid-cols-[auto_1fr_auto] px-5 lg:px-10 pb-5 pt-10 border-b-2">
            <div className="text-4xl lg:text-6xl text-center lg:text-left font-extrabold text-primary-purple tracking-[1rem] lg:tracking-[3rem]">
              CRAVYN
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-2 lg:px-20">
              <div>
                <div className="flex gap-2 justify-center">
                  <Image
                    src="/assets/icons/group.png"
                    width={50}
                    height={50}
                    alt="customers"
                    className="w-auto h-5"
                  />
                  <p className="text-grey-medium opacity-60 font-extrabold tracking-wide">
                    Customers
                  </p>
                </div>
                <p className="text-secondary-purple text-xl md:text-3xl font-bold pl-6 tracking-widest">
                  {isLoading
                    ? "Loading..."
                    : isSuccess
                    ? dashboardData.data.totalUsers.total_customers
                    : "Unknown"}
                </p>
              </div>

              <div>
                <div className="flex gap-2 justify-center">
                  <Image
                    src="/assets/icons/plate-spoon-fork.png"
                    width={50}
                    height={50}
                    alt="restaurants"
                    className="w-auto h-5"
                  />
                  <p className="text-grey-medium opacity-60 font-extrabold tracking-wide">
                    Restaurants
                  </p>
                </div>
                <p className="text-secondary-purple text-xl md:text-3xl font-bold pl-6 tracking-widest">
                  {isLoading
                    ? "Loading..."
                    : isSuccess
                    ? dashboardData.data.totalUsers.total_restaurants
                    : "Unknown"}
                </p>
              </div>

              <div>
                <div className="flex gap-2 justify-center">
                  <Image
                    src="/assets/icons/motorbike.png"
                    width={50}
                    height={50}
                    alt="delivery"
                    className="w-auto h-5 opacity-30"
                  />
                  <p className="text-grey-medium opacity-60 font-extrabold tracking-wide">
                    Deliveries
                  </p>
                </div>
                <p className="text-secondary-purple text-xl md:text-3xl font-bold pl-6 tracking-widest">
                  {isLoading
                    ? "Loading..."
                    : isSuccess
                    ? dashboardData.data.totalUsers.total_delivery_partners
                    : "Unknown"}
                </p>
              </div>
            </div>

            <button
              onClick={handlePrint}
              className="px-5 lg:py-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-medium flex justify-center gap-2 text-left"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="align-bottom"
              >
                <path
                  d="M5.9375 2.67188C5.9375 1.85171 6.6025 1.1875 7.42188 1.1875H7.71875C8.50611 1.1875 9.26122 1.50028 9.81797 2.05703C10.3747 2.61378 10.6875 3.36889 10.6875 4.15625V5.64062C10.6875 6.46079 11.3525 7.125 12.1719 7.125H13.6562C14.4436 7.125 15.1987 7.43778 15.7555 7.99453C16.3122 8.55128 16.625 9.30639 16.625 10.0938V12.7656C16.625 13.585 15.96 14.25 15.1406 14.25H7.42188C7.02819 14.25 6.65064 14.0936 6.37226 13.8152C6.09389 13.5369 5.9375 13.1593 5.9375 12.7656V2.67188Z"
                  fill="white"
                />
                <path
                  d="M11.875 4.15625C11.8764 3.1576 11.5168 2.1921 10.8625 1.43767C12.1871 1.78597 13.3956 2.47988 14.3641 3.44841C15.3326 4.41695 16.0265 5.62535 16.3748 6.95004C15.6204 6.29572 14.6549 5.93611 13.6562 5.9375H12.1719C12.0931 5.9375 12.0176 5.90622 11.962 5.85055C11.9063 5.79487 11.875 5.71936 11.875 5.64063V4.15625ZM3.85937 4.75H4.75V12.7656C4.75 13.4743 5.0315 14.1539 5.53257 14.6549C6.03365 15.156 6.71325 15.4375 7.42187 15.4375H13.0625V16.3281C13.0625 17.1475 12.3975 17.8125 11.5781 17.8125H3.85937C3.46569 17.8125 3.08814 17.6561 2.80976 17.3777C2.53139 17.0994 2.375 16.7218 2.375 16.3281V6.23438C2.375 5.41421 3.04 4.75 3.85937 4.75Z"
                  fill="white"
                />
              </svg>

              <p className="font-bold lg:text-lg">Download Reports</p>
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_1.5fr] lg:grid-rows-[1fr_1.2]">
            <div className="relative row-span-2 lg:min-h-max min-h-[50rem]  ">
              <p className="text-3xl font-bold text-center mt-10 lg:mt-56">
                Annual Increments
              </p>
              <div className="flex justify-center">
                <div className="bg-tertiary-purple bg-opacity-80 w-1/5 z-30 absolute bottom-10 left-1/2 transform -translate-x-1/2 aspect-square rounded-full flex justify-center">
                  <p className="text-black font-bold lg:text-lg mt-5 tracking-wide">
                    <span className="text-danger-blue pr-1">₹</span>19K
                  </p>
                </div>
                <div className="bg-tertiary-purple bg-opacity-40 w-2/5 z-20 absolute bottom-10 left-1/2 transform -translate-x-1/2 aspect-square rounded-full flex justify-center">
                  <p className="text-black font-bold lg:text-lg mt-5 tracking-wide">
                    <span className="text-danger-blue pr-1">₹</span>12K
                  </p>
                </div>
                <div className="bg-tertiary-purple bg-opacity-20 w-3/5 z-10 absolute bottom-10 left-1/2 transform -translate-x-1/2 aspect-square rounded-full flex justify-center">
                  <p className="text-black font-bold lg:text-lg mt-5 tracking-wide">
                    <span className="text-danger-blue pr-1">₹</span>9K
                  </p>
                </div>
                <div className="bg-tertiary-purple bg-opacity-10 w-4/5 z-0 absolute bottom-10 left-1/2 transform -translate-x-1/2 aspect-square rounded-full flex justify-center">
                  <p className="text-black font-bold lg:text-lg mt-5 tracking-wide">
                    <span className="text-danger-blue pr-1">₹</span>7K
                  </p>
                </div>
              </div>
            </div>
            <div className="border-b-2 lg:border-r-2">
              {isLoading ? (
                "Loading"
              ) : (
                <Chart
                  className="mt-4"
                  options={doughnutOptions}
                  series={doughnutSeries}
                  type="donut"
                  width="375px"
                />
              )}
            </div>
            <div className="border-b-2 py-5">
              <div className="text-xl font-extrabold text-center">
                {isSuccess &&
                  Intl.NumberFormat("en-US", {
                    style: "currency",
                    currency: "INR",
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  }).format(dashboardData.data.monthlySales[0].total_sales)}
              </div>
              <div className="grid lg:grid-cols-[1fr_3.5fr] gap-x-6 m-3">
                <div className="grid lg:grid-rows-4 grid-cols-2 lg:grid-cols-1">
                  <button className="text-md font-semibold text-tertiary-purple">
                    Monthly
                  </button>
                  <button className="text-md font-semibold">Yearly</button>
                  <button className="text-md font-semibold">Weekly</button>
                  <button className="text-md font-semibold bg-purple-light-1 rounded-md">
                    Daily
                  </button>
                </div>
                <div>
                  {isSuccess ? (
                    <Chart
                      className=""
                      options={monthlyChartOptions}
                      series={monthlyChartSeries}
                      type="area"
                      width="100%"
                    />
                  ) : (
                    isLoading && "Loading"
                  )}
                </div>
              </div>
            </div>
            <div className="mt-6">
              {isSuccess ? (
                <Chart
                  options={dailySalesChartOptions}
                  series={dailySalesChartSeries}
                  type="line"
                  width="400px"
                />
              ) : isLoading ? (
                "Loading..."
              ) : (
                "Error"
              )}
            </div>
            <div>
              <p className="text-xl font-extrabold pl-6 pt-4">$965,000</p>
              <p className="text-sm text-grey-medium pl-6">
                Income of Feb 2024
              </p>
              <Chart
                options={mixedOptions}
                series={mixedSeries}
                type="line"
                width="400px"
              />
            </div>
          </div>

          <div className=" px-2 lg:px-16 py-8 border-t-2">
            <h5 className="text-4xl font-extrabold">
              Customer Metrics{" "}
              <span className="font-light text-gray-400 text-xl">
                {" "}
                ( dummy graph )
              </span>
            </h5>
            <div className="grid lg:grid-cols-[auto_1fr_auto] pt-4">
              <div className="grid grid-rows-3 text-xl">
                <button className="text-md font-semibold px-2">
                  <div className="flex gap-3">
                    <p>Acquisition</p>
                    {isSuccess &&
                    dashboardData.data.customerMetrics
                      .customer_acquisition_rate > 50 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="green"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="red"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
                        />
                      </svg>
                    )}
                    <p>
                      {isLoading
                        ? "??"
                        : isSuccess
                        ? dashboardData.data.customerMetrics
                            .customer_acquisition_rate
                        : "X"}
                      %
                    </p>
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
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </button>

                <button className="text-md font-semibold bg-purple-light-1 px-2">
                  <div className="flex gap-4">
                    <p>Retention</p>
                    {isSuccess &&
                    dashboardData.data.customerMetrics.customer_retention_rate >
                      50 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="green"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="red"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
                        />
                      </svg>
                    )}
                    <p>
                      {isLoading
                        ? "??"
                        : isSuccess
                        ? dashboardData.data.customerMetrics
                            .customer_retention_rate
                        : "X"}
                      %
                    </p>
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
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </button>

                <button className="text-md font-semibold px-2">
                  <div className="flex gap-3">
                    <p>Churn Rate</p>
                    {isSuccess &&
                    dashboardData.data.customerMetrics.churn_rate > 50 ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="green"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="red"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6 9 12.75l4.286-4.286a11.948 11.948 0 0 1 4.306 6.43l.776 2.898m0 0 3.182-5.511m-3.182 5.51-5.511-3.181"
                        />
                      </svg>
                    )}
                    <p>
                      {isLoading
                        ? "??"
                        : isSuccess
                        ? dashboardData.data.customerMetrics.churn_rate
                        : "X"}
                      %
                    </p>
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
                        d="m8.25 4.5 7.5 7.5-7.5 7.5"
                      />
                    </svg>
                  </div>
                </button>
              </div>
              <div className="flex justify-center items-center">
                <Chart
                  options={mixedOptions}
                  series={mixedSeries}
                  type="line"
                  width="250%"
                  height="200%"
                />
              </div>
              <div className="my-auto text-center lg:text-left py-4">
                <p className="text-xl font-bold">Active Customers</p>
                <p className="text-3xl text-secondary-purple font-bold tracking-widest">
                  {isLoading
                    ? "Loading..."
                    : isSuccess
                    ? dashboardData.data.totalUsers.total_customers
                    : "Unknown"}
                </p>
                <p className="text-xl font-bold mt-4">
                  Ongoing Orders{" "}
                  <span className="font-light text-gray-400 text-sm">
                    ( dummy )
                  </span>
                </p>
                <p className="text-3xl text-secondary-purple font-bold tracking-widest">
                  235
                </p>
              </div>
            </div>
          </div>

          <div className=" px-2 lg:px-16 py-8 border-t-2">
            <h5 className="text-4xl font-extrabold">Restaurant Sales</h5>
            <div className="grid lg:grid-cols-[auto_1fr_auto] pt-4">
              <div className="flex justify-center items-center">
                {isSuccess ? (
                  <Chart
                    options={restaurantSalesChartOptions}
                    series={restaurantSalesSeries}
                    type="bar"
                    width="300%"
                    height="300%"
                  />
                ) : (
                  isLoading && "Loading"
                )}
              </div>
              <div className="my-auto text-center lg:text-left py-4 mx-auto">
                <p className="text-xl font-bold">Total Restaurants</p>
                <p className="text-3xl text-secondary-purple font-bold tracking-widest">
                  {isLoading
                    ? "Loading..."
                    : isSuccess
                    ? dashboardData.data.totalUsers.total_restaurants
                    : "Unknown"}
                </p>
              </div>
            </div>
          </div>

          <div className=" px-2 lg:px-16 py-8 border-t-2">
            <select
              name="day"
              id="day-select"
              className="px-3 py-2 bg-gray-100 border border-gray-400 mr-2 rounded-md text-grey-dark-2"
              onChange={(e) => setDay(e.target.value)}
              value={day}
            >
              <option value="none">None</option>
              {[...Array(31)].map((_, i) => (
                <option key={i + 1} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </select>
            <select
              name="month"
              id="month-select"
              className="px-3 py-2 bg-gray-100 border border-gray-400 mr-2 rounded-md text-grey-dark-2"
              onChange={(e) => setMonth(e.target.value)}
              value={month}
            >
              <option value="none">None</option>
              {[
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ].map((month, index) => (
                <option key={index + 1} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
            <select
              name="year"
              id="year-select"
              className="px-3 py-2 bg-gray-100 border border-gray-400 mr-2 rounded-md text-grey-dark-2"
              onChange={(e) => setYear(e.target.value)}
              value={year}
            >
              <option value="none">None</option>
              {[2023, 2024, 2025].map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>

            <table className="table-auto w-full my-3 md:text-xl bg-purple-50 rounded-md overflow-clip">
              <thead className=" bg-secondary-purple text-white">
                <tr className="table-row">
                  <th className="px-2 py-2">Restaurant</th>
                  <th className="px-2 py-2">Total Orders</th>
                  <th className="px-2 py-2">Total Sales</th>
                </tr>
              </thead>
              <tbody className="">
                {isSuccess && dashboardData.data.rangedSalesData.length > 0 ? (
                  dashboardData.data.rangedSalesData.map((restaurant) => (
                    <tr
                      key={restaurant.restaurant_id}
                      className="table-row text-grey-dark-3 cursor-pointer"
                      onClick={() =>
                        handleRestaurantSelect(
                          restaurant.restaurant_id,
                          restaurant.restaurant_name
                        )
                      }
                    >
                      <td className="text-left border-2 border-accent-purple">
                        {restaurant.restaurant_name}
                      </td>
                      <td className="text-right border-2 border-accent-purple">
                        {restaurant.total_orders}
                      </td>
                      <td className="text-right border-2 border-accent-purple">
                        {Intl.NumberFormat("en-US", {
                          style: "currency",
                          currency: "INR",
                          minimumFractionDigits: 2,
                          maximumFractionDigits: 2,
                        }).format(restaurant.total_sales)}
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan="3"
                      className="text-center border-2 border-accent-purple"
                    >
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>

            {isSuccess ? (
              <Chart
                options={restaurantRangedSalesOptions}
                series={restaurantRangedSalesSeries}
                width="100%"
                height="100%"
              />
            ) : isLoading ? (
              "Loading..."
            ) : (
              "No data to show"
            )}
          </div>
        </div>
      </div>

      {showModal && (
        <RestaurantSalesCharts
          visible={showModal}
          closeFunction={() => setShowModal(false)}
          restaurantId={restaurantId}
          restaurantName={restaurantName}
        />
      )}
    </>
  );
}
