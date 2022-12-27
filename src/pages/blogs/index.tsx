import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { client } from "../../../client";
import Link from "next/link";
import Image from "next/image";
import { trpc } from "../../utils/trpc";
import { marked } from "marked";
import Head from "next/head";

function Blogs() {
  const [articles, setArticles] = useState<any>([]);
  const [input, setInput] = useState({
    name: "",
    email: "",
    telefoon: "",
  });
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const { mutate, data, isLoading } = trpc.contact.addContact.useMutation();

  function scrolltoId() {
    const access = document.getElementById("contact");
    access?.scrollIntoView({ behavior: "smooth" });
  }
  const { mutate: mutate_res, data: data_res } =
    trpc.contact.getItems.useMutation();

  useEffect(() => {
    mutate_res();
  }, []);

  return (
    <>
      <Head>
        <title>Ruby Finance - blogs over boekhouden en administratie</title>
        <meta
          name="description"
          content="Ruby Finance boekhouden en administatie, online boekhouden voor ZZp'ers en eenmanszaken voor een lage prijs en kwaliteit service."
        />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta
          http-equiv="Content-Type"
          content="text/html; charset=ISO-8859-1"
        />
      </Head>
      <div className="h-full min-h-screen bg-white text-black">
        <Header />
        <div className="h-full min-h-screen">
          <div className="flex justify-center">
            <h1 className="text-4xl font-bold">Blogs</h1>
          </div>
          <div className="flex justify-center">
            <div className="mt-4 w-5/6 justify-center p-2 lg:mt-7 lg:w-4/6 lg:p-10">
              {data_res?.map((article: any, index: number) => {
                const parsedText = marked.parse(article.fields.text);

                return (
                  <div key={index}>
                    <Link href={`/blogs/${article.fields.title}`}>
                      <div
                        className="mt-2 border border-gray-200  shadow-sm"
                        key={index}
                      >
                        <div className="cursor-pointer  ">
                          <div className="m-auto mt-4 flex h-32 max-w-4xl rounded-md shadow-2xl lg:h-52">
                            {article?.fields.image.fields.file.url && (
                              <img
                                src={article.fields.image.fields.file.url}
                                alt="blog_banner"
                                className="w-full rounded-b-md object-cover "
                              />
                            )}
                          </div>
                          <div className="m-auto mt-4 flex flex-col items-center justify-center lg:w-10/12">
                            <div className="flex items-center text-[#2C234D]">
                              <h3 className="text-md font-bold text-[#2C234D] lg:text-4xl">
                                {article.fields.title}
                              </h3>
                            </div>
                            <div className="m-auto mt-2 flex h-6 w-full text-gray-700">
                              <p
                                className="... truncate"
                                dangerouslySetInnerHTML={{ __html: parsedText }}
                              />
                              <p>...</p>
                            </div>
                          </div>
                          <div className="mt-6 flex justify-center">
                            <button className="rounded-full border border-black bg-transparent p-2 font-bold transition hover:bg-black hover:text-white">
                              Lees meer
                            </button>
                          </div>
                        </div>
                        <div className="py-2 lg:py-10" />
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
            <div className="w-1/6 lg:w-2/6">
              <h2 className="text-md mt-4 font-semibold lg:text-3xl">
                Nieuwe blogs
              </h2>
              {data_res?.map((article: any, index: number) => {
                return (
                  <div key={index}>
                    <Link href={`/blogs/${article.fields.title}`}>
                      <div className="cursor-pointer">
                        <hr className="mt-6 border-t text-black"></hr>
                        <div className="mt-0 flex h-16 w-20 rounded-lg shadow-2xl lg:mt-4 lg:h-32 lg:w-80">
                          <img
                            src={article.fields.image.fields.file.url}
                            alt="blog_banner_nieuw"
                            className="w-full rounded-lg object-cover "
                          />
                        </div>
                        <div className="flex">
                          <h3 className="mt-2 flex text-xs font-semibold text-[#2C234D] lg:text-2xl">
                            {article.fields.title}
                          </h3>
                        </div>
                        <div className="mt-1 grid grid-cols-1 gap-2 text-xs text-gray-700 lg:mt-0 lg:flex">
                          <p className=" text-xs">{article.fields.author}</p>
                          <p className=" text-xs">{article.fields.date}</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div id="contact" className=" h-full min-h-screen bg-white ">
          <div className="mt-10 flex flex-col items-center justify-center p-12">
            <h2 className="text-3xl font-bold">Plan een gesprek,</h2>
            <h2 className="text-3xl font-bold">wij helpen u verder</h2>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center">
              <div className="hidden lg:-mt-80 lg:flex lg:pr-20">
                <Image
                  src="/realtime.png"
                  alt="computerscherm"
                  height={300}
                  width={300}
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
                        setInput((prev) => ({ ...prev, name: e.target.value }))
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
                        setInput((prev) => ({ ...prev, email: e.target.value }))
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
                        className="mt-6 w-full rounded-full border-2 border-purple-400 bg-transparent p-2 font-bold text-purple-400 transition hover:bg-purple-400 hover:text-white"
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
                      <button className="mt-6 w-full rounded-full border-2 border-purple-400 bg-transparent p-2 font-bold text-purple-400 transition hover:bg-purple-400 hover:text-white">
                        Verzenden..
                      </button>
                    </div>
                  )}
                </div>
              </div>
              <div className="hidden lg:flex lg:pl-20 lg:pt-80">
                <Image
                  src="/coding.png"
                  alt="man_achter_laptop"
                  height={300}
                  width={300}
                />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Blogs;
