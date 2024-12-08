"use client";
import React, {useState, useEffect} from "react";

const NavbarButton = (menuName, isSelected=false) => {
  return isSelected ? 
  <li className="block text-center align-middle">
    <a href="#" className="font-mono text-white hover:text-gray-600 bg-gray-900 p-2 rounded">{menuName}</a>
  </li> 
  :
  <li className="block text-center align-middle">
    <a href="#" className="font-mono text-gray-400 hover:text-white p-2 rounded hover:backdrop-blur">{menuName}</a>
  </li>
}

const Navbar = () => {
  const [isScrollUp, setIsScrollUp] = useState(true)
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  
  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        setIsScrollUp(false);
        setIsMenuOpened(false);
      } else if (e.deltaY < 10) {
        setIsScrollUp(true);
      }
    };

    window.addEventListener('wheel', handleScroll);

    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return <nav 
    style={{opacity: isScrollUp ? 1 : 0, "pointer-events": isScrollUp ? "auto" : "none"}} 
    className="transition-opacity delay-100 duration-500 ease-in-out backdrop-blur backdrop-brightness-75 fixed w-full z-50 top-0 start-0"
  >
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" className="flex items-center space-x-3">
          <span className="self-center font-mono text-2xl whitespace-nowrap dark:text-white">William Wibowo</span>
      </a>
      <button 
        data-collapse-toggle="navbar" 
        type="button" 
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
        onClick={()=>{setIsMenuOpened(!isMenuOpened)}}
      >
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div className={`items-center justify-between ${isMenuOpened? "inline" : "hidden"} md:inline w-full md:w-auto md:order-1`} id="navbar">
        <ul className="flex gap-4 flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0 md:border-0">
          {NavbarButton("Home", true)}
          {NavbarButton("About")}
          {NavbarButton("Service")}
          {NavbarButton("Contact")}
        </ul>
      </div>
    </div>
</nav>
};

export default Navbar;


