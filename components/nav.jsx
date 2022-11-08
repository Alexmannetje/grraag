import React from "react";

export default function Nav() {
  return (
    <header aria-label="Site Header" className="shadow-sm">
      <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex items-center justify-center gap-4 lg:gap-10">
          <nav
            aria-label="Site Nav"
            className="hidden gap-8 text-sm font-medium md:flex"
          >
            <a className="text-gray-500" href="">
              Over ons
            </a>
            <a className="text-gray-500" href="">
              Projecten
            </a>
            <a className="text-gray-500" href="">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
