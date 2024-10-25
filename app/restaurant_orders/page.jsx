"use client";

import React, { useState } from 'react';
import OrderCard from '@components/RestaurantComponents/OrderCard';
import OrderDetails from '@components/RestaurantComponents/OrderDetails';

const RestaurantOrder = () => {
  const [showModal, setShowModal] = useState(false)
  const order = {
    orderId: '0224',
    time: '12:66 pm',
    customerName: 'Sameer',
    orderItems: [
      { name: 'Garlic Naan', qty: '3 pc.', price: 250.00 },
      { name: 'Sukhi Roti', qty: '5 pc.', price: 25.00 },
      { name: 'Chicken with mutton', qty: '3 plt.', price: 56.26 },
      { name: 'Khali bati with sabji', qty: '4 plt.', price: 76.34 },
      { name: 'Dal Makhni', qty: '1 plt.', price: 290.89 }
    ],
    totalPrice: 4699.89,
    instructions: 'There should be no preservatives and the food should be wrapped in aluminium foil',
    address: {
      line1: '177a Bleeker Street, Rajabajar, Machuabajar',
      line2: 'Kolkata, 700009',
      landmark: 'Vidyasagar Community Hall',
    },
    deliveryPartner: {
      name: 'Shivam Mandal',
      age: 23,
      gender: 'Male',
      vehicle: 'Space Shuttle',
    },
    status: 'Packed',
    }

  const Orders = [
    {
      orderId: '0435',
      time: '03:49 pm',
      items: [
        { name: 'Garlic Naan', quantity: 13 },
        { name: 'Aakhri Pasta', quantity: 3 },
        { name: 'Green Onions', quantity: 6 },
        { name: 'Masala Chicken', quantity: 2 },
      ],
      total: 220.5,
      func: ()=>{setShowModal(true)},
    },
    {
      orderId: '4584',
      time: '03:49 pm',
      items: [
        { name: 'Garlic Naan', quantity: 14 },
        { name: 'Aakhri Pasta', quantity: 3 },
        { name: 'Green Onions', quantity: 6 },
        { name: 'Masala Chicken', quantity: 2 },
      ],
      total: 220.5,
      func: ()=>{setShowModal(true)},
    },
    {
      orderId: '5466',
      time: '03:49 pm',
      items: [
        { name: 'Garlic Naan', quantity: 14 },
        { name: 'Aakhri Pasta', quantity: 3 },
        { name: 'Green Onions', quantity: 6 },
        { name: 'Masala Chicken', quantity: 2 },
      ],
      total: 220.5,
      func: ()=>{setShowModal(true)},
    },
    {
      orderId: '5466',
      time: '03:49 pm',
      items: [
        { name: 'Garlic Naan', quantity: 14 },
        { name: 'Aakhri Pasta', quantity: 3 },
        { name: 'Green Onions', quantity: 6 },
        { name: 'Masala Chicken', quantity: 2 },
      ],
      total: 220.5,
      func: ()=>{setShowModal(true)},
    },
    {
      orderId: '5466',
      time: '03:49 pm',
      items: [
        { name: 'Garlic Naan', quantity: 14 },
        { name: 'Aakhri Pasta', quantity: 3 },
        { name: 'Green Onions', quantity: 6 },
        { name: 'Masala Chicken', quantity: 2 },
      ],
      total: 220.5,
      func: ()=>{setShowModal(true)},
    },
    {
      orderId: '0435',
      time: '03:49 pm',
      items: [
        { name: 'Garlic Naan', quantity: 13 },
        { name: 'Aakhri Pasta', quantity: 3 },
        { name: 'Green Onions', quantity: 6 },
        { name: 'Masala Chicken', quantity: 2 },
      ],
      total: 220.5,
      func: ()=>{setShowModal(true)},
    },
    {
      orderId: '4584',
      time: '03:49 pm',
      items: [
        { name: 'Garlic Naan', quantity: 14 },
        { name: 'Aakhri Pasta', quantity: 3 },
        { name: 'Green Onions', quantity: 6 },
        { name: 'Masala Chicken', quantity: 2 },
      ],
      total: 220.5,
      func: ()=>{setShowModal(true)},
    },
    {
      orderId: '5466',
      time: '03:49 pm',
      items: [
        { name: 'Garlic Naan', quantity: 14 },
        { name: 'Aakhri Pasta', quantity: 3 },
        { name: 'Green Onions', quantity: 6 },
        { name: 'Masala Chicken', quantity: 2 },
      ],
      total: 220.5,
      func: ()=>{setShowModal(true)},
    },
    {
      orderId: '5466',
      time: '03:49 pm',
      items: [
        { name: 'Garlic Naan', quantity: 14 },
        { name: 'Aakhri Pasta', quantity: 3 },
        { name: 'Green Onions', quantity: 6 },
        { name: 'Masala Chicken', quantity: 2 },
      ],
      total: 220.5,
      func: ()=>{setShowModal(true)},
    },
    {
      orderId: '5466',
      time: '03:49 pm',
      items: [
        { name: 'Garlic Naan', quantity: 14 },
        { name: 'Aakhri Pasta', quantity: 3 },
        { name: 'Green Onions', quantity: 6 },
        { name: 'Masala Chicken', quantity: 2 },
      ],
      total: 220.5,
      func: ()=>{setShowModal(true)},
    },
  ];

  return <>
    <div className="max-w-[200svh] flex flex-wrap gap-6 justify-center items-center h-screen max-h-[90svh] overflow-y-scroll">
      {Orders.map((order, index) => (
        <OrderCard key={index} {...order} />
      ))}
    </div>

    <div className="p-8">
      <OrderDetails 
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
        closefunc={()=>{setShowModal(false)}}
      />
    </div>
    </>
};

export default RestaurantOrder;
