import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import MyToysRow from './MyToysRow';

const MyToys = () => {
    const {user} = useContext(AuthContext)
    const [myToys, setMyToys] = useState([])
    console.log(user.email);
    useEffect(()=>{
        fetch(`http://localhost:5000/myToys/${user?.email}`)
        .then(res=>res.json())
        .then(data => {
            setMyToys(data)
            console.log(data);
        })
    },[user])
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
            <MyToysRow key={myToyData._id} myToyData={myToyData}></MyToysRow>
          ))}
        </tbody>
      </table>
    </div>
    );
};

export default MyToys;