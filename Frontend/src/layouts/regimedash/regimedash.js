// Importing necessary components, styles, and libraries from React, CSS module, and Axios
import React, { useState, useEffect } from "react";
import styles from "./regimedash.module.css";
import axios from "axios";
import { fetchRegime } from "../../db/regimeData";
import { RegimeModal } from '../../components/RegimePlanModal/RegimePlanModal'

// Functional component for rendering the Regimedash section
function Regimedash() {
  // State variables to manage regime plan data, form fields, selected item, image file, modal state
  const [items, setItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newImageFile, setNewImageFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Function to reset form fields
  const resetFormFields = () => {
    setNewName("");
    setNewDescription("");
    setNewImageFile(null);
    setSelectedItemId(null);
  };

  // Function to handle regime plan edit
  const handleEdit = (item) => {
    setSelectedItemId(item._id);
    setNewName(item.name);
    setNewDescription(item.description);
  };

  // Function to handle regime plan update
  const handleUpdate = async () => {
    if (selectedItemId) {
      const dataToSend = { id: selectedItemId, name: newName, description: newDescription }
      await axios
        .patch(`${process.env.REACT_APP_PATH}regime/update`, { regimeImage: newImageFile, ...dataToSend }, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          if (response.data.message === "Updated Successfully") {
            // If update is successful, update the items state with the updated data
            setItems((prevItems) =>
              prevItems.map((item) =>
                item._id === selectedItemId
                  ? { ...item, name: newName, description: newDescription, image: response.data.data.image }
                  : item
              )
            );
            // Reset form fields and selectedItemId after update
            resetFormFields();
          } else {
            // Handle the case when the backend API returns an error message
            console.error(response.data.message);
          }
        })
        .catch((error) => {
          // Handle errors if the PATCH request fails
          console.error("Error updating item:", error);
        });
    } else {
      console.error("No selected item to update");
    }
  };

  // Function to handle regime plan deletion
  const handleDelete = async (id) => {
    try {
      const response = await axios.delete(`${process.env.REACT_APP_PATH}regime/delete`, {
        data: { id: id }
      });

      if (response.data.message === "Deleted Successfully") {
        // If deletion is successful, filter out the deleted item from items state
        setItems((prevItems) => prevItems.filter((item) => item._id !== id));
        console.log("Regime plan deleted successfully");
      } else {
        console.log(`No regime plan found with the id ${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle regime plan addition
  const handleAdd = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  // Function to fetch regime plan data
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetchRegime();
        console.log('Fetched data:', response.data.data)
        if (response) {
          setItems(response.data.data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  // JSX structure for rendering the Regimedash component
  return (
    <div className={styles.regimeDashWrapper}>
      {isModalOpen ? <RegimeModal setIsModalOpen={setIsModalOpen} /> : ''}
      {/* Section title */}
      <h2 className={styles.h2}>Regime Plan</h2>
      <div className={styles.allItems}>
        {/* Table to display regime plan data */}
        <table className={styles.regimTable}>
          {/* Table header */}
          <thead className={styles.tableHeader}>
            <tr>
              <th className={styles.tableHeaderItem}>ID</th>
              <th className={styles.tableHeaderItem}>Name</th>
              <th className={styles.tableHeaderItem}>Description</th>
              <th className={styles.tableHeaderItem}>Image</th>
              <th className={styles.tableHeaderItem}>Actions</th>
            </tr>
          </thead>
          {/* Table body */}
          <tbody className={styles.tableContent}>
            {items.map((item) => (
              <tr key={item._id}>
                <td className={styles.tableContent}>{item._id}</td>
                <td className={styles.tableContent}>{item.name}</td>
                <td className={styles.tableContent}>{item.description}</td>
                <td className={styles.tableContent}>
                  <img src={item.image} alt={item.name} />
                </td>
                <td className={styles.buttonSection}>
                  {/* Edit and Delete buttons */}
                  <button className={`${styles.button} ${styles.buttonEdit}`} onClick={() => handleEdit(item)}>
                    Edit
                  </button>
                  <button className={`${styles.button} ${styles.buttonDelete}`} onClick={() => handleDelete(item._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Show update or add form based on selectedItemId */}
      {selectedItemId ? (
        // Update form
        <form className={styles.formcontainer}>
          <div className={styles.editForm}>
            <input
              type="text"
              placeholder="New Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className={styles.inputField}
            />
            <input
              type="text"
              placeholder="New Description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className={styles.inputField}
            />
            <input type="file" onChange={(e) => setNewImageFile(e.target.files[0])} className={styles.fileInput} />
            {/* Update and Cancel buttons */}
            <button className={`${styles.button} ${styles.add}`} onClick={handleUpdate}>Update</button>
            <button className={`${styles.button} ${styles.add}`} onClick={resetFormFields}>Cancel</button>
          </div>
        </form>
      ) : (
        // Add form
        <form className={styles.formcontainer}>
          <div className={styles.editForm}>
            <input
              type="text"
              placeholder="Name"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              className={styles.inputField}
            />
            <input
              type="text"
              placeholder="Description"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
              className={styles.inputField}
            />
            <input type="file" onChange={(e) => setNewImageFile(e.target.files[0])} className={styles.fileInput} />
            {/* Add button */}
            <button className={`${styles.button} ${styles.add}`} onClick={handleAdd}>Add</button>
          </div>
        </form>
      )}
    </div>
  );
}

// Exporting the Regimedash component as the default export
export default Regimedash;
