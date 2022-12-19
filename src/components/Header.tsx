import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
function Header() {
  const { data: sessionData } = useSession();
  return (
    <header className="sticky top-0 flex items-center justify-between  p-2 backdrop-blur-sm">
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
      <div className="flex gap-6 text-2xl font-normal">
        <Link href="/">
          <h2>Home</h2>
        </Link>
        <h2>Contact</h2>
        <Link href="/services">
          <h2>Services</h2>
        </Link>

        <h2>Future</h2>
        <h2>Pricing</h2>
        <h2>Projects</h2>
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
        {sessionData ? "Sign out" : "Sign in"} with Google
      </button>
    </header>
  );
}

export default Header;
