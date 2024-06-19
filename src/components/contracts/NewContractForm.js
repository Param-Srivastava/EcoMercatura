import React, { useState } from "react";
import "../../styles/contracts.css";
const NewContractForm = ({ onAddContract }) => {
  const [showModal, setShowModal] = useState(false);
  const [company1Name, setCompany1Name] = useState("");
  const [company2Name, setCompany2Name] = useState("");
  const [admin1Name, setAdmin1Name] = useState("");
  const [admin2Name, setAdmin2Name] = useState("");
  const [contractDuration, setContractDuration] = useState("");
  const [productsInMOU, setProductsInMOU] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform validation here if needed
    const newContract = {
      company1Name,
      company2Name,
      admin1Name,
      admin2Name,
      contractDuration,
      productsInMOU,
    };
    onAddContract(newContract);
    // Clear form fields after submission
    setCompany1Name("");
    setCompany2Name("");
    setAdmin1Name("");
    setAdmin2Name("");
    setContractDuration("");
    setProductsInMOU("");
    // Close the modal after submission
    setShowModal(false);
  };

  return (
    <div>
      <button className="SignC" onClick={() => setShowModal(true)}>Sign A New Contract</button>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>
              &times;
            </span>
            <form onSubmit={handleSubmit}>
              <table>
                <tbody>
                  <tr>
                    <td><label>Company 1 Name:</label></td>
                    <td><input
                      type="text"
                      value={company1Name}
                      onChange={(e) => setCompany1Name(e.target.value)}
                      required
                    /></td>
                  </tr>
                  <tr>
                    <td><label>Company 2 Name:</label></td>
                    <td><input
                      type="text"
                      value={company2Name}
                      onChange={(e) => setCompany2Name(e.target.value)}
                      required
                    /></td>
                  </tr>
                  <tr>
                    <td><label>Name of Admin 1:</label></td>
                    <td><input
                      type="text"
                      value={admin1Name}
                      onChange={(e) => setAdmin1Name(e.target.value)}
                      required
                    /></td>
                  </tr>
                  <tr>
                    <td><label>Name of Admin 2:</label></td>
                    <td><input
                      type="text"
                      value={admin2Name}
                      onChange={(e) => setAdmin2Name(e.target.value)}
                      required
                    /></td>
                  </tr>
                  <tr>
                    <td><label>Duration of Contract:</label></td>
                    <td><input
                      type="text"
                      value={contractDuration}
                      onChange={(e) => setContractDuration(e.target.value)}
                      required
                    /></td>
                  </tr>
                  <tr>
                    <td><label>Products in the Contract:</label></td>
                    <td><input
                      type="text"
                      value={productsInMOU}
                      onChange={(e) => setProductsInMOU(e.target.value)}
                      required
                    /></td>
                  </tr>
                  <tr>
                    <td colSpan="2">
                      <button type="submit">Sign</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default NewContractForm;
