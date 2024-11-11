"use client";

import { useState } from "react";
import OrderCard from "@components/restaurant/OrderCard";
import OrderDetailsDialog from "@components/restaurant/OrderDetailsDialog";
import Toolbar from "@components/restaurant/Toolbar";
import { useQuery } from "@tanstack/react-query";

const order = {
  orderId: "0224",
  time: "12:66 pm",
  customerName: "Sameer",
  orderItems: [
    { name: "Garlic Naan", qty: "3 pc.", price: 250.0 },
    { name: "Sukhi Roti", qty: "5 pc.", price: 25.0 },
    { name: "Chicken with mutton", qty: "3 plt.", price: 56.26 },
    { name: "Khali bati with sabji", qty: "4 plt.", price: 76.34 },
    { name: "Dal Makhni", qty: "1 plt.", price: 290.89 },
  ],
  totalPrice: 4699.89,
  instructions:
    "There should be no preservatives and the food should be wrapped in aluminium foil",
  address: {
    line1: "177a Bleeker Street, Rajabajar, Machuabajar",
    line2: "Kolkata, 700009",
    landmark: "Vidyasagar Community Hall",
  },
  deliveryPartner: {
    name: "Shivam Mandal",
    age: 23,
    gender: "Male",
    vehicle: "Space Shuttle",
  },
  status: "Packed",
};

const Orders = [
  {
    orderId: "0435",
    time: "03:49 pm",
    items: [
      { name: "Garlic Naan", quantity: 13 },
      { name: "Aakhri Pasta", quantity: 3 },
      { name: "Green Onions", quantity: 6 },
      { name: "Masala Chicken", quantity: 2 },
    ],
    total: 220.5,
    func: () => {
      setShowModal(true);
    },
  },
  {
    orderId: "4584",
    time: "03:49 pm",
    items: [
      { name: "Garlic Naan", quantity: 14 },
      { name: "Aakhri Pasta", quantity: 3 },
      { name: "Green Onions", quantity: 6 },
      { name: "Masala Chicken", quantity: 2 },
    ],
    total: 220.5,
    func: () => {
      setShowModal(true);
    },
  },
  {
    orderId: "5466",
    time: "03:49 pm",
    items: [
      { name: "Garlic Naan", quantity: 14 },
      { name: "Aakhri Pasta", quantity: 3 },
      { name: "Green Onions", quantity: 6 },
      { name: "Masala Chicken", quantity: 2 },
    ],
    total: 220.5,
    func: () => {
      setShowModal(true);
    },
  },
  {
    orderId: "5466",
    time: "03:49 pm",
    items: [
      { name: "Garlic Naan", quantity: 14 },
      { name: "Aakhri Pasta", quantity: 3 },
      { name: "Green Onions", quantity: 6 },
      { name: "Masala Chicken", quantity: 2 },
    ],
    total: 220.5,
    func: () => {
      setShowModal(true);
    },
  },
  {
    orderId: "5466",
    time: "03:49 pm",
    items: [
      { name: "Garlic Naan", quantity: 14 },
      { name: "Aakhri Pasta", quantity: 3 },
      { name: "Green Onions", quantity: 6 },
      { name: "Masala Chicken", quantity: 2 },
    ],
    total: 220.5,
    func: () => {
      setShowModal(true);
    },
  },
  {
    orderId: "0435",
    time: "03:49 pm",
    items: [
      { name: "Garlic Naan", quantity: 13 },
      { name: "Aakhri Pasta", quantity: 3 },
      { name: "Green Onions", quantity: 6 },
      { name: "Masala Chicken", quantity: 2 },
    ],
    total: 220.5,
    func: () => {
      setShowModal(true);
    },
  },
  {
    orderId: "4584",
    time: "03:49 pm",
    items: [
      { name: "Garlic Naan", quantity: 14 },
      { name: "Aakhri Pasta", quantity: 3 },
      { name: "Green Onions", quantity: 6 },
      { name: "Masala Chicken", quantity: 2 },
    ],
    total: 220.5,
    func: () => {
      setShowModal(true);
    },
  },
  {
    orderId: "5466",
    time: "03:49 pm",
    items: [
      { name: "Garlic Naan", quantity: 14 },
      { name: "Aakhri Pasta", quantity: 3 },
      { name: "Green Onions", quantity: 6 },
      { name: "Masala Chicken", quantity: 2 },
    ],
    total: 220.5,
    func: () => {
      setShowModal(true);
    },
  },
  {
    orderId: "5466",
    time: "03:49 pm",
    items: [
      { name: "Garlic Naan", quantity: 14 },
      { name: "Aakhri Pasta", quantity: 3 },
      { name: "Green Onions", quantity: 6 },
      { name: "Masala Chicken", quantity: 2 },
    ],
    total: 220.5,
    func: () => {
      setShowModal(true);
    },
  },
  {
    orderId: "5466",
    time: "03:49 pm",
    items: [
      { name: "Garlic Naan", quantity: 14 },
      { name: "Aakhri Pasta", quantity: 3 },
      { name: "Green Onions", quantity: 6 },
      { name: "Masala Chicken", quantity: 2 },
    ],
    total: 220.5,
    func: () => {
      setShowModal(true);
    },
  },
];

const OrdersPage = () => {
  const [showModal, setShowModal] = useState(false);

  const { data } = useQuery({
    queryKey: ["orders"],
    enabled: true,
    queryFn: () => getPendingOrders(),
    retry: 1,
    refetchOnWindowFocus: false,
  });

  return (
    <>
      <div className="flex flex-wrap gap-12 justify-center items-center h-screen max-h-[90svh] overflow-y-scroll">
        {Orders.map((order, index) => (
          <OrderCard key={index} {...order} handleClickedOrder={setShowModal} />
        ))}
      </div>

      <div className="p-8">
        <OrderDetailsDialog
          orderId={order.orderId}
          time={order.time}
          customerName={order.customerName}
          orderItems={order.orderItems}
          totalPrice={order.totalPrice}
          instructions={order.instructions}
          address={order.address}
          deliveryPartner={order.deliveryPartner}
          status={order.status}
          visible={showModal}
          closefunc={() => {
            setShowModal(false);
          }}
        />
      </div>
    </>
  );
};

export default OrdersPage;
