import React from "react";
import "../../styles/contracts.css";

const Contract = ({ id, company1Name, company2Name, admin1Name, admin2Name, contractDuration, productsInMOU, onDelete }) => {
  return (
    <div className="contract">
      <h3>{company1Name} - {company2Name}</h3>
      <p>Admin 1: {admin1Name}</p>
      <p>Admin 2: {admin2Name}</p>
      <p>Duration: {contractDuration}</p>
      <p>Products in MOU: {productsInMOU}</p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
};

export default Contract;

