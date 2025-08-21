import React from "react";

const VariousItems = () => {
  return (
    <div>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-7 bg-gray-500 p-4">1 (8 cols)</div>
        <div className="col-span-5 bg-yellow-500 p-4">2 (4 cols)</div>
        <div className="col-span-5 bg-green-500 p-4">3 (6 cols)</div>
        <div className="col-span-7 bg-blue-500 p-4">4 (6 cols)</div>
      </div>
    </div>
  );
};

export default VariousItems;
