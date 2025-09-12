import axios from "axios";
import { useEffect, useState } from "react";

const DetailsTabPage = () => {
  const [closet, setCloset] = useState([]);
  const [activeTab, setActiveTab] = useState("Description");

  useEffect(() => {
    setCloset([]);

    axios.get("https://closet-vogue-server.vercel.app/closets").then((res) => {
      setCloset(res.data);
    });
  }, [activeTab]);

  return (
    <div>
      <div className="tabs flex justify-center">
        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-2xl checked:border-b-4 checked:border-red-500"
          aria-label="Description"
          checked={activeTab === "Description"}
          onChange={() => setActiveTab("Description")}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          <h4 className="text-4xl	text-center font-bold">Our Products</h4>
          <p className="text-center text-sm	 font-light">
            Best selling products
          </p>
          Tab content 1 – {closet?.length}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-2xl checked:border-b-4 checked:border-red-500"
          aria-label="Product Details"
          checked={activeTab === "Product Details"}
          onChange={() => setActiveTab("Product Details")}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          <h4 className="text-4xl	text-center font-bold">Our Products</h4>
          <p className="text-center text-sm	 font-light">
            Best selling products
          </p>
          Tab content 2 – {closet?.length}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-2xl checked:border-b-4 checked:border-red-500"
          aria-label="Tab Title"
          checked={activeTab === "Tab Title"}
          onChange={() => setActiveTab("Tab Title")}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          <h4 className="text-4xl	text-center font-bold">Our Products</h4>
          <p className="text-center text-sm	 font-light">
            Best selling products
          </p>
          Tab content 3 – {closet?.length}
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          className="tab text-2xl checked:border-b-4 checked:border-red-500"
          aria-label="Customer Reviews"
          checked={activeTab === "Customer Reviews"}
          onChange={() => setActiveTab("Customer Reviews")}
        />
        <div className="tab-content border-base-300 bg-base-100 p-10">
          <h4 className="text-4xl	text-center font-bold">Our Products</h4>
          <p className="text-center text-sm	 font-light">
            Best selling products
          </p>
          Tab content 4 – {closet?.length}
        </div>
      </div>
    </div>
  );
};

export default DetailsTabPage;
