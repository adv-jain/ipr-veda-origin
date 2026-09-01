import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import iprPrefect from "../../../config/assets/img/ipr-perfect-rect.png";

const menuData = {
  Trademark: [
    { title: "Trademark Registration", link: "/trademark/registration" },
    { title: "Trademark Search", link: "/trademark/search" },
    { title: "Respond to TM Objection", link: "/trademark/objection" },
    { title: "Well Known Trademark", link: "/trademark/well-known" },
    { title: "Trademark Watch", link: "/trademark/watch" },
    { title: "Trademark Renewal", link: "/trademark/renewal" },
    { title: "Trademark Assignment", link: "/trademark/assignment" },
    { title: "USA Trademark", link: "/trademark/usa" },
    { title: "Trademark Class Finder", link: "/trademark/class-finder" },
  ],
  Copyright: [
    { title: "Copyright Infringement", link: "/copyright/infringement" },
    { title: "Patent Infringement", link: "/patent/infringement" },
    { title: "Trademark Infringement", link: "/trademark/infringement" },
  ],
  Patent: [
    { title: "Indian Patent Search", link: "/patent/search" },
    { title: "Provisional Patent Application", link: "/patent/provisional" },
    { title: "Patent Registration", link: "/patent/registration" },
  ],
};

const menuLinks = {
  Trademark: "/trademark",
  Copyright: "/copyright",
  Patent: "/patent",
};

export default function Navbar() {
  const navClass = ({ isActive }) =>
    `text-base font-medium transition-colors duration-200 ${
      isActive ? 'text-yellow-500 font-semibold' : 'text-gray-700 hover:text-yellow-500'
    }`;

  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className="w-full flex items-center justify-between px-8 lg:px-16 py-4 shadow-sm bg-white">
      {/* Logo */}
      <Link to="/" className="flex items-center shrink-0">
        <img src={iprPrefect} className="w-[110px]" />
      </Link>

      {/* Menu items */}
      <div className="flex items-center gap-8">
        {Object.keys(menuData).map((menu) => (
          <div
            key={menu}
            onMouseEnter={() => setActiveMenu(menu)}
            onMouseLeave={() => setActiveMenu(null)}
            className="relative"
          >
            <NavLink to={menuLinks[menu]} className={navClass}>
              {menu}
            </NavLink>

            {activeMenu === menu && (
              <div className="absolute top-full left-0 mt-2 bg-white shadow-xl rounded-md p-4 w-72 z-50 border border-gray-100">
                {menuData[menu].map((item) => (
                  <Link
                    key={item.title}
                    to={item.link}
                    onClick={() => setActiveMenu(null)}
                    className="block py-2 px-2 rounded text-base text-gray-700 hover:bg-gray-50 hover:text-yellow-600 transition-colors"
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        <NavLink to="/about" className={navClass}>
          About
        </NavLink>
        <NavLink to="/contact" className={navClass}>
          Contact
        </NavLink>
        <NavLink to="/blog" className={navClass}>
          Blog
        </NavLink>
      </div>

      {/* Login button */}
      <div className="shrink-0">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            `rounded-md border-2 px-6 py-2.5 text-base font-medium transition-colors ${
              isActive
                ? 'border-yellow-500 bg-yellow-500 text-black'
                : 'border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black'
            }`
          }
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
}