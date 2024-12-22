"use client";
import React, {useState, useEffect} from "react";
import { usePathname } from 'next/navigation';

const NavbarButton = (menuName, currentPage) => {
  const path = currentPage.toLowerCase().split("/")[1]
  const page = menuName.toLowerCase()

  let isSelected = path == page
  let linkPath = `/${page}`
  
  if (page == "home") {
    linkPath = "/"
    if (currentPage == "/") {
      isSelected = true
    }
  }
  
  return isSelected ? 
  <li className="block text-center align-middle">
    <a href={linkPath} className="font-mono text-white hover:text-gray-400 bg-gray-800 p-2 rounded">{menuName}</a>
  </li> 
  :
  <li className="block text-center align-middle">
    <a href={linkPath} className="font-mono text-gray-400 hover:text-white p-2 rounded hover:bg-gray-700">{menuName}</a>
  </li>
}

const Navbar = () => {
  const currentPage = usePathname();
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
    style={{opacity: isScrollUp ? 1 : 0, "pointerEvents": isScrollUp ? "auto" : "none"}} 
    className="transition-opacity delay-100 duration-500 ease-in-out backdrop-blur backdrop-brightness-75 fixed w-full z-50 top-0 start-0"
  >
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a href="#" className="flex items-center space-x-3">
          <span className="self-center font-mono text-2xl whitespace-nowrap dark:text-white">William Wibowo</span>
      </a>
      <button 
        data-collapse-toggle="navbar" 
        type="button" 
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
        onClick={()=>{setIsMenuOpened(!isMenuOpened)}}
      >
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
      </button>
      <div className={`items-center justify-between ${isMenuOpened? "inline" : "hidden"} md:inline w-full md:w-auto md:order-1`} id="navbar">
        <ul className="flex gap-4 flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0 md:border-0">
          {NavbarButton("Home", currentPage)}
          {NavbarButton("About", currentPage)}
          {NavbarButton("Project", currentPage)}
          {NavbarButton("Blog", currentPage)}
        </ul>
      </div>
    </div>
</nav>
};

export default Navbar;


