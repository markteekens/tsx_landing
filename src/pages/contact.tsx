import { Head } from "next/document";
import { useRouter } from "next/router";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { router } from "../server/trpc/trpc";
import { trpc } from "../utils/trpc";

function services() {
  const router = useRouter();
  const [input, setInput] = useState({
    name: "",
    email: "",
    telefoon: "",
  });
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const { mutate, data, isLoading } = trpc.contact.addContact.useMutation();

  if (data) {
    setTimeout(() => {
      router.push("/");
    }, 2000);
  }

  return (
    <>
      <div className="h-full min-h-screen bg-[url('https://i.imgur.com/oQq8930.jpg')] bg-cover bg-bottom">
        <Header />
        <div className="flex min-h-screen flex-col items-center ">
          <h2 className="mt-10 p-4 text-center text-3xl font-normal">
            Laat een specialist u terug bellen
          </h2>
          <div className="w-3/12 rounded border-2 border-gray-200 bg-white p-10 shadow-lg shadow-purple-300">
            <div className=" flex flex-col p-4">
              <label className="mr-2 font-normal" htmlFor="name">
                Naam:
              </label>
              <input
                className="w-full rounded-md border border-gray-300 bg-gray-100 p-2 "
                onChange={(e) =>
                  setInput((prev) => ({ ...prev, name: e.target.value }))
                }
                value={input.name}
                required
              />
            </div>
            <div className="flex flex-col p-4">
              <label className=" mr-2  font-normal" htmlFor="email">
                Email:
              </label>
              <input
                className="rounded-md border border-gray-300 bg-gray-100 p-2"
                onChange={(e) =>
                  setInput((prev) => ({ ...prev, email: e.target.value }))
                }
                type="email"
                value={input.email}
                required
              />
            </div>
            <div className="flex flex-col p-4">
              <label className=" mr-2  font-normal" htmlFor="email">
                Tel nr:
              </label>
              <input
                className="rounded-md border border-gray-300 bg-gray-100 p-2"
                onChange={(e) =>
                  setInput((prev) => ({ ...prev, telefoon: e.target.value }))
                }
                type="tel"
                value={input.telefoon}
                required
              />
            </div>
            <div className=" p-4">
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
              <button
                className=" mt-6 flex rounded-full border bg-black px-10 py-3 text-base font-semibold text-white no-underline transition hover:border-black hover:bg-white/20 hover:text-black "
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
            ) : (
              <button className=" mt-6 flex rounded-full border bg-purple-400 px-10 py-3 text-base font-semibold text-white no-underline transition hover:border-black hover:bg-white/20 hover:text-black ">
                Verzenden..
              </button>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default services;
