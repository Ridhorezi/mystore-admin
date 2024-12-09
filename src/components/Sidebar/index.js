import Image from "next/image";
import Link from "next/link";
import { HomeIcon, UsersIcon, SwatchIcon, ShoppingBagIcon } from "../icons";

export default function Sidebar() {
  const menuItems = [
    { id: 1, text: "Dashboard", url: "/", icon: <HomeIcon /> },
    { id: 2, text: "Users", url: "/users", icon: <UsersIcon /> },
    { id: 3, text: "Product Type", url: "/product-type", icon: <SwatchIcon /> },
    { id: 4, text: "Products", url: "/products", icon: <ShoppingBagIcon /> },
  ];

  return (
    <div className="sidebar-main">
      <div className="p-4 m-4">
        <h1 className="text-3xl font-semibold">MyStore</h1>
      </div>
      <ul className="mx-auto text-lg flex flex-col">
        {menuItems.map((menuItem) => (
          <li key={menuItem.id}>
            <Link href={menuItem.url}>
              <div className="sidebar-list-item">
                <span className="mx-2">{menuItem.icon}</span>
                {menuItem.text}
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="sidabar-usercard">
        <div className="flex flex-row m-4">
          <Image
            height={40}
            width={40}
            src="/user.svg"
            alt="User Avatar"
            radius="sm"
          />
          <div className="m-auto text-lg">John doe</div>
        </div>
      </div>
    </div>
  );
}
