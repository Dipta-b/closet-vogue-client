import React from "react";
import { useLoaderData } from "react-router-dom";
import AllCloset from "./AllCloset";

const AllClosetWrapper = () => {
  const closets = useLoaderData();
  return <AllCloset closets={closets} />;
};

export default AllClosetWrapper;
