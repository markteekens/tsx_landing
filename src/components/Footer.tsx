import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="p-4 shadow  md:px-6 md:py-8">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link href="/">
          <img
            className="h-14 w-14"
            src="https://i.imgur.com/eSWxl9U.png"
            alt=""
          />
        </Link>
        <ul className="mb-6 flex flex-wrap items-center text-sm sm:mb-0">
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Contact
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6 ">
              Future
            </a>
          </li>
          <li>
            <a href="#" className="mr-4 hover:underline md:mr-6">
              Pricing
            </a>
          </li>
          <li>
            <a href="#" className="hover:underline">
              Projects
            </a>
          </li>
        </ul>
      </div>
      <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />
      <span className="block text-sm text-gray-500 dark:text-gray-400 sm:text-center">
        © 2022{" "}
        <a href="https://flowbite.com/" className="hover:underline">
          TSX™
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  );
}

export default Footer;
