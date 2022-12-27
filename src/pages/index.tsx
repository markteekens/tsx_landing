import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import Image from "next/image";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";

const Home: NextPage = () => {
  const { data: sessionData } = useSession();
  const [input, setInput] = useState({
    name: "",
    email: "",
    telefoon: "",
  });
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const { mutate, data, isLoading } = trpc.contact.addContact.useMutation();
  const features = [
    {
      name: "Kwaliteit",
      description: "Onze geleverde producten zijn altijd van goede kwaliteit",
    },
    {
      name: "Ui Design",
      description:
        "We gebruiken de nieuwste trending design-ervaring voor uw applicatie met TailwindCSS",
    },
    {
      name: "SEO",
      description:
        "We zorgen ervoor dat de standaard zoekmachine optimalisatie in de best mogelijke staat is op het moment van oplevering.",
    },
    {
      name: "AI",
      description:
        "We kunnen AI integreren in uw applicatie om een ​​betere ervaring voor gebruikers te hebben.",
    },
    {
      name: "Blockchain",
      description:
        "Blockchain kan uw transacties veilig maken met drievoudige boekhouding en biedt veel goede producten.",
    },
    {
      name: "Schaalbaar",
      description:
        "Al onze producten zijn schaalbaar tegen zeer lage kosten voor toekomstige opschalingstoepassingen.",
    },
  ];

  const slideRight = () => {
    const slider: any = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideLeft = () => {
    const slider: any = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

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
      <div className="h-full min-h-screen ">
        <main className="">
          <div className="bg-[url('https://i.imgur.com/oQq8930.jpg')] bg-cover bg-bottom">
            <Header />
            <div className="mt-20 flex items-center justify-between  p-4 lg:-mt-20">
              <div className="ml-4 text-2xl font-medium lg:text-6xl">
                <h2 className="bg-gradient-to-r from-purple-300 to-transparent">
                  De technologie van vandaag
                </h2>
                <h2>speelt een cruciale rol bij het</h2>
                <h2 className="flex">
                  vormgeven van onze&nbsp;
                  <p className="bg-gradient-to-r from-transparent to-purple-300 text-purple-900 ">
                    <Typewriter
                      options={{
                        strings: [
                          "skills",
                          "planeet",
                          "interacties",
                          "toekomst",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </p>
                </h2>
                <p className="mt-2 text-base font-normal">
                  Laat ons uw bedrijf helpen groeien en werk samen met TSX.
                </p>
                <Link href="/contact">
                  <button className=" mt-6 flex rounded-full border border-gray-600 bg-transparent px-10 py-3 text-base font-semibold no-underline transition hover:border-black hover:bg-white/20 hover:text-black ">
                    Vraag offerte aan
                    <svg
                      aria-hidden="true"
                      className="ml-2 -mr-1 h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </Link>
              </div>
              <div className="hidden lg:flex">
                <div className="flex min-h-screen items-center justify-center px-16">
                  <div className="relative w-full max-w-lg">
                    <div className="absolute top-0 -left-4 h-72 w-72 animate-blob rounded-full bg-purple-300 opacity-70 mix-blend-multiply blur-xl filter"></div>
                    <div className="animation-delay-2000 absolute top-0 -right-4 h-72 w-72 animate-blob rounded-full bg-purple-600 opacity-70 mix-blend-multiply blur-xl filter"></div>
                    <div className="animation-delay-4000 absolute -bottom-8 left-20 h-72 w-72 animate-blob rounded-full bg-purple-700 opacity-70 mix-blend-multiply blur-xl filter"></div>
                    <div className="relative m-8 space-y-4">
                      <div className="flex items-center justify-between space-x-8 rounded-lg bg-white p-5">
                        <div className="t flex font-medium">
                          <Image
                            className="h-20 w-20 shadow-lg shadow-gray-700"
                            src="/ChatGPT.jpg"
                            alt="ChatGPT"
                            width={50}
                            height={50}
                          />
                          <p className="p-4">
                            AI heeft de kracht om onze moderne wereld radicaal
                            te veranderen.
                          </p>
                        </div>
                        <div></div>
                      </div>
                      <div className="flex items-center justify-between space-x-8 rounded-lg bg-white p-5">
                        <div className="t flex font-medium">
                          <p className="p-4">
                            Kan traditionele industrieën en bedrijfsmodellen
                            mogelijk verstoren
                          </p>
                          <Image
                            className="h-20 w-20 object-fill shadow-lg shadow-gray-700"
                            src="/horse.png"
                            alt="women of TSX"
                            width={50}
                            height={50}
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
              <div className="mt-48 flex justify-center text-center text-black lg:mt-0">
                <div className="flex flex-col">
                  <h1 className="text-3xl">Wat wij kunnen bieden...</h1>
                  <div className="">
                    <h2 className="mt-4 text-2xl font-normal lg:mt-20">
                      Cases
                    </h2>
                    <div className="mt-4 flex w-screen  items-center">
                      <div
                        onClick={slideRight}
                        className="flex-co flex h-40 cursor-pointer items-center rounded-r-md bg-transparent backdrop-blur-sm"
                      >
                        <MdChevronLeft className="text-purple-500" size={40} />
                      </div>
                      <div
                        id="slider"
                        className="scroll m-auto flex gap-4 overflow-x-scroll scroll-smooth p-2 scrollbar-hide sm:gap-6 lg:gap-20"
                      >
                        <Image
                          src="/deadhabitswebsite.jpg"
                          alt=""
                          height={300}
                          width={320}
                          className="rounded-lg bg-gray-100 duration-300 ease-in-out hover:scale-105"
                        />
                        <Image
                          src="/markentingwebsite.jpg"
                          alt=""
                          height={300}
                          width={320}
                          className="rounded-lg bg-gray-100 duration-300 ease-in-out hover:scale-105"
                        />
                        <Image
                          src="/owywebsite.jpg"
                          alt=""
                          height={300}
                          width={320}
                          className="rounded-lg bg-gray-100 duration-300 ease-in-out hover:scale-105"
                        />
                        <Image
                          src="/rubyplatformwebsite.png"
                          alt=""
                          height={300}
                          width={320}
                          className="rounded-lg bg-gray-100 duration-300 ease-in-out hover:scale-105"
                        />
                        <Image
                          src="/rubywebsite.jpg"
                          alt=""
                          height={300}
                          width={320}
                          className="rounded-lg bg-gray-100 duration-300 ease-in-out hover:scale-105"
                        />
                        <Image
                          src="/brandninjawebsite.png"
                          alt=""
                          height={300}
                          width={320}
                          className="rounded-lg bg-gray-100 duration-300 ease-in-out hover:scale-105"
                        />
                        <Image
                          src="/vetaappwebsite.jpg"
                          alt=""
                          height={300}
                          width={320}
                          className="rounded-lg bg-gray-100 duration-300 ease-in-out hover:scale-105"
                        />
                        <Image
                          src="/vetawebsite.jpg"
                          alt=""
                          height={300}
                          width={320}
                          className="rounded-lg bg-gray-100 duration-300 ease-in-out hover:scale-105"
                        />
                        <Image
                          src="/crewstarswebsite.jpg"
                          alt=""
                          height={300}
                          width={320}
                          className="rounded-lg bg-gray-100 duration-300 ease-in-out hover:scale-105"
                        />
                        <Image
                          src="/ironstovewebsite.jpg"
                          alt=""
                          height={300}
                          width={320}
                          className="rounded-lg bg-gray-100 duration-300 ease-in-out hover:scale-105"
                        />
                        <Image
                          src="/metabuddieswebsite.jpg"
                          alt=""
                          height={300}
                          width={320}
                          className="rounded-lg bg-gray-100 duration-300 ease-in-out hover:scale-105"
                        />
                      </div>
                      <div
                        onClick={slideLeft}
                        className=" flex-co flex h-40 cursor-pointer items-center rounded-l-md bg-transparent backdrop-blur-sm"
                      >
                        <MdChevronRight className="text-purple-500" size={40} />
                      </div>
                    </div>
                    <Link href="/cases">
                      <div className="z-20 flex justify-center">
                        <button className=" mt-10 flex rounded-full border border-gray-600 bg-transparent px-10 py-3 text-base font-semibold no-underline transition hover:border-purple-300 hover:bg-white/20 hover:text-black ">
                          Bekijk alle Cases
                          <svg
                            aria-hidden="true"
                            className="ml-2 -mr-1 h-5 w-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </Link>
                  </div>

                  <div className="">
                    <div className="mx-auto mt-20 grid max-w-2xl grid-cols-1 items-center gap-y-16 gap-x-8 py-24 px-4 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
                      <div>
                        <p className="mt-4 flex text-black">
                          <small className="text-5xl font-normal">&quot;</small>
                          <p className="text-2xl font-normal">
                            Wij ontwikkelen op maat gemaakte{" "}
                            <small className="font-bold text-black">
                              software oplossingen
                            </small>{" "}
                            die voldoen aan de specifieke behoeften van uw
                            bedrijf. Ons team kan{" "}
                            <small className="font-bold text-purple-400">
                              artificial intelligence
                            </small>{" "}
                            integreren in uw software om de automatisering te
                            verbeteren en functionaliteit. En wij bieden{" "}
                            <small className="mr-1 font-bold text-emerald-500">
                              integratie van blockchain
                            </small>
                            technologie om veilige en transparante gegevens te
                            verstrekken.{" "}
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
                        <Image
                          src="https://i.imgur.com/KBOHpfd.jpg"
                          alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
                          className="rounded-lg bg-gray-100"
                          width={300}
                          height={300}
                        />
                        <Image
                          src="https://i.imgur.com/Igfises.png"
                          alt="Top down view of walnut card tray with embedded magnets and card groove."
                          className="rounded-lg bg-gray-100"
                          width={300}
                          height={300}
                        />
                        <Image
                          src="https://i.imgur.com/IDvseNw.jpg"
                          alt="Side of walnut card tray with card groove and recessed card area."
                          className="rounded-lg bg-gray-100"
                          width={300}
                          height={300}
                        />
                        <Image
                          src="/techy.jpeg"
                          alt="Walnut card tray filled with cards and card angled in dedicated groove."
                          className="rounded-lg bg-gray-100 "
                          width={300}
                          height={300}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div id="contact" className=" h-full min-h-screen  ">
              <div className="mt-10 flex flex-col items-center justify-center p-12">
                <h2 className="text-3xl font-bold">Plan een gesprek,</h2>
                <h2 className="text-3xl font-bold">wij helpen u verder</h2>
              </div>
              <div className="flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <div className="hidden lg:-mt-80 lg:flex lg:pr-20">
                    <Image
                      src="/arabianwoman.png"
                      alt="man_achter_laptop"
                      height={200}
                      width={200}
                      className="rounded-lg bg-gray-100"
                    />
                  </div>
                  <div className="rounded-md shadow-md lg:px-10 lg:py-20">
                    <div className="">
                      <div className="flex flex-col">
                        <label
                          className="mr-2 mt-2 font-semibold text-gray-500"
                          htmlFor="name"
                        >
                          Naam:
                        </label>
                        <input
                          placeholder="Naam"
                          className="mt-2 rounded-md border border-gray-200 bg-slate-100 p-2"
                          onChange={(e) =>
                            setInput((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          value={input.name}
                          required
                        />
                      </div>
                      <div className=" flex flex-col">
                        <label
                          className="mr-2 mt-2 font-semibold text-gray-500"
                          htmlFor="email"
                        >
                          Email:
                        </label>
                        <input
                          placeholder="Email"
                          className="mt-2 rounded-md border border-gray-200 bg-slate-100 p-2"
                          onChange={(e) =>
                            setInput((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          type="email"
                          value={input.email}
                          required
                        />
                      </div>
                      <div className=" flex flex-col">
                        <label
                          className="mr-2 mt-2  font-semibold text-gray-500"
                          htmlFor="email"
                        >
                          Tel nr:
                        </label>
                        <input
                          placeholder="Telefoon"
                          className="mt-2 w-80 rounded-md border border-gray-200 bg-slate-100 p-2"
                          onChange={(e) =>
                            setInput((prev) => ({
                              ...prev,
                              telefoon: e.target.value,
                            }))
                          }
                          type="tel"
                          value={input.telefoon}
                          required
                        />
                      </div>
                      <div className="mt-2 p-2">
                        <div className="flex items-center">
                          <input
                            type="checkbox"
                            onChange={() => setIsChecked(!isChecked)}
                            checked={isChecked}
                            className="h-4 w-4 rounded border-gray-300 text-blue-600   "
                          />
                          <label className="ml-2 text-sm font-medium text-gray-900 ">
                            Ja, ik vraag een offerte aan.
                          </label>
                        </div>
                      </div>

                      {!data ? (
                        <div>
                          <button
                            className="mt-6 w-full rounded-full border-2 border-purple-300 bg-transparent p-2 font-bold text-purple-400 transition hover:bg-purple-300 hover:text-white"
                            onClick={() =>
                              mutate({
                                name: input.name,
                                email: input.email,
                                checked: isChecked,
                                telefoon: input.telefoon,
                              })
                            }
                          >
                            Verstuur
                          </button>
                        </div>
                      ) : (
                        <div>
                          <button
                            disabled
                            className="mt-6 w-full rounded-full border-2 border-purple-200 bg-transparent p-2 font-bold text-purple-200 transition hover:bg-purple-200 hover:text-white"
                          >
                            Verzenden..
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="hidden lg:flex lg:pl-20 lg:pt-80">
                    <Image
                      src="/template.png"
                      alt="man_achter_laptop"
                      height={250}
                      width={250}
                      className="rounded-lg bg-gray-100"
                    />
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
