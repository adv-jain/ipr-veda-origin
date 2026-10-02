import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import iprPrefect from "../../../config/assets/img/ipr-perfect-rect.png";

const navItems = [
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
  {
    title: "Consult an Expert",
    link: "/consulttoexpert",
    submenu: [
      {
        title: "Expert Consultation",
        link: "/consult/expert",
        children: [
          { title: "Talk To Company Secretary", link: "/consult/cs" },
          { title: "Talk To CA", link: "/consult/ca" },
        ],
      },
      {
        title: "Lawyer Consultation",
        link: "/consult/lawyer",
        children: [
          { title: "Talk to Lawyer", link: "/consult/talk-layer" },
        ],
      },
      {
        title: "Property Lawyer",
        link: "/consult/property",
        children: [
          { title: "Property Dispute", link: "/consult/property/dispute" },
          { title: "Property Registration", link: "/consult/property/registration" },
          { title: "Real Estate Transactions", link: "/consult/property/real-estate" },
          { title: "Landlord Tenant Issues", link: "/consult/property/landlord-tenant-issues" },
          { title: "Title Deeds Registration", link: "/consult/property/title-deeds-registration" },
          { title: "Zoning And Land Use", link: "/consult/property/zoning-land" },
          { title: "Easements and Rights Of Way", link: "/consult/property/easements-rights" },
          { title: "Homeowners Association", link: "/consult/property/homeowners-association" },
          { title: "Property Tax Disputes", link: "/consult/property/property-tax" },
        ],
      },
      {
        title: "Family Lawyer",
        link: "/consult/family",
        children: [
          { title: "Divorce", link: "/consult/family/divorce" },
          { title: "Child Custody", link: "/consult/family/custody" },
          { title: "Child Support", link: "/consult/family/support" },
          { title: "Adoption", link: "/consult/family/adoption" },
          { title: "Domestic Violence", link: "/consult/family/domestic" },
          { title: "Paternity", link: "/consult/family/paternity" },
          { title: "Alimony", link: "/consult/family/alimony" },
          { title: "Guardianship", link: "/consult/family/guardianship" },
        ],
      },
      {
        title: "Consumer Lawyer",
        link: "/consult/consumer",
        children: [
          { title: "Product liability", link: "/consult/consumer/product-liability" },
          { title: "False Advertising", link: "/consult/consumer/false-advertising" },
          { title: "Unfair Trade Practices", link: "/consult/consumer/unfair-trade" },
          { title: "Consumer Fraud", link: "/consult/consumer/consumer-fraud" },
          { title: "Warranty Claims", link: "/consult/consumer/warranty-claims" },
          { title: "Debt Collection Practices", link: "/consult/consumer/debt-collection" },
          { title: "Bankruptcy", link: "/consult/consumer/bankruptcy" },
          { title: "Privacy And Data Protection", link: "/consult/consumer/privacy-data-protection" },
        ],
      },
      {
        title: "Civil Lawyer",
        link: "/consult/civil",
        children: [
          { title: "Personal Injury", link: "/consult/civil/personal-injury" },
          { title: "Breach of Contract", link: "/consult/civil/breach-contract" },
          { title: "Defamation", link: "/consult/civil/defamation" },
          { title: "Employment Dispute", link: "/consult/civil/employment-dispute" },
          { title: "Debt Collection", link: "/consult/civil/debt-collection" },
        ],
      },
      {
        title: "Criminal Lawyer",
        link: "/consult/criminal",
        children: [
          { title: "Bail", link: "/consult/criminal/bail" },
          { title: "Criminal Defense", link: "/consult/criminal/defense" },
        ],
      },
      {
        title: "Intellectual Property Lawyer",
        link: "/consult/intellectual",
        children: [
          { title: "Trademark", link: "/consult/ip/trademark" },
          { title: "Patent", link: "/consult/ip/patent" },
          { title: "Copyright", link: "/consult/ip/copyright" },
        ],
      },
    ],
  },
  { title: "Infringement", link: "/infringement" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
  { title: "Blog", link: "/blog" },
];

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [activeSubmenu, setActiveSubmenu] = useState(0);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-3 lg:px-6 py-3 shadow-sm bg-white z-50">
      
      {/* Logo */}
      <Link to="/" className="flex items-center shrink-0">
        <img src={iprPrefect} className="w-[85px] lg:w-[100px] xl:w-[110px]" alt="Logo" />
      </Link>

      {/* Navigation Links */}
      <div className="flex items-center gap-2 lg:gap-4 xl:gap-6">
        {navItems.map((item) => (
          <div
            key={item.title}
            onMouseEnter={() => {
              setActiveMenu(item.title);
              setActiveSubmenu(0);
            }}
            onMouseLeave={() => setActiveMenu(null)}
            className="relative py-1"
          >
            {/* Parent Item - NOT CLICKABLE, only hover trigger */}
            <div className="whitespace-nowrap text-xs lg:text-sm xl:text-base font-medium text-gray-700 hover:text-yellow-500 transition-colors duration-200 cursor-default flex items-center gap-0.5 lg:gap-1">
              {item.title}
              {item.submenu && (
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${
                    activeMenu === item.title ? 'rotate-180' : ''
                  }`}
                />
              )}
            </div>

            {/* Simple Dropdown (no children) */}
            {item.submenu &&
              activeMenu === item.title &&
              !item.submenu[0]?.children && (
                <div className="absolute top-full left-0 pt-2 w-64 lg:w-72 z-50">
                  <div className="bg-white shadow-xl rounded-md p-3 border border-gray-100 max-h-[75vh] overflow-y-auto">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.title}
                        to={subItem.link}
                        onClick={() => setActiveMenu(null)}
                        className="block py-2 px-3 rounded text-xs lg:text-sm text-gray-700 hover:bg-gray-50 hover:text-yellow-600 transition-colors"
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}

            {/* Mega Dropdown (with children) */}
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
                            onClick={() => setActiveMenu(null)}
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

                    {/* Right Content Panel */}
                    <div className="flex-1 p-6">
                      {item.submenu[activeSubmenu]?.children && (
                        <ul className="space-y-3">
                          {item.submenu[activeSubmenu].children.map(
                            (child, childIndex) => (
                              <li key={childIndex}>
                                <Link
                                  to={child.link}
                                  onClick={() => setActiveMenu(null)}
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
          className="whitespace-nowrap rounded-md border-2 px-3 lg:px-5 py-1.5 text-xs lg:text-sm xl:text-base font-medium border-yellow-500 text-yellow-600 hover:bg-yellow-500 hover:text-black transition-colors"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}