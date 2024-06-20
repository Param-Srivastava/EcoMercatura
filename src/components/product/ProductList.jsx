import React, { useState } from "react";

const ProductList = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Jute Bag", price: 814, quantity: 10, image: "/assets/products/Jute-bags.jpg" },
    { id: 2, name: "Green Tea", price: 599, quantity: 20, image: "/assets/products/Greentea.jpg" },
    { id: 3, name: "Herbal Massage Oil", price: 139, quantity: 30, image: "/assets/products/Herbal-massage-oil.jpg" }
  ]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({ id: null, name: "", price: 0, quantity: 0, image: "" });

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setIsEditing(false);
    setCurrentProduct({ id: null, name: "", price: 0, quantity: 0, image: "" });
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

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setCurrentProduct({ ...currentProduct, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Listed Products</h1>
      <div style={styles.productList}>
        {products.map((product) => (
          <div key={product.id} style={styles.productCard}>
            <img src={product.image} alt={product.name} style={styles.productImage} />
            <h3 style={styles.productName}>{product.name}</h3>
            <p style={styles.productPrice}>Price: ₹{product.price}</p>
            <p style={styles.productQuantity}>Quantity: {product.quantity}</p>
            <div style={styles.cardButtons}>
              <button
                style={styles.editBtn}
                onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgb(211, 211, 211)')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = 'rgb(46, 139, 87)')}
                onClick={() => editProduct(product)}
              >
                Edit
              </button>
              <button
                style={styles.deleteBtn}
                onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgb(211, 211, 211)')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = 'rgb(46, 139, 87)')}
                onClick={() => deleteProduct(product.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        style={styles.addProductBtn}
        onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgb(211, 211, 211)')}
        onMouseLeave={(e) => (e.target.style.backgroundColor = 'rgb(46, 139, 87)')}
        onClick={openModal}
      >
        Add Product
      </button>
      
      {isModalOpen && (
        <div style={styles.modal}>
          <div style={styles.modalContent}>
            <span style={styles.closeBtn} onClick={closeModal}>&times;</span>
            <h2>{isEditing ? "Edit Product" : "Add Product"}</h2>
            <form onSubmit={handleFormSubmit}>
              <table style={styles.table}>
                <tbody>
                  <tr>
                    <td><label htmlFor="product-name">Product Name:</label></td>
                    <td>
                      <input
                        type="text"
                        id="product-name"
                        name="name"
                        value={currentProduct.name}
                        onChange={handleInputChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td><label htmlFor="product-price">Product Price:</label></td>
                    <td>
                      <input
                        type="number"
                        id="product-price"
                        name="price"
                        value={currentProduct.price}
                        onChange={handleInputChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td><label htmlFor="product-quantity">Product Quantity:</label></td>
                    <td>
                      <input
                        type="number"
                        id="product-quantity"
                        name="quantity"
                        value={currentProduct.quantity}
                        onChange={handleInputChange}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td><label htmlFor="product-image">Product Image:</label></td>
                    <td>
                      <input
                        type="file"
                        id="product-image"
                        name="image"
                        accept="image/*"
                        onChange={handleImageChange}
                      />
                      {currentProduct.image && <img src={currentProduct.image} alt="Product Preview" style={styles.imagePreview} />}
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                type="submit"
                style={styles.saveProductBtn}
                onMouseEnter={(e) => (e.target.style.backgroundColor = 'rgb(211, 211, 211)')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = 'rgb(46, 139, 87)')}
              >
                Save
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
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
  productImage: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '5px 5px 0 0',
  },
  productName: {
    margin: '10px 0',
    color: '#2e8b57'
  },
  productPrice: {
    margin: '10px 0'
  },
  productQuantity: {
    margin: '10px 0'
  },
  cardButtons: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  editBtn: {
    backgroundColor: 'rgb(46, 139, 87)',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    color: '#fff'
  },
  deleteBtn: {
    backgroundColor: 'rgb(46, 139, 87)',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    color: '#fff'
  },
  addProductBtn: {
    display: 'block',
    margin: '20px auto',
    backgroundColor: 'rgb(46, 139, 87)',
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
    backgroundColor: 'rgb(46, 139, 87)',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    color: '#fff'
  },
  imagePreview: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    margin: '10px 0',
    borderRadius: '5px',
  },
  table: {
    width: '100%',
    marginBottom: '20px'
  }
};

export default ProductList;



