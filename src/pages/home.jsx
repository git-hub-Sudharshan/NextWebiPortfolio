import React from "react";
import { Helmet } from "react-helmet";
import Hero from "../components/home/hero";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="Welcome to the Home Page of NextWebiPortfolio"
        />
      </Helmet>
      <section>
        <Hero />
      </section>
    </>
  );
};

export default Home;
