import React from "react";
import { useLoaderData } from "react-router-dom";
import ToysRow from "./ToysRow";

const AllToys = () => {
  const toysData = useLoaderData();
  return (
    <div className="overflow-x-auto my-8">
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
          {toysData?.map((toyData) => (
            <ToysRow key={toyData._id} toyData={toyData}></ToysRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
