import { Head } from "next/document";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function Services() {
  return (
    <>
      <div className="h-full min-h-screen bg-[url('https://i.imgur.com/oQq8930.jpg')] bg-cover bg-bottom">
        <Header />
        <div className="m-auto flex w-3/6 flex-col">
          <h2 className="mt-10 p-4 text-center text-3xl font-normal">
            Onze diensten
          </h2>

          <p className="mb-3  ">
            Software Development: We specialize in custom software development,
            including the creation of desktop and mobile applications. AI
            Integration: Our team has extensive experience in integrating
            artificial intelligence into software applications, allowing for
            advanced functionality and automation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-6">
            <p className="mb-3   ">
              Blockchain Integration: We are able to integrate blockchain
              technology into your software, enabling secure and transparent
              data management. Maintenance and Support:
            </p>
            <blockquote className="mb-3">
              <p className="text-xl font-semibold italic">
                &quot; We offer ongoing maintenance and support for all of our
                software products. &quot;
              </p>
            </blockquote>
          </div>
          <p className="mb-3 font-light ">
            We offer ongoing maintenance and support for all of our software
            products, ensuring that they continue to function at the highest
            level. Consulting: Need help figuring out the best solution for your
            business? Our team of experts is here to provide guidance and
            support throughout the development process.
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Services;
