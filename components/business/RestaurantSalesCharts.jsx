import { getRestaurantSales } from "@services/businessTeamServices";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Chart from "react-apexcharts";

const RestaurantSalesCharts = ({
  restaurantId,
  restaurantName,
  visible,
  closeFunction,
}) => {
  const [year, setYear] = useState("2024");
  const [month, setMonth] = useState(null);

  const { data, isSuccess, isLoading, isError, error } = useQuery({
    queryKey: [year, month, restaurantId],
    queryFn: () => getRestaurantSales(restaurantId, year, month),
    retry: 1,
  });

  const chartOptions = {
    chart: { toolbar: { show: false } },
    stroke: { curve: "smooth" },
    colors: ["#7C3AED"],
    xaxis: {
      categories: isSuccess
        ? data.data.salesData.map((item) => (month ? item.day : item.month))
        : ["01", "02", "03", "04", "05", "06", "07"],
    },
    dataLabels: { enabled: false },
  };

  const chartSeries = [
    {
      name: "Monthly Sales",
      data: isSuccess
        ? data.data.salesData.map((item) => item.total_sales)
        : [620, 500, 600, 430, 480, 580, 470],
    },
  ];

  return !visible ? null : (
    <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
      <div className="bg-white p-10 rounded-xl">
        {isLoading ? (
          "Loading"
        ) : isError ? (
          error.message
        ) : (
          <>
            <div className="flex justify-between">
              <h5>{restaurantName}</h5>
              <button className="text-red-700 text-lg" onClick={closeFunction}>
                X
              </button>
            </div>
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
              ].map((mnth, index) => (
                <option key={index + 1} value={index + 1}>
                  {mnth}
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
                  <th className="px-2 py-2">{month ? "Day" : "Month"}</th>
                  <th className="px-2 py-2">Total Orders</th>
                  <th className="px-2 py-2">Total Sales</th>
                </tr>
              </thead>
              <tbody className="">
                {isSuccess && data.data.salesData.length > 0 ? (
                  data.data.salesData.map((restaurant, index) => (
                    <tr key={index} className="table-row text-grey-dark-3">
                      <td className="text-left border-2 border-accent-purple">
                        {month ? restaurant.day : restaurant.month}
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
            <Chart
              options={chartOptions}
              series={chartSeries}
              type="bar"
              width="100%"
              height="100%"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default RestaurantSalesCharts;
