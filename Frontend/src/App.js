// Importing necessary dependencies
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Portfolio from "./pages/Portfolio/Portfolio";
import Services from "./pages/Services/Services";
import AboutUs from "./pages/About/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Dashboard from "./pages/Dashboard/Dashboard";
import NotFound from "./pages/Not Found/NotFound";
import SingleProduct from "./components/Product/SingleProduct";
import Layout from "./layouts/Layout";
import PersonnalTrainingDash from "./layouts/PersonnalTraining/PersonnalTrainingDash";
import Regimedash from './layouts/regimedash/regimedash'
import DashProductsLayout from "./pages/Dashboard/DashProductsLayout/DashProductsLayout";

// Main functional component for the App
function App() {
  return (
    <div className="App">
      {/* Setting up routes using the react-router-dom library */}
      <Routes>
        {/* Default layout for most pages */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Route>

        {/* SingleProduct page */}
        <Route path="/services/singleProduct" element={<SingleProduct />} />

        {/* Dashboard route with nested routes */}
        <Route path="/Dash" element={<Dashboard />}>
          {/* Nested routes for different sections of the dashboard */}
          <Route
            path="dashServices"
            element={
              <>
                {/* Nested route for the Personal Training section */}
                <PersonnalTrainingDash isOnDashboard />
                {/* Nested route for the Regime Dashboard section */}
                <Regimedash isOnDashboard />
              </>
            }
          />

          {/* Nested route for the Products Dashboard section */}
          <Route path="dashProducts" element={<DashProductsLayout isOnDashboard />} />
        </Route>

        {/* Route for handling 404 errors */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

// Exporting the App component
export default App;
