import { NavLink } from "remix";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

import logo from "../logo.svg";
import { classNames as cx } from "../helpers";

export function Navigation() {
  const links = {
    "/projects": "Projects",
    "/documentation": "Documentation",
    "/tutorials": "Tutorials",
    "/about": "About",
    "/donate": "Donate",
    "/join": "Join Us",
  };

  return (
    <Disclosure as="nav" className="bg-white shadow">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-0">
            <div className="relative flex justify-between h-16 sm:h-24">
              <div className="flex-1 flex items-center sm:items-stretch">
                <div className="flex-shrink-0 flex items-center">
                  <NavLink to="/">
                    <img
                      className="block h-12 sm:h-16 w-auto"
                      src={logo}
                      alt="Workflow"
                    />
                  </NavLink>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {Object.keys(links).map((link, index) => (
                    <NavLink
                      key={index}
                      to={link}
                      className={({ isActive }) =>
                        cx(
                          "inline-flex items-center px-1 pt-2 border-b-4 text-lg",
                          isActive
                            ? "border-blue-500 text-gray-900"
                            : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 "
                        )
                      }
                    >
                      {links[link as keyof typeof links]}
                    </NavLink>
                  ))}
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 border focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-8 w-8" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-8 w-8" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {Object.keys(links).map((link, index) => (
                <NavLink
                  key={index}
                  to={link}
                  className={({ isActive }) =>
                    cx(
                      isActive
                        ? "bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                        : "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                    )
                  }
                >
                  {links[link as keyof typeof links]}
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
