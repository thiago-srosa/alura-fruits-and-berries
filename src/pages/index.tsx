import type { NextPage } from "next";
import Head from "next/head";

import { ControlledCarousel } from "src/components/Carousel";

import { CustomCardsSection } from "src/components/Cards";

import { Footer } from "src/components/Footer";

const Home: NextPage = (): JSX.Element => {
  return (
    <>
      <Head>
        <title>Fruits & Berries</title>
      </Head>

      <ControlledCarousel />

      <h1 className="text-center title-font special-color pt-5">
        Recipes to save and gain health
      </h1>
      <p className="text-center title-font text-secondary pb-5">
        Our recipes help you to enjoy food better, save money, gain time and
        practicality
      </p>

      <CustomCardsSection />

      <Footer />
    </>
  );
};

export default Home;
