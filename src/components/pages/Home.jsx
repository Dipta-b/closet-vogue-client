import React from "react";
import Carousel from "../Parts/Carousel";
import VariousItems from "../Parts/VariousItems";
import OurProducts from "../Parts/OurProducts";

const Home = () => {
  return (
    <div>
      <section>
        <Carousel></Carousel>
      </section>
      <section className="w-4/5 mx-auto mt-10">
        <VariousItems></VariousItems>
      </section>
      <section className="w-4/5 mx-auto mt-10">
        <OurProducts></OurProducts>
      </section>
    </div>
  );
};

export default Home;
