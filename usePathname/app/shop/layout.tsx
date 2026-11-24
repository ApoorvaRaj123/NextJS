import { Sidebar } from "@/components/Sidebar";
import react from "react";

export default function ShopLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
