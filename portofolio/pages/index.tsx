import React from "react";
import Head from "next/head";

import Main from "@/components/Main";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="bg-background text-white h-full">
      <Head>
        <title>Florjan`s Portofolio</title>
      </Head>
      <Main />
      <About />
      <Experience />
      <Contact />
    </div>
  );
}
