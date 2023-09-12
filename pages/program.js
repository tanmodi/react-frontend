import React from "react";
import Head from "next/head";
import Header from "../components/Home/Header/Header";
import Homepage from "../components/Programme/Homepage/Homepage";
import About from "../components/Programme/About/About";
import AdditionalFooter from "../components/Home/Footer/AdditionalFooter";
import Footer from "../components/Home/Footer/Footer";
import Company from "../components/Home/Company/Company";
import Faq from "../components/Programme/FAQ/Faq";
import Leadership from "../components/Programme/Leadership/Leadership";

const program = () => {
  return (
    <div>
      <Head>
        <title>Doosra College - Our Programs</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white">
        <Header />
      </div>
      <div className="bg-[#201942]">
        <Homepage />
        <About />
        <Company />
        <Faq />
        <Leadership />
        <AdditionalFooter />
        <Footer />
      </div>
    </div>
  );
};

export default program;
