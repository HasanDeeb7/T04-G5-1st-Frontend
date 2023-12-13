// Importing necessary React components, styles, and components
import React, { useState } from "react";
import style from "./Dashboard.module.css";

import SideNav from "./SideNav/SideNav";
import { Outlet } from "react-router";
import { ProductsModal } from "../../components/Product/ProductsModal/ProductsModal";

// Functional component representing the main dashboard layout
function Dashboard() {
  // State variable for managing the visibility of the products modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Rendering the component structure
  return (
    <div className={style.dashboardWrapper}>

      {/* Render the products modal if isModalOpen is true */}
      {isModalOpen ? <ProductsModal setIsModalOpen={setIsModalOpen} /> : ''}

      {/* Sidebar navigation component */}
      <SideNav />

      {/* Main content section */}
      <section className={style.dashContentContainer}>

        {/* Outlet component to render the nested routes */}
        <Outlet context={[isModalOpen, setIsModalOpen]} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />

      </section>

    </div>
  );
}

// Exporting the Dashboard component
export default Dashboard;
