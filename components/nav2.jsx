import React from "react";

export default function Nav2() {
  return (
    <aside class="p-5 w-52" aria-label="Sidebar">
      <div class="flex py-4 px-3 ">
        <ul class="mt-2 mx-5 space-y-2 divide-y divide-solid divide-stone-600">
          <li>
            <a
              href="/"
              class="flex p-2 rounded-lg text-white hover:bg-gray-800"
            >
              <svg
                class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
              </svg>
              <span class="ml-3">Home</span>
            </a>
          </li>
          <li></li>
        </ul>
        <ul class="space-y-2 divide-y divide-solid divide-stone-600">
          <li class="pt-2">
            <a
              href="/contact"
              class="flex p-2 rounded-lg text-white hover:bg-gray-800"
            >
              <svg
                class="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                  clip-rule="evenodd"
                ></path>{" "}
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">contact</span>
            </a>
          </li>
          <li></li>
        </ul>
      </div>
    </aside>
  );
}
