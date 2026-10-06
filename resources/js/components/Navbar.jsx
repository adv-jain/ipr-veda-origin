import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import iprPrefect from "../../../config/assets/img/ipr-perfect-rect.png";

const navItems = [
  // ... (Aapka navItems array bilkul same rahega) ...
  {
    title: "Trademark & IP",
    link: "/trademark",
    submenu: [
      { title: "Trademark Registration", link: "/trademark/registration" },
      { title: "Trademark Search", link: "/trademark/search" },
      { title: "Trademark Renewal", link: "/trademark/renewal" },
      { title: "Trademark Assignment", link: "/trademark/assignment" },
      { title: "USA Trademark", link: "/trademark/usa" },
      { title: "Trademark Registration For Individual", link: "/trademark/individual" },
    ],
  },
  {
    title: "Copyright & Design",
    link: "/copyright",
    submenu: [
      { title: "Copyright Registration", link: "/copyright/registration" },
      { title: "Copyright Infringement", link: "/copyright/infringement" },
    ],
  },
  {
    title: "Patent",
    link: "/patent",
    submenu: [
      { title: "Patent Registration", link: "/patent/registration" },
      { title: "Indian Patent Search", link: "/patent/search" },
    ],
  },
  
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
  { title: "Blog", link: "/blog" },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(0);

  // ✅ Naya Function: Click hone par page top par jayega aur menu band hoga
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Page ko sabse upar scroll karega
    setActiveMenu(null);   // Dropdown band karega
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-3 lg:px-6 py-3 shadow-sm bg-white z-50">
      
      {/* Logo */}
      <Link to="/" onClick={handleLinkClick} className="flex items-center shrink-0">
        <img src={iprPrefect} className="w-[85px] lg:w-[100px] xl:w-[110px]" alt="Logo" />
      </Link>

      {/* Nav Items Container */}
      <div className="flex items-center gap-2 lg:gap-4 xl:gap-6">
        {navItems.map((item) => (
          <div
            key={item.title}
            onMouseEnter={() => {
              if (item.submenu) {
                setActiveMenu(item.title);
                setActiveSubmenu(0);
              }
            }}
            onMouseLeave={() => {
              if (item.submenu) setActiveMenu(null);
            }}
            className="relative py-1"
          >
           
            <Link
              to={item.link}
              onClick={handleLinkClick} // ✅ Update kiya
              className="whitespace-nowrap text-xs lg:text-sm xl:text-base font-medium text-gray-700 hover:text-yellow-500 transition-colors duration-200 flex items-center gap-0.5 lg:gap-1 cursor-pointer"
            >
              {item.title}
              {item.submenu && (
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    activeMenu === item.title ? 'rotate-180' : ''
                  }`}
                />
              )}
            </Link>

            {/* Dropdown Logic (Simple) */}
            {item.submenu &&
              activeMenu === item.title &&
              !item.submenu[0]?.children && (
                <div className="absolute top-full left-0 pt-2 w-64 lg:w-72 z-50">
                  <div className="bg-white shadow-xl rounded-md p-3 border border-gray-100 max-h-[75vh] overflow-y-auto">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.link}
                        onClick={handleLinkClick} // ✅ Update kiya
                        className="block py-2 px-3 rounded text-xs lg:text-sm text-gray-700 hover:bg-gray-50 hover:text-yellow-600 transition-colors"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            {/* Dropdown Logic (Mega Menu with Children) */}
            {item.submenu &&
              activeMenu === item.title &&
              item.submenu[0]?.children && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50">
                  <div className="flex w-[750px] bg-white shadow-xl rounded-lg border border-gray-100 overflow-hidden">
                    
                    {/* Left Sidebar */}
                    <div className="w-72 bg-gray-50 border-r border-gray-200 max-h-[420px] overflow-y-auto py-2">
                      {item.submenu.map((sub, subIndex) => (
                        <div
                          key={subIndex}
                          onMouseEnter={() => setActiveSubmenu(subIndex)}
                          className={`flex items-center justify-between px-5 py-3 cursor-pointer transition-all duration-200 border-l-4 ${
                            activeSubmenu === subIndex
                              ? 'bg-white border-yellow-500 text-yellow-600 font-semibold'
                              : 'border-transparent text-gray-700 hover:bg-white hover:text-yellow-600'
                          }`}
                        >
                          <Link
                            to={sub.link}
                            onClick={handleLinkClick} // ✅ Update kiya
                            className="text-sm flex-1"
                          >
                            {sub.title}
                          </Link>
                          <ChevronRight
                            size={16}
                            className={`transition-colors ${
                              activeSubmenu === subIndex
                                ? 'text-yellow-500'
                                : 'text-gray-400'
                            }`}
                          />
                        </div>
                      ))}
                    </div>

                    {/* Right Content */}
                    <div className="flex-1 p-6">
                      {item.submenu[activeSubmenu]?.children && (
                        <ul className="space-y-3">
                          {item.submenu[activeSubmenu].children.map(
                            (child, childIndex) => (
                              <li key={childIndex}>
                                <Link
                                  to={child.link}
                                  onClick={handleLinkClick} // ✅ Update kiya
                                  className="text-sm text-gray-700 hover:text-yellow-600 hover:underline transition-colors"
                                >
                                  {child.title}
                                </Link>
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </div>
                  </div>
                </div>
              )}
          </div>
        ))}
      </div>

      {/* Login Button */}
      <div className="shrink-0">
        <Link
          to="/login"
          onClick={handleLinkClick} // ✅ Update kiya
          className="whitespace-nowrap rounded-md border-2 px-3 lg:px-5 py-1.5 text-xs lg:text-sm xl:text-base font-medium border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black transition-colors"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}