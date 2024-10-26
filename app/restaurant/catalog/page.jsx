"use client";

import CatalogCard from "@components/restaurant/CatalogCard";
import Toolbar from "@components/restaurant/Toolbar";

const RestaurantCatalogue = () => {
  const menuItems = [
    {
      imageUrl: "/assets/images/restaurant/pasta.jpg",
      name: "Tomato and Basil Pasta",
      description:
        "Indulge in the perfect harmony of flavors with our Tomato and Basil Pasta. Al dente pasta is tossed in a rich, slow-simmered tomato sauce made from vine-ripened tomatoes, infused with the fresh aroma of handpicked basil.",
      price: 560,
      discount: "15% upto ₹200",
      orders: 547,
      rating: 4.5,
    },
    {
      imageUrl: "/assets/images/restaurant/paneer.jpg",
      name: "Butter Paneer Masala",
      description:
        "Enjoy a rich & creamy curry made with paneer, spices, onions, tomatoes, cashews and butter.",
      price: 600,
      discount: "10% upto ₹200",
      orders: 650,
      rating: 4.5,
    },
    {
      imageUrl: "/assets/images/restaurant/pasta.jpg",
      name: "Tomato and Basil Pasta",
      description:
        "Indulge in the perfect harmony of flavors with our Tomato and Basil Pasta. Al dente pasta is tossed in a rich, slow-simmered tomato sauce made from vine-ripened tomatoes, infused with the fresh aroma of handpicked basil.",
      price: 560,
      discount: "15% upto ₹200",
      orders: 547,
      rating: 4.5,
    },
    {
      imageUrl: "/assets/images/restaurant/paneer.jpg",
      name: "Butter Paneer Masala",
      description:
        "Enjoy a rich & creamy curry made with paneer, spices, onions, tomatoes, cashews and butter.",
      price: 600,
      discount: "10% upto ₹200",
      orders: 650,
      rating: 4.5,
    },
  ];

  return (
    <div>
      <Toolbar />
      <div className="w-full mb-10 mx-auto space-y-8 max-h-screen overflow-y-scroll p-5">
        {menuItems.map((item, index) => (
          <CatalogCard
            key={index}
            imageUrl={item.imageUrl}
            name={item.name}
            description={item.description}
            price={item.price}
            discount={item.discount}
            orders={item.orders}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantCatalogue;
