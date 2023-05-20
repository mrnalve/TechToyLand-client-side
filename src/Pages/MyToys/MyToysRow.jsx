import React from "react";
import { Link } from "react-router-dom";

const MyToysRow = ({ myToyData, handleDelete }) => {
  const { _id, sellerName, subCategory, price, quantity, productName } =
    myToyData;

  
  return (
    <tr className="space-y-8 text-center">
      <td>{sellerName}</td>
      <td>{productName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td>
        <Link to={`/toysUpdate/${_id}`}>
        <button
          className="btn-grad text-[16px] my-1"
          style={{ padding: "8px 12px", textTransform: "capitalize" }}
        >
          Update
        </button></Link>
        <button
        onClick={()=>handleDelete(_id)}
          className="btn-grad text-[16px]"
          style={{ padding: "8px 12px", textTransform: "capitalize" }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default MyToysRow;
