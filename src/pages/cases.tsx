import { Head } from "next/document";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function cases() {
  return (
    <>
      <div className="h-full min-h-screen bg-[url('https://i.imgur.com/oQq8930.jpg')] bg-cover bg-bottom">
        <Header />
        <div className="m-auto flex min-h-screen w-3/6 flex-col">
          <h2 className="mt-10 p-4 text-center text-3xl font-normal">
            Onze Cases
          </h2>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default cases;
