import React, { useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Jute Bag", price: 814 },
    { id: 2, name: "Green Tea", price: 599 },
    { id: 3, name: "Herbal Massage Oil", price: 139}
  ]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({ id: null, name: "", price: 0 });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setIsEditing(false);
    setCurrentProduct({ id: null, name: "", price: 0 });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentProduct({ ...currentProduct, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setProducts(
        products.map((product) =>
          product.id === currentProduct.id ? currentProduct : product
        )
      );
    } else {
      setProducts([
        ...products,
        { ...currentProduct, id: products.length ? products[products.length - 1].id + 1 : 1 }
      ]);
    }
    closeModal();
  };

  const editProduct = (product) => {
    setIsEditing(true);
    setCurrentProduct(product);
    openModal();
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>My Products</h1>
      <div style={styles.productList}>
        {products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productPrice}>Price: ₹{product.price}</p>
            <div style={styles.cardButtons}>
              <button style={styles.editBtn} onClick={() => editProduct(product)}>Edit</button>
              <button style={styles.deleteBtn} onClick={() => deleteProduct(product.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
      <button style={styles.addProductBtn} onClick={openModal}>Add Product</button>
      
      {isModalOpen && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <span style={styles.closeBtn} onClick={closeModal}>&times;</span>
            <h2>{isEditing ? "Edit Product" : "Add Product"}</h2>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="product-name">Product Name:</label>
              <input
                type="text"
                id="product-name"
                name="name"
                value={currentProduct.name}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="product-price">Product Price:</label>
              <input
                type="number"
                id="product-price"
                name="price"
                value={currentProduct.price}
                onChange={handleInputChange}
                required
              />
              <button type="submit" style={styles.saveProductBtn}>Save</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    width: '80%',
    margin: 'auto',
    overflow: 'hidden',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#e6f2e6',
    padding: 0
  },
  heading: {
    textAlign: 'center',
    margin: '20px 0',
    color: '#2e8b57'
  },
  productList: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around'
  },
  productCard: {
    backgroundColor: '#fff',
    border: '1px solid #2e8b57',
    borderRadius: '5px',
    margin: '10px',
    padding: '20px',
    width: '200px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'
  },
  productName: {
    margin: '0 0 10px',
    color: '#2e8b57'
  },
  productPrice: {
    margin: '10px 0'
  },
  cardButtons: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  editBtn: {
    backgroundColor: '#3cb371',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    color: '#fff'
  },
  deleteBtn: {
    backgroundColor: '#8b0000',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    color: '#fff'
  },
  addProductBtn: {
    display: 'block',
    margin: '20px auto',
    backgroundColor: '#2e8b57',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    color: '#fff'
  },
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    zIndex: 1,
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.4)'
  },
  modalContent: {
    backgroundColor: '#fefefe',
    margin: '15% auto',
    padding: '20px',
    border: '1px solid #888',
    width: '80%',
    maxWidth: '400px',
    borderRadius: '10px'
  },
  closeBtn: {
    color: '#aaa',
    float: 'right',
    fontSize: '28px',
    fontWeight: 'bold',
    cursor: 'pointer'
  },
  saveProductBtn: {
    backgroundColor: '#2e8b57',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    color: '#fff'
  }
};

export default ProductList;
