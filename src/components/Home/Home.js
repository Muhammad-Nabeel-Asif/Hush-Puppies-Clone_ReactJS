import React, { Fragment } from "react";

import Carousel from "./Carousel";
import Collections from "./Collections";
import Manifesto from "./Manifesto";
import FeaturedProducts from "./FeaturedProducts";
import Cards from "./Cards";
import JoinUs from "./JoinUs";
import Footer from "./Footer";

const Home = () => {
  return (
    <Fragment>
      <Carousel />
      <Collections />
      <Manifesto />
      <FeaturedProducts />
      <Cards />
      <JoinUs />
      <Footer />
    </Fragment>
  );
};

export default Home;
