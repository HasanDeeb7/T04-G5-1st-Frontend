import { useState } from "react";
import style from "./RegimePlanModal.module.css";
import { addRegimeplan } from "../../db/regimeData";
import { toast } from "react-hot-toast";

// RegimeModal Component
export const RegimeModal = (props) => {
  // Destructuring props to get setIsModalOpen
  const { setIsModalOpen } = props;

  // State for form data
  const [dataToSend, setDataToSend] = useState({
    name: "",
    description: "",
    regimeImage: null,
  });

  // Utility function to update an object property
  function updateObject(name, value) {
    setDataToSend({ ...dataToSend, [name]: value });
  }

  // Event handler for input changes
  function handleInputChange(e) {
    updateObject(e.target.name, e.target.value);
  }

  // Event handler for form submission
  function handleSubmit(e) {
    e.preventDefault();
    console.log(dataToSend);

    // Check if any field is empty
    if (Object.values(dataToSend).some((item) => item === "" || item === null)) {
      toast.error("All fields are required");
    } else {
      try {
        // Call addRegimeplan to add the regime plan
        addRegimeplan(dataToSend);
        setIsModalOpen(false);
        toast.success("A New regime plan has been added");
      } catch (error) {
        console.log(error);
      }
    }
  }

  // JSX structure for the modal form
  return (
    <section className={style.modalForm}>
      <form onSubmit={handleSubmit}>
        <h3>Add Regime plan</h3>
        {/* Input for Regime Name */}
        <section className={style.inputContainer}>
          <input
            className={style.input}
            name="name"
            type="text"
            value={dataToSend.name}
            onChange={handleInputChange}
            placeholder="Regime Name"
          />
        </section>
        {/* Textarea for Description */}
        <section className={style.inputContainer}>
          <textarea
            className={style.textarea}
            name="description"
            type="text"
            placeholder="Description"
            width="200"
            height="500px"
            value={dataToSend.description}
            onChange={handleInputChange}
          />
        </section>
        {/* File input for Regime Image */}
        <section className={style.inputImageContainer}>
          <input
            type="file"
            name="regimeImage"
            className={style.fileInput}
            onChange={(e) =>
              setDataToSend({ ...dataToSend, regimeImage: e.target.files[0] })
            }
          />
        </section>
        {/* Buttons for Cancel and Submit */}
        <section className={style.btnContainer}>
          <button
            type="button"
            className={style.cancelBtn}
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={style.submitBtn}
            onClick={handleSubmit}
          >
            Submit
          </button>
        </section>
      </form>
    </section>
  );
};
