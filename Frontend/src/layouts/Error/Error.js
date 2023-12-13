// Importing necessary dependencies and styles
import React from 'react'
import style from './Error.module.css'

// Functional component representing an error message
function Error(props) {
  // Destructuring the 'message' prop from the props object
  const { message } = props;

  // Rendering the error message inside a styled wrapper
  return (
    <div className={style.errorWrapper}>{message}</div>
  );
}

// Exporting the Error component
export default Error;
