"use client";

import { useState } from "react";
import OrderCard from "@components/restaurant/OrderCard";
import OrderDetailsDialog from "@components/restaurant/OrderDetailsDialog";
import Toolbar from "@components/restaurant/Toolbar";
import { useQuery } from "@tanstack/react-query";
import LoadingSpinner from "@components/LoadingSpinner";
import { getPendingOrders } from "@services/restaurantServices";

const PendingOrdersPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [clickedOrder, setClickedOrder] = useState(null);

  const { data, isLoading, isSuccess, isError, error } = useQuery({
    queryKey: ["orders"],
    enabled: true,
    queryFn: () => getPendingOrders(),
    retry: 1,
    refetchOnWindowFocus: false,
  });

  const orders = data?.data?.orders || [];

  const handleClickedOrder = (orderId) => {
    const order = orders.find((order) => order.order_id === orderId);
    if (order) {
      setClickedOrder(order);
      setShowModal(true);
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-12 justify-center items-center h-screen max-h-[90svh] overflow-y-scroll">
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
              {...order}
              handleClickedOrder={handleClickedOrder}
            />
          ))
        )}
      </div>

      <div className="p-8">
        {isSuccess ? (
          <OrderDetailsDialog
            orderId={clickedOrder.order_id}
            time={clickedOrder.time}
            customerName={clickedOrder.customer_name}
            orderItems={clickedOrder.order_items}
            totalPrice={clickedOrder.total_price}
            instructions={clickedOrder.instructions}
            address={clickedOrder.address}
            deliveryPartner={clickedOrder.delivery_partner}
            status={clickedOrder.status}
            visible={showModal}
            closefunc={() => {
              setShowModal(false);
            }}
          />
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default PendingOrdersPage;
