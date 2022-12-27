import { Head } from "next/document";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function future() {
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
        <div className="m-auto flex w-3/6 flex-col">
          <h2 className="mt-10 p-4 text-center text-3xl font-normal">
            Onze Toekomst
          </h2>
          <div className="p-4 text-xl font-bold">
            De toekomst van technologie: wat te verwachten in de komende jaren{" "}
          </div>
          <div className="p-4 text-base">
            Technologie is altijd een drijvende kracht achter verandering
            geweest, en het tempo van technologische vooruitgang vertoont geen
            tekenen van vertraging. Van kunstmatige intelligentie tot het
            internet der dingen, hier zijn er een paar gebieden die de komende
            tijd waarschijnlijk belangrijke ontwikkelingen zullen meemaken jaar.
          </div>
          <div className="p-4 text-lg font-bold">
            Artificial Intelligence (AI)
          </div>
          <div className="p-4 text-base">
            AI-technologieën zoals machine learning, natuurlijke taal verwerking
            en computervisie worden al op grote schaal gebruikt scala aan
            toepassingen, en het is waarschijnlijk dat deze technologieën dat
            ook zullen doen blijven ontwikkelen en op nieuwe manieren worden
            toegepast. Bijvoorbeeld AI kunnen worden gebruikt om de efficiëntie
            en nauwkeurigheid van de gezondheidszorg te verbeteren diagnoses, om
            meer geavanceerde autonome voertuigen te ontwikkelen, of om
            gepersonaliseerde onderwijs- en leerervaringen creëren.
          </div>
          <div className="p-4 text-lg font-bold">Internet of Things (IoT)</div>
          <div className="p-4 text-base">
            Het IoT verwijst naar het netwerk van fysieke objecten (zoals
            apparaten, voertuigen en gebouwen) die zijn uitgerust met sensoren
            en verbonden met internet, waardoor ze kunnen verzamelen en
            uitwisselen gegevens. Aangezien het aantal aangesloten apparaten
            blijft groeien, is dat ook zo waarschijnlijk dat het IoT nieuwe
            manieren van interactie met en mogelijk zal maken het beheersen van
            de fysieke wereld, zoals via slimme huizen en slimme steden.
          </div>
          <div className="p-4 text-lg font-bold">Renewable Energy</div>
          <div className="p-4 text-base">
            Aangezien de zorgen over klimaatverandering blijven groeien, is dat
            ook zo toenemende druk om over te schakelen van fossiele
            brandstoffen naar hernieuwbare energiebronnen. Technologie zal
            daarbij een sleutelrol spelen transitie, met vooruitgang op het
            gebied van zonne-, wind- en waterkracht verwacht in de komende
            jaren.
          </div>
          <div className="p-4 text-lg font-bold">Biotechnology</div>
          <div className="p-4 text-base">
            Biotechnologie verwijst naar het gebruik van levende organismen of
            hun producten om nieuwe technologieën en producten te ontwikkelen.
            Dit veld is zal naar verwachting de komende jaren aanzienlijke
            vooruitgang boeken vooruitgang op gebieden zoals het bewerken van
            genen, regeneratieve geneeskunde, en Synthetische biologie.
          </div>
          <div className="p-4 text-lg font-bold">Space Exploration</div>
          <div className="p-4 text-base">
            Ruimteverkenning heeft een lange weg afgelegd sinds de eerste
            maanlanding in 1969, en het is waarschijnlijk dat we verdere
            vooruitgang zullen zien in de komende jaren. Nieuwe technologieën
            zoals herbruikbare raketten en geavanceerde voortstuwingssystemen
            zouden de ruimtevaart toegankelijker kunnen maken en betaalbaar,
            terwijl de zoektocht naar draagbare en duurzame habitats op andere
            planeten zal doorgaan.
          </div>
          <div className="p-4 text-base">
            Over het algemeen is de toekomst van technologie opwindend en vol
            mogelijkheden. Hoewel het moeilijk is om precies te voorspellen wat
            de de toekomst zal brengen, dit zijn enkele gebieden die we
            waarschijnlijk zullen zien belangrijke technologische vooruitgang in
            de komende jaren.
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default future;
