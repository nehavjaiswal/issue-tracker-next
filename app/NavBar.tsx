"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoBugSharp } from "react-icons/io5";
import classnames from "classnames";

const NavBar = () => {
  const currentpath = usePathname();

  const links = [
    { name: "Dashboard", path: "/" },
    { name: "Issue", path: "/issues" },
  ];

  return (
    <nav className="flex space-x-6 border-b border-gray-300 mb-5 h-14 items-center px-5">
      <Link href="/">
        <IoBugSharp size={22} />
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <li
            key={link.name}
            className={classnames({
              "text-zinc-900": currentpath === link.path,
              "text-zinc-500": currentpath !== link.path,
              "hover:text-zinc-800 transition-colors font-medium": true,
            })}
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
