// Importing necessary React components and styles
import React, { useEffect, useState } from "react";
import Product from "../../../components/Product/Product";
import { fetchProducts } from "../../../db/productsData";
import style from "./DashProductsLayout.module.css";
import { AiOutlinePlus } from "react-icons/ai";
import { ProductsModal } from "../../../components/Product/ProductsModal/ProductsModal";

// Functional component representing the product layout in the dashboard
function DashProductsLayout(props) {
  // State variables for managing products data, loading state, and modal state
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch products data from the database
  async function fetchData() {
    try {
      const data = await fetchProducts();
      if (data) {
        setProducts(data.data);
        setIsLoading(false);
      } else {
        // Handle the case when there's an issue fetching data
      }
    } catch (error) {
      console.log(error);
    }
  }

  // Effect hook to fetch data on component mount
  useEffect(() => {
    fetchData();
  }, []);

  // Function to open the modal for adding a new product
  function openModal() {
    setIsModalOpen(true);
  }

  // Rendering the component structure
  return (
    <div className={style.productsSection}>
      {/* Render the ProductsModal component when isModalOpen is true */}
      {isModalOpen ? <ProductsModal setIsModalOpen={setIsModalOpen} fetchData={fetchData} /> : ''}

      {/* Product section header */}
      <h2 className={style.productsTitle}>Products</h2>

      {/* Product cards section */}
      <div className={style.product}>

        {/* Add product card with an onClick handler to open the modal */}
        <div className={style.addProductCard} onClick={() => openModal()}>
          <section className={style.addButton}>
            <AiOutlinePlus className={style.plusIcon} />
          </section>
          <span className={style.addButtonText}>Add a Product</span>
        </div>

        {/* Display loading message or map through products and render Product components */}
        {isLoading ? (
          <p>Loading.....</p>
        ) : (
          products.map((product, i) => (
            <Product
              name={product.prodName}
              price={product.prodPrice}
              key={i}
              image={product.prodImage}
              description={product.prodDescription}
              categoryId={product.prodCategory}
              id={product._id}
              isOnDashboard={props.isOnDashboard}
            />
          ))
        )}
      </div>
    </div>
  );
}

// Exporting the DashProductsLayout component
export default DashProductsLayout;
