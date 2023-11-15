import React from "react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";

function Navbar() {
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Our animals",
      path: "/animals",
    },
    {
      name: "Admin",
      path: "/admin",
    },
  ];

  return (
    <header>
      <Menu as="nav" className="bg-white p-4 shadow-lg">
        <div className="flex justify-between">
          <Link to="/">
            <h1 className="text-xl font-bold text-gray-800 items-center">
              Adopt An Animal
            </h1>
          </Link>
          <div className="flex flex-row justify-end gap-4 my-auto">
            {navLinks.map((link) => (
              <Menu.Item key={link.name}>
                <Link to={link.path} className="hover:font-bold">
                  {link.name}
                </Link>
              </Menu.Item>
            ))}
          </div>
        </div>
      </Menu>
    </header>
  );
}

export default Navbar;
