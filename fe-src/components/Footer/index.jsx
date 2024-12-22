"use client";
import React, {useState, useEffect} from "react";
import { usePathname } from 'next/navigation';

const Footer = () => {
  return <footer
    className="absolute bottom-0 w-full backdrop-blur backdrop-brightness-75">
    <div className="mx-6 py-10 text-center md:text-left">
      <div className="h-[15vh] grid-1 grid gap-8 lg:grid-cols-3 justify-items-center">
        <div className="">
          <h6
            className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
            <span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path
                  d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
              </svg>
            </span>
            Open for Opportunities
          </h6>
          <p>
            Feel free to reach out for any kind of collaboration. 
          </p>
        </div>
        <div>
          <h6
            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
            Useful links
          </h6>
          <p className="mb-4">
            <a href="#!">About</a>
          </p>
          <p className="mb-4">
            <a href="#!">Projects</a>
          </p>
          <p className="mb-4">
            <a href="#!">Blogs</a>
          </p>
        </div>
        <div>
          <h6
            className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
            Contact
          </h6>
          <p className="mb-4 flex items-center justify-center md:justify-start">
            <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
            </span>
            Jakarta, Indonesia
          </p>
          <p className="mb-4 flex items-center justify-center md:justify-start">
            <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path
                  d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                <path
                  d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
              </svg>
            </span>
            hello@williamwibowo.com
          </p>
          <a href="https://www.linkedin.com/in/wwibowo/" className="mb-4 flex items-center justify-center md:justify-start">
            <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
              
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 448 512">
                  <path
                    d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                </svg>
              </span>
              William Wibowo
          </a>
        </div>
      </div>
    </div>
  </footer>
}

export default Footer;