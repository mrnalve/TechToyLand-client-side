import React from "react";

const ToysRow = ({ toyData }) => {
  const { sellerName, subCategory, price, quantity, productName } = toyData;
  return (
    <tr className="space-y-8 text-center">
      <td>{sellerName}</td>
      <td>{productName}</td>
      <td>{subCategory}</td>
      <td>{price}</td>
      <td>{quantity}</td>
      <td><button className="btn-grad" style={{padding: "10px 15px"}}>view details</button></td>
    </tr>
  );
};

export default ToysRow;
