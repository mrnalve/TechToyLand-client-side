import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";
import { ToastContainer } from "react-toastify";
import { json } from "react-router-dom";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [sorting, setSorting] = useState("");
  useEffect(() => {
    fetch(`https://tech-toy-land-server-side.vercel.app/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [user]);

  // change title
  useEffect(() => {
    document.title = "TechToy | MyToys";
  }, []);

  // handle delete button
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tech-toy-land-server-side.vercel.app/deleteToys/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toys has been deleted.", "success");
              const remaining = myToys.filter((toy) => toy._id !== _id);
              setMyToys(remaining);
            }
          });
      }
    });
  };

  const handleSortChange = (event) => {
    const selectedOption = event.target.value;

    // Perform sorting logic based on the selected option
    if (selectedOption === "asc") {
      setSorting("asc");
    } else if (selectedOption === "desc") {
      setSorting("desc");
    }
  };

  useEffect(() => {
    fetch(`https://tech-toy-land-server-side.vercel.app/sortingByPrice?sort=${sorting}&email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [sorting]);

  return (
    <div className="overflow-x-auto my-8">
      <div className="text-right my-4">
        <select
          onChange={handleSortChange}
          className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sort By Price</option>
          <option value="desc">Price: high to low</option>
          <option value="asc">Price: low to high</option>
        </select>
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
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {myToys?.map((myToyData) => (
            <MyToysRow
              key={myToyData._id}
              myToyData={myToyData}
              handleDelete={handleDelete}
            ></MyToysRow>
          ))}
        </tbody>
        <ToastContainer></ToastContainer>
      </table>
    </div>
  );
};

export default MyToys;
