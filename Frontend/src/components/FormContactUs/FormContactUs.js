// Import necessary dependencies and styles
import React, { useState } from "react";
import styles from "./FormContactUs.module.css";
import emailjs from "emailjs-com";

// Define the FormContactUs functional component
const FormContactUs = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  // Destructure form data for easier usage
  const { firstName, lastName, email, phoneNumber, message } = formData;

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update form data based on input changes
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const sendEmail = (e) => {
    e.preventDefault();
    // Use emailjs to send form data to the specified service and template
    emailjs
      .sendForm(
        "service_i5x4w2r",
        "template_ebafout",
        e.target,
        "hL-eGHsw3g7UccNP5"
      )
      .then(
        // Handle success response
        (result) => {
          console.log(result.text);
          // Display success message to the user
          alert("Message sent successfully!");
        },
        // Handle error response
        (error) => {
          console.log(error.text);
          // Display error message to the user
          alert("Error sending message. Please try again later.");
        }
      );
    // Reset the form after submission
    resetForm();
  };

  // Reset form data to initial state
  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  // Render the FormContactUs component JSX
  return (
    <div className={styles.container}>
      {/* Container for content and form */}
      <div className={styles.container1}>
        {/* Heading and introductory content */}
        <h1 className={styles.heading}>DON'T WAIT A DAY LONGER!</h1>
        <p className={styles.content}>
          If you are serious about becoming confident in your own skin,
          overcoming your insecurities and achieving your dream body, then get
          in touch today. There are no tied-in contracts or upfront commitments,
          so sign-up now. We cannot wait to support your journey - to becoming
          the best version of you.
        </p>
      </div>
      <div className={styles.container2}>
        {/* Form for user input */}
        <form onSubmit={sendEmail} action="#" method="post">
          <div className={styles["form-group"]}>
            {/* First and last name input fields */}
            <div className={styles["inline-input-group"]}>
              <div className={styles["label-input-group"]}>
                <input
                  className={styles.formInputs}
                  type="text"
                  id="First_Name"
                  name="firstName"
                  placeholder="Enter your First name"
                  value={firstName}
                  onChange={handleChange}
                />
              </div>
              <div className={styles["label-input-group"]}>
                <input
                  className={styles.formInputs}
                  type="text"
                  id="Last_Name"
                  name="lastName"
                  placeholder="Enter your Last name"
                  value={lastName}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className={styles["form-group"]}>
            {/* Email and phone number input fields */}
            <div className={styles["inline-input-group"]}>
              <div className={styles["label-input-group"]}>
                <input
                  className={styles.formInputs}
                  type="email"
                  id="Email"
                  name="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles["label-input-group"]}>
                <input
                  className={styles.formInputs}
                  type="text"
                  id="Phone_number"
                  name="phoneNumber"
                  placeholder="Enter your Phone Number"
                  value={phoneNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
          <div className={styles["form-group"]}>
            {/* Message textarea and submit button */}
            <div className={styles["label-input-group"]}>
              <textarea
                className={styles.formInputs}
                id="Message"
                name="message"
                placeholder="Your Message"
                value={message}
                onChange={handleChange}
              />
              <button type="submit" className={styles.btn}>
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

// Export the FormContactUs component for use in other files
export default FormContactUs;
