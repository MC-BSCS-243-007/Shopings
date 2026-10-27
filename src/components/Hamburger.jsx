import React from 'react';

const HamburgerMenu = () => {
  return (
    <div className="sm:hidden relative">
      {/* Hidden checkbox to toggle menu */}
      <input type="checkbox" id="menu-toggle" className="peer hidden" />

      {/* Hamburger Icon */}
      <label htmlFor="menu-toggle" className="flex flex-col w-6 cursor-pointer p-2">
        <span className="h-0.5 bg-black mb-1.5"></span>
        <span className="h-0.5 bg-black mb-1.5"></span>
        <span className="h-0.5 bg-black"></span>
      </label>

      {/* Menu Content (only visible when checkbox is checked) */}
      <div className="hidden peer-checked:block absolute bg-gray-100 p-4 mt-2 rounded shadow">
        <a href="#" className="block py-2">Home</a>
        <a href="#" className="block py-2">About</a>
        <a href="#" className="block py-2">Contact</a>
      </div>
    </div>
  );
};

export default HamburgerMenu;
