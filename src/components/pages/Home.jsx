import React from "react";
import Carousel from "../Parts/Carousel";
import VariousItems from "../Parts/VariousItems";

const Home = () => {
  return (
    <div>
      <section>
        <Carousel></Carousel>
      </section>
      <section className="w-4/5 mx-auto mt-10">
        <VariousItems></VariousItems>
      </section>
    </div>
  );
};

export default Home;
