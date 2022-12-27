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
          <Link href="/contact">
            <li>
              <p className="mr-4 hover:underline md:mr-6 ">Contact</p>
            </li>
          </Link>
          <Link href="/diensten">
            <li>
              <p className="mr-4 hover:underline md:mr-6">Diensten</p>
            </li>
          </Link>
          <Link href="/toekomst">
            <li>
              <p className="mr-4 hover:underline md:mr-6 ">Toekomst</p>
            </li>
          </Link>

          <Link href="/prijzen">
            <li>
              <p className="mr-4 hover:underline md:mr-6">Prijzen</p>
            </li>
          </Link>

          <Link href="/cases">
            <li>
              <p className="hover:underline">Cases</p>
            </li>
          </Link>
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
