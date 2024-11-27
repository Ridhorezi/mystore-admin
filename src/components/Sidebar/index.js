import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  const menuItems = [
    { text: "Dashboard", url: "/" },
    { text: "Users", url: "/users" },
    { text: "Product Type", url: "/product-type" },
    { text: "Products", url: "/products" },
  ];
  return (
    <div>
      <div>
        <h1>MyStore</h1>
      </div>
      <ul>
        {menuItems.map((menuItems, _key) => {
          return (
            <li key={menuItems.index}>
              <Link href={menuItems.url}>
                <div>{menuItems.text}</div>
              </Link>
            </li>
          );
        })}
      </ul>
      <div>
        <div>
          <Image height={50} width={50} src="/user.svg" alt="User Avatar" radius="sm" />
          <div>
            John doe
          </div>
        </div>
      </div>
    </div>
  );
}
