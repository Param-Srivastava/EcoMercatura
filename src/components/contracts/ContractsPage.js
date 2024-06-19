import React, { useState } from "react";
import ContractsList from "./ContractsList";
import NewContractForm from "./NewContractForm";
import "../../styles/contracts.css";

const ContractsPage = () => {
  const [contracts, setContracts] = useState([
    { id: 1, company1Name: "Company A" },
    { id: 2, company1Name: "Company B" },
    { id: 3, company1Name: "Company C" },
  ]);

  const addContract = (newContract) => {
    setContracts([...contracts, { id: contracts.length + 1, ...newContract }]);
  };

  const deleteContract = (id) => {
    const updatedContracts = contracts.filter((contract) => contract.id !== id);
    setContracts(updatedContracts);
  };

  return (
    <div className="contracts-page">
      <h2>My Contracts</h2>
      <NewContractForm onAddContract={addContract} />
      <ContractsList
        contracts={contracts}
        onDelete={deleteContract}
      />
    </div>
  );
};

export default ContractsPage;

