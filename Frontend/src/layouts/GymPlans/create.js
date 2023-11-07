// return(
//     <div className='d-flex w-90 vh-0 justify-content align-items-center bg-light' >
//       <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
//         <h1>Add a Gym Plan</h1>
//         <form>
//           <div className='mb-2'>
//             <label htmlFor="title">Title:</label>
//             <input type="text" title='title' className='formcontrol' placeholder="Enter a title" onChange={e => setValues({...values, title: e.target.value})}></input>
//           </div>
//           <div className='mb-2'>
//           <label htmlFor="price">Price:</label>
//             <input type="number" price='price' className='formcontrol' placeholder="Enter a price" onChange={e => setValues({...values, price: e.target.value})}></input>
//           </div>
//           <div className='mb-3'> 
//           <label htmlFor="feature">Feature:</label>
//             <input type="text" feature='feature' className='formcontrol' placeholder="Enter a feature" onChange={e => setValues({...values, feature: e.target.value})}></input>
//           </div>
//           <button className='btn btn-success'>Submit</button>
//           {/* <Link to="/" className='btn btn-primary ms-3'>Back</Link> */}
//         </form>
//       </div>
//     </div>
//   )