import ManagementSidebar from "@components/management/SideBar";

export default function ManagementLayout({ children }) {
  return (
    <>
      <div className="absolute inset-0 bg-management-bg -z-50 bg-contain bg-repeat"></div>
      <main className="wrapper lg:grid grid-cols-[1fr_3fr] relative gap-4">
        <ManagementSidebar />
        {children}
      </main>
    </>
  );
}
