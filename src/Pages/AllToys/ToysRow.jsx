import React from "react";
import { Link } from "react-router-dom";

const ToysRow = ({ toyData }) => {
  const {_id,  sellerName, subCategory, price, quantity, productName } = toyData;
  return (
    <tr className="space-y-8 text-center">
      <td>{sellerName}</td>
      <td>{productName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td><Link to={`/toysDetails/${_id}`}><button className="btn-grad" style={{padding: "10px 15px"}}>view details</button></Link></td>
    </tr>
  );
};

export default ToysRow;
