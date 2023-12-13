// Importing necessary components and functions from React, CSS module, axios, and the trainingData module
import React, { useEffect, useState } from "react";
import style from "./PersonnalTrainingDash.module.css";
import axios from 'axios';
import { fetchTraining } from "../../db/trainingData";

// Functional component for managing personal training data in a dashboard
const PersonnalTrainingDash = () => {
  // State variables for personal training data, selected item, and form fields
  const [items, setItems] = useState([]);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [newName, setNewName] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newImageFile, setNewImageFile] = useState(null);

  // Function to reset form fields
  const resetFormFields = () => {
    setNewName("");
    setNewDescription("");
    setNewImageFile(null);
    setSelectedItemId(null);
  };

  // Function to handle the creation of a new personal training item
  const handleCreate = async () => {
    // Creating a FormData object to handle file upload
    const formData = new FormData();
    formData.append('name', newName);
    formData.append('description', newDescription);
    if (newImageFile)
      formData.append('image', newImageFile);
    
    try {
      // Making a POST request to add a new personal training item
      const response = await axios.post(`${process.env.REACT_APP_PATH}training/add`, formData, {
        headers: { 'Content-type': 'multipart/formData' }
      });

      // If the item is added successfully, update the state and reset form fields
      if (response.data.message === 'Personnal Training added successfully') {
        setItems((prevItems) => [...prevItems, response.data.data]);
        setNewName('');
        setNewDescription('');
        setNewImageFile(null);
      } else {
        console.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Function to handle the deletion of a personal training item
  const handleDelete = async (id) => {
    try {
      // Making a DELETE request to delete a personal training item
      const response = await axios.delete(`${process.env.REACT_APP_PATH}training/delete`, {
        data: { _id: id }
      });
    } catch (error) {
      console.log(error);
    }
  };

  // Function to handle the editing of a personal training item
  const handleEdit = async (item) => {
    setSelectedItemId(item._id);
    setNewName(item.name);
    setNewDescription(item.description);
    setNewImageFile(item.image);
  };

  // Function to handle the update of a personal training item
  const handleUpdate = async () => {
    console.log('before', selectedItemId);
    if (selectedItemId) {
      console.log('after', newImageFile);
      const dataToSend = { _id: selectedItemId, name: newName, description: newDescription, image: newImageFile };
      console.log(dataToSend);
      console.log(newImageFile);
      try {
        // Making a PATCH request to update a personal training item
        const response = await axios.patch(`${process.env.REACT_APP_PATH}training/update`, { image: newImageFile, ...dataToSend }, {
          headers: { 'Content-type': 'multipart: form-data' }
        });

        // If the update is successful, update the state, reset form fields, and clear selectedItemId
        if (response.data.message === 'Updated successfully') {
          setItems((prevItems) => prevItems.map((item) => item._id === selectedItemId ? { ...item, name: newName, description: newDescription, image: response.data.data.image }
            : item));
          setNewName("");
          setNewDescription("");
          setNewImageFile(null);
          setSelectedItemId(null);
        } else {
          console.error(response.data.message);
        }
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error('No such ID to be updated');
    }
  };

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetching personal training data and updating the state
        const response = await fetchTraining();
        if (response)
          setItems(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // JSX structure for rendering the PersonalTrainingDash component
  return (
    <section className={style.personnalTrainingContainer}>
      <section className={style.personalTrainingHeader}>
        <h2>Personal Trainings</h2>
      </section>
      <section className={style.personalTrainingFlex}>
        {/* Button to add a new personal training item */}
        <div className={style.addItem}>
          <button className={style.buttonAdd} onClick={handleCreate}>+Add</button>
        </div>

        {/* Table displaying personal training items */}
        <table className={style.personnalTrainingTable}>
          <thead className={style.tableHeader}>
            <tr>
              <th className={style.tableHeaderItem}>ID</th>
              <th className={style.tableHeaderItem}>Name</th>
              <th className={style.tableHeaderItem}>Description</th>
              <th className={style.tableHeaderItem}>Image</th>
              <th className={style.tableHeaderItem}>Operations</th>
            </tr>
          </thead>
          <tbody className={style.tableContent}>
            {items.map((item, i) => (
              <tr key={i}>
                <td>{item._id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.image}</td>
                <td className={style.buttonSection}>
                  {/* Buttons to edit and delete personal training items */}
                  <button className={style.buttonEdit} onClick={() => handleEdit(item)}>Edit</button>
                  <button className={style.buttonDelete} onClick={() => handleDelete(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Form section for updating or adding a personal training item */}
        {selectedItemId ? (
          <form className={style.formContainer}>
            <div className={style.editForm}>
              <input
                type="text"
                placeholder="New Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className={style.inputField}
              />
              <input
                type="text"
                placeholder="New Description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                className={style.inputField}
              />
              <input type="file" onChange={(e) => setNewImageFile(e.target.files[0])} className={style.fileInput} />
              <button className={`${style.button} ${style.add}`} onClick={handleUpdate}>Update</button>
              <button className={`${style.button} ${style.add}`} onClick={resetFormFields}>Cancel</button>
            </div>
          </form>
        ) : (
          <form className={style.formContainer}>
            <div className={style.editForm}>
              <input
                type="text"
                placeholder="Name"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                className={style.inputField}
              />
              <input
                type="text"
                placeholder="Description"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                className={style.inputField}
              />
              <input
                type="file"
                onChange={(e) => setNewImageFile(e.target.files[0])} className={style.fileInput} />
              <button className={`${style.button} ${style.add}`} onClick={handleCreate}>Add</button>
            </div>
          </form>
        )}
      </section>
    </section>
  );
}

// Exporting the PersonnalTrainingDash component as the default export
export default PersonnalTrainingDash;
