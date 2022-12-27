import Head from "next/head";
import Link from "next/link";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function pricing() {
  return (
    <>
      <Head>
        <title>TSX Technology Group</title>
        <meta
          name="description"
          content="TSX Technology Group - Software Oplossingen op maat"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
      </Head>
      <div className="h-full min-h-screen bg-[url('https://i.imgur.com/oQq8930.jpg')] bg-cover bg-bottom">
        <Header />
        <div className="m-auto flex min-h-screen  flex-col">
          <h2 className="mt-10 p-4 text-center text-3xl font-normal">
            Onze Prijzen
          </h2>
          <section className="">
            <div className="mx-auto max-w-screen-xl py-8 px-4 lg:py-16 lg:px-6">
              <div className="mx-auto mb-8 max-w-screen-md text-center lg:mb-12">
                <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-gray-900 ">
                  Ontworpen voor zakelijke teams zoals het uwe
                </h2>
                <p className="mb-5 font-normal text-gray-900 sm:text-xl">
                  Hier bij TSX richten we ons op markten waar{" "}
                  <span className="font-bold text-black">technologie</span>,{" "}
                  <span className="font-bold text-emerald-500">innovatie</span>,
                  en{" "}
                  <span className="font-bold text-purple-500">kapitaal </span>
                  langetermijnwaarde kan ontgrendelen.
                </p>
              </div>
              <div className="space-y-3 sm:gap-2 lg:grid lg:grid-cols-2 lg:space-y-0">
                <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white bg-opacity-70 p-6 text-center text-gray-900 shadow backdrop-blur-sm  xl:p-8">
                  <h3 className="mb-4 text-2xl font-semibold">
                    Full stack applicatie
                  </h3>
                  <p className="font-light text-gray-900  sm:text-lg">
                    Huur een full stack developer in om je business te laten
                    groeien.
                  </p>
                  <div className="my-8 flex items-baseline justify-center">
                    <span className="mr-2 text-5xl font-extrabold">€45</span>
                    <span className="text-gray-500 ">/uur</span>
                  </div>

                  <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>volledig op maat</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>gratis kennismakingsgesprek</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>geen setup, of verborgen kosten</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Duur:{" "}
                        <span className="font-semibold">
                          2 - 5 maanden (1 developer)
                        </span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        agile werkprocess:{" "}
                        <span className="font-semibold">in sprints</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Stack:{" "}
                        <span className="font-semibold">
                          NextJS, Typescript, NodeJS
                        </span>
                      </span>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <button className="mt-2 ml-8 flex rounded-full border border-black bg-black px-10 py-3 text-base font-semibold text-white no-underline transition hover:border-black hover:bg-white/20 hover:text-black ">
                      Vraag offerte aan
                    </button>
                  </Link>
                </div>

                <div className="mx-auto flex max-w-lg flex-col rounded-lg border border-gray-100 bg-white bg-opacity-70 p-6 text-center text-gray-900 shadow backdrop-blur-sm  xl:p-8">
                  <h3 className="mb-4 text-2xl font-semibold">
                    Landing page/multi page
                  </h3>
                  <p className="font-light text-gray-900  sm:text-lg">
                    Laat een verkopende website maken door een ervaren
                    webdeveloper.
                  </p>
                  <div className="my-8 flex items-baseline justify-center">
                    <span className="mr-2 text-5xl font-extrabold">€30</span>
                    <span className="text-gray-500 ">/uur</span>
                  </div>

                  <ul role="list" className="mb-8 space-y-4 text-left">
                    <li className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>volledig op maat</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>inclusief teksten</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>gratis kennismakingsgesprek</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Duur: <span className="font-semibold">1-3 weken</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Kosten ca:{" "}
                        <span className="font-semibold">€400 - €700</span>
                      </span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <svg
                        className="h-5 w-5 flex-shrink-0 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>
                        Stack:{" "}
                        <span className="font-semibold">
                          NextJS, Typescript
                        </span>
                      </span>
                    </li>
                  </ul>
                  <Link href="/contact">
                    <button className="mt-2 ml-8 flex rounded-full border border-black bg-black px-10 py-3 text-base font-semibold text-white no-underline transition hover:border-black hover:bg-white/20 hover:text-black ">
                      Vraag offerte aan
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default pricing;
