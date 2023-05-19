import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import ToysRow from "./ToysRow";

const AllToys = () => {
  const toysData = useLoaderData();
  const [allToysData, setAllToysData] = useState(toysData);
  const [searchText, setSearchText] = useState("");
  const handleSearch = () => {
      fetch(`http://localhost:5000/getToysByText/${searchText}`)
      .then(res => res.json())
      .then(data => {
        setAllToysData(data)
        console.log(data);
      })
  };
  return (
    <div className="overflow-x-auto my-8">
      <h2>{allToysData.length}</h2>
      <div className="flex justify-center my-4">
        <input
          type="text"
          placeholder="Search for toys"
          className="w-64 py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(event) => setSearchText(event.target.value)}
        />
        <button onClick={handleSearch} className="bg-[#ff8008] hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-yellow-500">
        Search
      </button>
      </div>
      <table className="table table-zebra w-full">
        {/* head */}
        <thead>
          <tr className="text-center">
            <th>Seller Name</th>
            <th>Toy Name</th>
            <th>Sub-category</th>
            <th>Price</th>
            <th>Available Quantity</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {allToysData?.map((toyData) => (
            <ToysRow key={toyData._id} toyData={toyData}></ToysRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
