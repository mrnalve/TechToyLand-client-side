import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyToysRow from "./MyToysRow";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  console.log(user.email);
  useEffect(() => {
    fetch(`http://localhost:5000/myToys/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        console.log(data);
      });
  }, [user]);
  // handle delete
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
        fetch(`http://localhost:5000/deleteToys/${_id}`,{
          method: "DELETE"
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your Toys has been deleted.", "success");
              const remaining = myToys.filter(toy => toy._id !== _id)
              setMyToys(remaining)
            }
          });
       
      }
    });
  };
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
      </table>
    </div>
  );
};

export default MyToys;
