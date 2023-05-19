import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const ToysUpdate = () => {
  const toys = useLoaderData();
  const { _id, price, quantity, description } = toys[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updateToys = { price, quantity, description };
    fetch(`http://localhost:5000/updateToys/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateToys),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Toys Updated Successfully",
            icon: "success",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white shadow-xl rounded-xl p-6 my-4"
    >
      <h2 className="text-2xl font-semibold mb-4">Update Toy Information</h2>
      <div className="mb-4">
        <label htmlFor="price" className="block text-gray-700 font-semibold">
          Price
        </label>
        <input
          type="number"
          id="price"
          name="price"
          defaultValue={price}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffc837]"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="quantity" className="block text-gray-700 font-semibold">
          Available Quantity
        </label>
        <input
          type="number"
          id="quantity"
          name="quantity"
          defaultValue={quantity}
          className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffc837]"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="description"
          className="block text-gray-700 font-semibold"
        >
          Detail Description
        </label>
        <textarea
          id="description"
          name="description"
          defaultValue={description}
          rows="6"
          className="px-4 w-full py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ffc837]"
        />
      </div>
      <button type="submit" className="btn-grad">
        Update Toy
      </button>
    </form>
  );
};

export default ToysUpdate;
