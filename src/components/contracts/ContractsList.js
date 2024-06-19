// ContractsList.js

import React from "react";
import Contract from "./Contract1";
import "../../styles/contracts.css";
const ContractsList = ({ contracts, onDelete }) => {
  return (
    <div className="contracts-list">
      {contracts.length === 0 ? (
        <p>No contracts available</p>
      ) : (
        contracts.map((contract) => (
          <Contract
            key={contract.id}
            id={contract.id}
            company1Name={contract.company1Name}
            company2Name={contract.company2Name}
            admin1Name={contract.admin1Name}
            admin2Name={contract.admin2Name}
            contractDuration={contract.contractDuration}
            productsInMOU={contract.productsInMOU}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default ContractsList;
