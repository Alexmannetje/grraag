import React from "react";
import Head from "next/head";

export default function Nav() {
  return (
    <>
      <Head>
        <title>Grraag</title>
        <link rel="shortcut icon" href="Grraag_logo.png" type="image/png" />
      </Head>
      <nav className="bg-gray-800 py-2.5 shadow-xl">
        <div className="flex flex-wrap items-center justify-between max-w-screen-lg mx-auto">
          <a href="/" className="flex">
            <img src="Grraag_logo.png" width={50} />
            <span className="ml-4 self-center text-xl font-semibold whitespace-nowrap text-gray-300">
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
