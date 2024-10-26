import Sidebar from "@components/restaurant/Sidebar";

export default function RestaurantLayout({ children }) {
  return (
    <div className="wrapper grid grid-cols-[1fr_3fr] relative gap-4">
      <Sidebar />
      {children}
    </div>
  );
}
