import Link from "next/link";
import { usePathname } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();
  const navItems = [
    { title: "Orders", href: "/shop/orders" },
    { title: "Products", href: "/shop/products" },
    { title: "Settings", href: "/shop/settings" },
  ];

  return (
    <div className="w-64 h-screen bg-gray-700 text-white p-4">
      <div className="text-xl font-bold mb-6">
        <nav className="flex flex-col gap-2">
          {navItems.map((item, index) => {
            const isActive = pathname === item.href;
            return (
              <Link
                href={item.href}
                key={index}
                className={`px-4 py-2 rounded ${isActive ? "bg-gray-100 text-black font-bold" : "hover:bg-gray-600"}`}
              >
                {item.title}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
