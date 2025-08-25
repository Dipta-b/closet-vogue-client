import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ClosetCard from "./ClosetCard";

const AllCloset = () => {
  const closetData = useLoaderData();

  return (
    <div>
      <div className="grid grid-cols-2 gap-16 mt-10 md:grid-cols-4 ">
        {closetData.map((closet) => (
          <ClosetCard key={closet._id} closet={closet}></ClosetCard>
        ))}
      </div>
    </div>
  );
};

export default AllCloset;
