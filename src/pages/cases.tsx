import { marked } from "marked";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { trpc } from "../utils/trpc";

function Cases() {
  const { mutate: mutate_res, data: data_res } =
    trpc.contact.getCases.useMutation();

  useEffect(() => {
    mutate_res();
  }, []);

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
        <div className="flex flex-col">
          <div className="text-center">
            <h2 className="m-auto mt-10 p-4 text-3xl font-normal">
              Onze Cases
            </h2>
          </div>
          <div className="min-h-screen p-6 ">
            {data_res?.map((article: any, index: number) => {
              return (
                <>
                  <Link href={article.fields.website}>
                    <div className="mt-10 flex h-72 items-center" key={index}>
                      <div className="h-56 w-4/6 lg:h-72 lg:w-2/6">
                        {article?.fields.image.fields.file.url && (
                          <img
                            src={article.fields.image.fields.file.url}
                            alt="blog_banner"
                            className="h-56 w-full rounded-l-lg object-cover lg:h-72"
                          />
                        )}
                      </div>

                      <div className="flex h-56 w-3/6 flex-col rounded-r-lg border border-gray-200 bg-white bg-opacity-30 lg:h-72 lg:w-2/6 ">
                        <div className="p-8">
                          <h3 className="text-md flex-col truncate font-bold text-[#2C234D] lg:hidden lg:text-4xl">
                            {article.fields.website}
                          </h3>
                          <h3 className="text-md hidden font-bold text-[#2C234D] lg:flex lg:text-4xl">
                            {article.fields.website}
                          </h3>
                          <p className="font-bold">
                            {article.fields.description}
                          </p>
                          <div className="mt-14 flex gap-4">
                            <img
                              src={article.fields.stack1.fields.file.url}
                              alt="stack_1"
                              className="h-10 lg:h-20"
                            />
                            {article?.fields?.stack2?.fields?.file?.url && (
                              <img
                                src={article?.fields?.stack2?.fields?.file?.url}
                                alt="stack_2"
                                className="h-10 lg:h-20"
                              />
                            )}
                            {article?.fields?.stack3?.fields?.file?.url && (
                              <img
                                src={article?.fields?.stack3?.fields?.file?.url}
                                alt="stack_3"
                                className="h-10 lg:h-20"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </>
              );
            })}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Cases;
