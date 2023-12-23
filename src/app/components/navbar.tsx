'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaHome, FaWrench, FaCalendar, FaWarehouse, FaRegListAlt, FaAddressCard,FaChevronDown, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = (dropdownName: any) => {
    if (activeDropdown === dropdownName) {
      setActiveDropdown("");
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const routes = [
    { href: '/almacen', name: 'Almacen', subroutes: ['Registro', 'Lista'], icon: <FaWarehouse className="h-5 w-5" /> },
  ];

  const singleRoutes = [
    { href: '/maintenance/reactive', name: 'Mantenimiento', icon: <FaWrench className="h-5 w-5" /> },
    { href: '/calendario', name: 'Calendario', icon: <FaCalendar className="h-5 w-5" /> },
    { href: '/registro', name: 'Registro', icon: <FaRegListAlt className="h-5 w-5" /> },
    { href: '/contacto', name: 'Contacto', icon: <FaAddressCard className="h-5 w-5" /> },
  ];

  return (
    <nav className="flex items-center justify-between p-6 bg-gray-800 text-white">
      <div className="flex items-center space-x-2">
        <Image src="/bus1.jpg" alt="Logo de la empresa" width={50} height={50} className='rounded-full' />
        <Link href="/">
          <span className="text-lg font-bold flex items-center space-x-2">
            <FaHome className="h-5 w-5" /><span>Inicio</span>
          </span>
        </Link>
      </div>
      <div className="lg:hidden">
        <button className="focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <FaBars size={24} />
        </button>
      </div>
      <div className={`transition-all duration-500 ease-in-out ${isOpen ? "block" : "hidden"} lg:flex lg:items-center lg:space-x-8`}>
        {routes.map((route) => (
          <div key={route.href} className="relative group">
            <div className="flex items-center space-x-2 cursor-pointer hover:shadow-md p-2 rounded-md" onClick={() => toggleDropdown(route.name)}>
              {route.icon}
              <span>{route.name}</span> 
              {route.subroutes ? <FaChevronDown size={12} className={`transition-all duration-200 transform ${activeDropdown === route.name ? 'rotate-180' : ''} ${isOpen ? 'rotate-180' : ''}`} /> : null}
            </div>
            {activeDropdown === route.name && route.subroutes && (
              <div className="absolute z-10 mt-2 py-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all duration-500 ease-in-out transform scale-0 group-hover:scale-100">
                {route.subroutes.map((subroute) => (
                  <Link key={subroute} href={`/${route.href.split('/')[1]}/${subroute.toLowerCase().replace(' ', '-')}`}>
                    <span className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100">
                      {subroute}
                    </span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
        {singleRoutes.map((route) => (
          <Link href={route.href} key={route.href}>
            <div className="flex items-center space-x-2 cursor-pointer hover:shadow-md p-2 rounded-md">
              {route.icon}
              <span>{route.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
