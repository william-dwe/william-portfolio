"use client";
import React from "react";
import Link from 'next/link';
import AnimateLoadOnScroll from "../AnimateLoadOnScroll"


const Footer = () => {
  return <footer
    className="relative lg:absolute lg:bottom-0 w-full backdrop-blur backdrop-brightness-75">
      <AnimateLoadOnScroll direction="up">
        <div className="mx-6 py-10 text-center lg:text-left">
          <div className="lg:h-[15vh] grid grid-cols-1 gap-8 lg:grid-cols-12 justify-items-center">
            <div className="lg:col-start-3 lg:col-span-3">
              <h6
                className="mb-4 flex items-center justify-center font-semibold uppercase lg:justify-start">
                <span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                </span>
                Let&apos;s Connect!
              </h6>
              <p className="mb-4">
                I&apos;m open for any opportunities, my inbox is always ready to receive you email. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
              </p>
              <p className="mb-4 flex items-center justify-center lg:justify-start">
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
            </div>
            <div className="lg:col-start-7 lg:col-span-1">
              <h6
                className="mb-4 flex items-center justify-center font-semibold uppercase lg:justify-start">
                  <span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                    </svg>
                  </span>
                Shortcuts
              </h6>
              <p className="mb-4">
                <Link href="/about">About</Link>
              </p>
              <p className="mb-4">
                <Link href="/project">Projects</Link>
              </p>
              <p className="mb-4">
                <Link href="/blog">Blogs</Link>
              </p>
            </div>
            <div className="lg:col-start-9 lg:col-span-2">
              <h6 className="mb-4 flex items-center justify-center font-semibold uppercase lg:justify-start">
                <span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
                  </svg>
                </span>
                Contact
              </h6>
              <a href="https://www.linkedin.com/in/wwibowo/" className="mb-4 flex items-center justify-center lg:justify-start">
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
              <a href="https://github.com/william-dwe" className="mb-4 flex items-center justify-center lg:justify-start">
                <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 fill-white">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"/>
                  </svg>
                </span>
                william_dwe
              </a>
            </div>
          </div>
        </div>
      </AnimateLoadOnScroll>
  </footer>
}

export default Footer;