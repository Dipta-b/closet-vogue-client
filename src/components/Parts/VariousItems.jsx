import React from "react";
import women from "../../assets/menWomenWatchShoes/women.jpg";
import men from "../../assets/menWomenWatchShoes/men.jpg";
import shoes from "../../assets/menWomenWatchShoes/shoes.jpg";
import watch from "../../assets/menWomenWatchShoes/watches.jpg";
const VariousItems = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4 ">
        <div className="col-span-7 hover:-translate-y-3 transition-all duration-500 ease-in-out">
          <img src={women} alt="" />
        </div>
        <div className="col-span-5 height-[527px] hover:-translate-y-3 transition-all duration-500 ease-in-out">
          <img className="h-full object-cover" src={watch} alt="" />
        </div>
        <div className="col-span-5 height-[527px] hover:-translate-y-3 transition-all duration-500 ease-in-out">
          <img className="h-full object-cover" src={shoes} alt="" />
        </div>
        <div className="col-span-7 hover:-translate-y-3 transition-all duration-500 ease-in-out">
          <img src={men} alt="" />
        </div>
      </div>
    </div>
  );
};

export default VariousItems;
