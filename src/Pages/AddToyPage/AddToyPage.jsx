import React, { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const AddToyPage = () => {
  const {user} = useContext(AuthContext)

  // change title
  useEffect(() => {
    document.title = "TechToy | AddToyPage";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const pictureUrl = form.pictureUrl.value;
    const productName = form.productName.value;
    const sellerName = form.sellerName.value;
    const sellerEmail = form.sellerEmail.value;
    const subCategory = form.subCategory.value;
    const price = parseInt(form.price.value);
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const toysCard = {
      pictureUrl,
      productName,
      sellerName,
      sellerEmail,
      subCategory,
      price,
      rating,
      quantity,
      description,
    };
    console.log(toysCard);
    fetch("http://localhost:5000/addTechToy", {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(toysCard)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
        }
        form.reset()
      });
  };

  return (
    <div className="container mx-auto py-10">
      <h2 className="text-3xl text-center font-bold mb-8">Add a Toy</h2>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-gray-100 p-5"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="pictureUrl"
              className="block text-gray-700 font-bold mb-2"
            >
              Picture URL
            </label>
            <input
              type="url"
              id="pictureUrl"
              name="pictureUrl"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#ffc837]"
              placeholder="Enter Picture URL"
              required
            />
          </div>
          <div>
            <label
              htmlFor="productName"
              className="block text-gray-700 font-bold mb-2"
            >
              Product Name
            </label>
            <input
              type="text"
              id="productName"
              name="productName"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#ffc837]"
              placeholder="Enter Product Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="sellerName"
              className="block text-gray-700 font-bold mb-2"
            >
              Seller Name
            </label>
            <input
              type="text"
              id="sellerName"
              name="sellerName"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#ffc837]"
              defaultValue={user?.displayName}
              placeholder="Enter Seller Name"
              required
            />
          </div>
          <div>
            <label
              htmlFor="sellerEmail"
              className="block text-gray-700 font-bold mb-2"
            >
              Seller Email
            </label>
            <input
              type="email"
              id="sellerEmail"
              name="sellerEmail"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#ffc837]"
              defaultValue={user?.email}
              placeholder="Enter Seller Email"
              required
            />
          </div>
          <div>
            <label
              htmlFor="subCategory"
              className="block text-gray-700 font-bold mb-2"
            >
              Sub-category
            </label>{" "}
            <select
              id="subCategory"
              name="subCategory"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#ffc837]"
              placeholder="Select Sub-category"
              required
            >
              <option value="">Select Sub-category</option>
              <option value="Tablets">Tablets</option>
              <option value="ElectroniXplorers">ElectroniXplorers</option>
              <option value="DigitalDreams">DigitalDreams</option>
              <option value="Drone">Drone</option>
              <option value="Coding-Robot">Coding-Robot</option>
              <option value="Camera">Camera</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="price"
              className="block text-gray-700 font-bold mb-2"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#ffc837]"
              placeholder="Enter Price"
              required
            />
          </div>
          <div>
            <label
              htmlFor="rating"
              className="block text-gray-700 font-bold mb-2"
            >
              Rating
            </label>
            <input
              type="text"
              id="rating"
              name="rating"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#ffc837]"
              placeholder="Enter Rating"
              required
            />
          </div>
          <div>
            <label
              htmlFor="quantity"
              className="block text-gray-700 font-bold mb-2"
            >
              Available Quantity
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#ffc837]"
              placeholder="Enter Available Quantity"
              required
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="description"
              className="block text-gray-700 font-bold mb-2"
            >
              Detail Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-[#ffc837]"
              placeholder="Enter Detail Description"
              required
              rows="4"
            ></textarea>
          </div>
        </div>
        <button type="submit" className="btn-grad mt-4">
          Add Toy
        </button>
      </form>
    </div>
  );
};

export default AddToyPage;
