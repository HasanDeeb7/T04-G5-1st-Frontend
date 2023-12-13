// Importing necessary components and modules from React, components, and react-router-dom
import React from 'react';
import Header from '../components/NavBar/Header';
import Footer from './Footer/Footer';
import { Outlet } from 'react-router-dom';

// Functional component representing the layout of the application
export default function Layout() {
  // JSX structure for rendering the layout
  return (
    <>
      {/* Header component for the top navigation */}
      <Header />
      {/* Outlet for rendering child components based on the current route */}
      <Outlet />
      {/* Footer component for the bottom section of the layout */}
      <Footer />
    </>
  );
}
