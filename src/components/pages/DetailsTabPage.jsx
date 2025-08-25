import AllCloset from "./AllCloset";

const DetailsTabPage = () => {
  return (
    <div>
      {/* name of each tab group should be unique */}
      <div className="tabs  flex justify-center">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-2xl checked:border-b-4 checked:border-red-500 checked:transition-all checked:duration-500"
          aria-label="Description"
          defaultChecked
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          Tab content 1{/* All Closer Inside Details */}
          <AllCloset></AllCloset>
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-2xl checked:border-b-4 checked:border-red-500 checked:transition-all checked:duration-500"
          aria-label="Product Details"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          Tab content 2{/* All Closer Inside Details */}
          {/* <AllCloset></AllCloset> */}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-2xl checked:border-b-4 checked:border-red-500 checked:transition-all checked:duration-500"
          aria-label="Tab Title"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          Tab content 3{/* All Closer Inside Details */}
          {/* <AllCloset></AllCloset> */}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-2xl checked:border-b-4 checked:border-red-500 checked:transition-all checked:duration-500"
          aria-label="Customer Reviews"
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          Tab content 4{/* All Closer Inside Details */}
          {/* <AllCloset></AllCloset> */}
        </div>
      </div>
    </div>
  );
};

export default DetailsTabPage;
