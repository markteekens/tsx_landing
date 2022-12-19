import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

import { trpc } from "../utils/trpc";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();

  const features = [
    {
      name: "Quality",
      description: "Our delivered products are always good quality.",
    },
    {
      name: "Ui Design",
      description:
        "We use the latest trending design experience for your application with TailwindCSS",
    },
    {
      name: "SEO",
      description:
        "We make sure that the default seach engine optimalization is the at best possible state at delivery time.",
    },
    {
      name: "AI",
      description:
        "We can intergrate AI in your application to have a better experience for users.",
    },
    {
      name: "Blockchain",
      description:
        "Blockchain can make your transactions safe with three way bookkeeping, and offers many good products.",
    },
    {
      name: "Scalable",
      description:
        "All our products are scalable at a very low cost for future upscaling applications.",
    },
  ];
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full min-h-screen bg-[url('https://i.imgur.com/oQq8930.jpg')] bg-cover bg-bottom">
        <Header />
        <main className="">
          <div className="-mt-20 flex items-center p-4">
            <div className="ml-4 text-7xl font-medium">
              <h2 className="bg-gradient-to-r from-purple-300 to-transparent">
                Today&apos;s technology plays
              </h2>
              <h2>a crucial role in shaping </h2>
              <h2>the future of the world</h2>
              <button className=" mt-6 flex rounded-full border bg-black px-10 py-3 text-base font-semibold text-white no-underline transition hover:border-black hover:bg-white/20 hover:text-black ">
                Contact us
                <svg
                  aria-hidden="true"
                  className="ml-2 -mr-1 h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <div className="flex min-h-screen items-center justify-center px-16">
                <div className="relative w-full max-w-lg">
                  <div className="absolute top-0 -left-4 h-72 w-72 animate-blob rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
                  <div className="animation-delay-2000 absolute top-0 -right-4 h-72 w-72 animate-blob rounded-full bg-purple-600 opacity-70 mix-blend-multiply blur-xl filter"></div>
                  <div className="animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 animate-blob rounded-full bg-purple-700 opacity-70 mix-blend-multiply blur-xl filter"></div>
                  <div className="relative m-8 space-y-4">
                    <div className="flex items-center justify-between space-x-8 rounded-lg bg-white p-5">
                      <div className="t flex font-medium">
                        <img
                          className="h-20 w-20 shadow-lg shadow-gray-700"
                          src="https://i.imgur.com/uzmbDFL.jpg"
                          alt=""
                        />
                        <p className="p-4">
                          AI has the power to revolutionize our modern world
                        </p>
                      </div>
                      <div></div>
                    </div>
                    <div className="flex items-center justify-between space-x-8 rounded-lg bg-white p-5">
                      <div className="t flex font-medium">
                        <p className="p-4">
                          Could potentially disrupt traditional industries and
                          business models.
                        </p>
                        <img
                          className="h-20 w-20 object-fill shadow-lg shadow-gray-700"
                          src="https://i.imgur.com/9Kd2dFt.jpg"
                          alt=""
                        />
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="flex justify-center text-center text-black">
              <div className="flex flex-col">
                <h1 className="text-3xl">What we can offer...</h1>

                <div className="">
                  <div className="mx-auto -mt-10 grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                    <div>
                      <p className="mt-4 flex text-black">
                        <small className="text-5xl font-normal">&quot;</small>
                        <p className="text-2xl font-normal">
                          We develop tailored{" "}
                          <small className="font-bold text-black">
                            software solutions
                          </small>{" "}
                          that meet the specific needs of your business. Our
                          team can integrate{" "}
                          <small className="font-bold text-purple-400">
                            artificial intelligence
                          </small>{" "}
                          into your software to enhance automation and
                          functionality. And we offer{" "}
                          <small className="mr-1 font-bold text-emerald-500">
                            integration of blockchain
                          </small>
                          technology to provide secure and transparent data
                          management for your business.{" "}
                        </p>
                        <small className="mt-52 text-5xl">&quot;</small>
                      </p>

                      <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                        {features.map((feature) => (
                          <div
                            key={feature.name}
                            className="group border-t border-gray-200 pt-4 transition hover:border-orange-300"
                          >
                            <dt className="text-2xl font-normal group-hover:text-orange-400">
                              {feature.name}
                            </dt>
                            <dd className="mt-2 text-sm text-gray-500">
                              {feature.description}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
                      <img
                        src="https://i.imgur.com/uzmbDFL.jpg"
                        alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                        className="rounded-lg bg-gray-100"
                      />
                      <img
                        src="https://i.imgur.com/uzmbDFL.jpg"
                        alt="Top down view of walnut card tray with embedded magnets and card groove."
                        className="rounded-lg bg-gray-100"
                      />
                      <img
                        src="https://i.imgur.com/uzmbDFL.jpg"
                        alt="Side of walnut card tray with card groove and recessed card area."
                        className="rounded-lg bg-gray-100"
                      />
                      <img
                        src="https://i.imgur.com/uzmbDFL.jpg"
                        alt="Walnut card tray filled with cards and card angled in dedicated groove."
                        className="rounded-lg bg-gray-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Home;
