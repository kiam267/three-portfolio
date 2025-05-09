import React from 'react';
import { useState } from 'react';
import { navLinks } from '../constants';
import { useEffect } from 'react';

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(item => (
        <li className="nav-li" key={item.id}>
          <a href={item.href} className="nav-link_a">
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const [BDTime, setDBTime] = useState(
    new Date().toLocaleTimeString('en-EN', {
      timeZone: 'Asia/Dhaka',
      hour12: true,
      // dateStyle: 'medium',
      // timeStyle: 'short',
    })
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setDBTime(
        new Date().toLocaleTimeString('en-EN', {
          timeZone: 'Asia/Dhaka',
          hour12: true,
          // dateStyle: 'medium',
          // timeStyle: 'short',
        })
      );
    }, 1000);
    return () => clearInterval(interval);
  }, [BDTime]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto c-space">
          <a
            href="/"
            className="text-neutral-400 font-bold text-xl hover:text-white transition-colors"
          >
            Kiam / {BDTime}
          </a>
          <button
            className="text-neutral-400 hover:text-white-500 focus:outline-none sm:hidden flex "
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            <img
              src={
                isOpen
                  ? 'assets/close.svg'
                  : 'assets/menu.svg'
              }
              alt="toggle"
              className="w-6 h-6"
            />
          </button>
          <nav className="sm:flex hidden">
            <NavItems />
          </nav>
        </div>
      </div>

      <div
        className={`nav-sidebar ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <nav className="p-5 ">
          <NavItems />
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
