import React, { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";

const ToysDetails = () => {
  const [review, setReview] = useState();
  const { user } = useContext(AuthContext);
  const { displayName, photoURL } = user;
  const toys = useLoaderData();
  const {
    pictureUrl,
    productName,
    sellerName,
    sellerEmail,
    price,
    rating,
    quantity,
    description,
  } = toys[0];

  // change title
  useEffect(() => {
    document.title = "TechToy | ToysDetails";
  }, []);
  // handle review
  const handleReview = async () => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Message",
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      showCancelButton: true,
    });
    if (text) {
      setReview(text);
    }
    const userReview = { review, displayName, photoURL };
    fetch("https://tech-toy-land-server-side.vercel.app/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userReview),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 mb-4">
          <img src={pictureUrl} alt={productName} className="rounded-lg" />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-8">
          <h2 className="text-2xl font-bold mb-2">{productName}</h2>
          <p className="text-gray-500 mb-2">Seller: {sellerName}</p>
          <p className="text-gray-500 mb-4">Email: {sellerEmail}</p>
          <p className="text-lg font-semibold mb-2">Price: {price}</p>
          <p className="text-lg font-semibold mb-2">Rating: {rating}</p>
          <p className="text-lg font-semibold mb-2">
            Available Quantity: {quantity}
          </p>
          <div className="flex gap-3">
            <button className="btn-grad">Add To Cart</button>
            <button onClick={handleReview} className="btn-grad">
              Review
            </button>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-bold mb-2">Description</h3>
        <p>{description}</p>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ToysDetails;
