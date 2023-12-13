// Importing necessary React components
import React from "react";

// Importing custom components used in the ContactUs component
import HeroContactUs from "../../components/HeroContact/HeroContactUs";
import FormContactUs from "../../components/FormContactUs/FormContactUs";

// Functional component representing the Contact Us page
function ContactUs() {
  // Rendering the components in the desired order
  return (
    <>
      {/* Including the HeroContactUs component at the top of the page */}
      <HeroContactUs />

      {/* Creating a div wrapper for the content with the contactUsWrapper class */}
      <div className="contactUsWrapper">

        {/* Including the FormContactUs component */}
        <FormContactUs />

      </div>
    </>
  );
}

// Exporting the ContactUs component
export default ContactUs;
