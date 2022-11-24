import React from "react";
import Head from "next/head";

export default function Nav() {
  return (
    <>
      <Head>
        <title>Grraag</title>
        {/* <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" /> */}
      </Head>
      <nav className="bg-gray-800 py-2.5 shadow-xl">
        <div className="flex flex-wrap items-center justify-between max-w-screen-lg mx-auto">
          <a href="/" className="flex">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-gray-300">
              Grraag
            </span>
          </a>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <div class="flex flex-1 items-center justify-end">
              <nav
                aria-label="Site Nav"
                class="hidden lg:flex lg:gap-4 lg:text-xs lg:font-bold lg:uppercase lg:tracking-wide lg:text-gray-500"
              >
                <a
                  href="/"
                  class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-blue-700"
                >
                  Home
                </a>

                <a
                  href="/services"
                  class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-blue-700"
                >
                  Services
                </a>

                <a
                  href="/contact"
                  class="block h-16 border-b-4 border-transparent leading-[4rem] hover:border-current hover:text-blue-700"
                >
                  Contact
                </a>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
