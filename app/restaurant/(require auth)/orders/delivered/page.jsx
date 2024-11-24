"use client";

import { useState } from "react";
import OrderCard from "@components/restaurant/OrderCard";
import OrderDetailsDialog from "@components/restaurant/OrderDetailsDialog";
import Toolbar from "@components/restaurant/Toolbar";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "@components/LoadingSpinner";
import { getOrders } from "@services/restaurantServices";

const PendingOrdersPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [clickedOrder, setClickedOrder] = useState(null);

  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["orders"],
    enabled: true,
    queryFn: () => getOrders("delivered"),
    retry: 1,
    refetchOnWindowFocus: false,
    refetchInterval: 10000,
    refetchIntervalInBackground: true,
  });

  const parseTime = (timestamp) => {
    const date = new Date(timestamp);

    let hours = date.getUTCHours();
    const minutes = date.getUTCMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";

    hours = hours % 12;
    hours = hours ? hours : 12;

    const time = `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")} ${ampm}`;

    return time;
  };

  const orders = data?.data?.orders || [];

  const handleClickedOrder = (order) => {
    setClickedOrder(order);
    setShowModal(true);
  };

  return (
    <>
      <div className="flex flex-wrap gap-10 justify-evenly max-h-screen overflow-y-scroll py-10">
        {isLoading ? (
          <LoadingSpinner />
        ) : isError ? (
          <h5 className="text-center font-bold text-lg text-red-500">
            {error.message}
          </h5>
        ) : (
          orders.map((order, index) => (
            <OrderCard
              key={index}
              items={order.items}
              orderId={order.list_id}
              time={parseTime(order.order_timestamp)}
              total={order.checkout_price}
              handleClickedOrder={() => handleClickedOrder(order)}
            />
          ))
        )}
      </div>

      <div className="p-8">
        {isSuccess && showModal && (
          <OrderDetailsDialog
            orderId={clickedOrder.list_id}
            time={parseTime(clickedOrder.order_timestamp)}
            customerName={clickedOrder.customer_name}
            orderItems={clickedOrder.items}
            totalPrice={clickedOrder.checkout_price}
            instructions={clickedOrder.specifications}
            address={clickedOrder.address}
            deliveryPartnerName={clickedOrder.delivery_partner_name}
            deliveryPartnerPhone={clickedOrder.phone_number}
            deliveryPartnerVehicle={clickedOrder.vehicle_type}
            status={clickedOrder.order_status}
            visible={showModal}
            closefunc={() => {
              setShowModal(false);
            }}
          />
        )}
      </div>
    </>
  );
};

export default PendingOrdersPage;
