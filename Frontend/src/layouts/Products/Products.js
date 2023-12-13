// Importing necessary components and styles from React, CSS module, and other components
import React, { useEffect, useState } from "react";
import style from "../../components/Product/Product.module.css";
import { fetchProducts } from "../../db/productsData";
import Product from "../../components/Product/Product";
import Error from "../Error/Error";
import ProductsLoading from "../productsLoading.js/ProductsLoading";

// Functional component for rendering the Products section
const Products = (props) => {
  // State variables to store products, loading state, and error state
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState({ state: false, message: "ok" });

  // Object to map error status codes to corresponding messages
  const error = {
    500: "Internal server Error",
    400: "Bad request",
    404: "Not Found !",
  };

  // Function to fetch product data from the server
  async function fetchData() {
    try {
      const response = await fetchProducts();
      if (response) {
        setProducts(response.data);
        setIsLoading(false);
      } else {
        // Set error state for network error
        setIsError({ state: true, message: "Network Error" });
      }
    } catch (error) {
      console.log(error);
    }
  }

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetchData();
  }, []);

  // JSX structure for rendering the Products component
  return (
    <div className={style.productsSection}>
      {/* Section title */}
      <h2 id="products" className={style.productsTitle}>
        Products
      </h2>
      <div className={style.product}>
        {/* Conditional rendering based on loading and error states */}
        {isError.state ? (
          <Error message={isError.message} />
        ) : isLoading ? (
          <ProductsLoading />
        ) : (
          // Mapping through products and rendering Product component for each
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
};

// Exporting the Products component as the default export
export default Products;
