"use client";
import Image from "next/image";

export default function ManagementLayout({ children }) {

  return (
        <main className="wrapper lg:grid grid-cols-[1fr_3fr] relative gap-4">
          <div>
            <Image src="/assets/images/management/Sidebar.png" width={270} height={200}>
            </Image>
          </div>
          {children}
        </main>
  );
}
