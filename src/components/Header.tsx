import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
function Header() {
  const { data: sessionData } = useSession();
  return (
    <header className="sticky top-0 z-10 flex items-center  justify-between p-2 backdrop-blur-sm">
      <div className="flex items-center">
        <Link href="/">
          <img
            className="h-14 w-14"
            src="https://i.imgur.com/eSWxl9U.png"
            alt=""
          />
        </Link>
        <p className="mt-9 ml-2 font-light">Technology Group</p>
      </div>
      <div className="flex gap-4 text-2xl font-normal">
        <Link href="/">
          <h2 className="text-black hover:text-emerald-500">Home</h2>
        </Link>
        <Link href="/blogs">
          <h2 className="text-black hover:text-emerald-500">Blogs</h2>{" "}
        </Link>
        <Link href="/contact">
          <h2 className="text-black hover:text-emerald-500">Contact</h2>{" "}
        </Link>
        <Link href="/diensten">
          <h2 className="text-black hover:text-emerald-500">Diensten</h2>
        </Link>

        <Link href="/toekomst">
          <h2 className="text-black hover:text-emerald-500">Toekomst</h2>
        </Link>
        <Link href="/prijzen">
          <h2 className="text-black hover:text-emerald-500">Prijzen</h2>
        </Link>
        <Link href="/cases">
          <h2 className="text-black hover:text-emerald-500">Cases</h2>
        </Link>
      </div>
      <button
        onClick={sessionData ? () => signOut() : () => signIn()}
        type="button"
        className="dark:focus:ring-[#4285F4]/55 mr-2 mb-2 inline-flex items-center rounded-lg bg-black px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-black/90 focus:outline-none focus:ring-4 focus:ring-[#4285F4]/50"
      >
        <svg
          className="mr-2 -ml-1 h-4 w-4"
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="google"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488 512"
        >
          <path
            fill="currentColor"
            d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
          ></path>
        </svg>
        {sessionData ? "Log uit" : "Log in"} met Google
      </button>
    </header>
  );
}

export default Header;
