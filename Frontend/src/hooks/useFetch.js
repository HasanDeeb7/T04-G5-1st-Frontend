import { useState, useEffect } from "react"; 
import axios from "axios";



export const useFetch = (url) => {
     const [data, setData] = useState(null); 
     const [isPending, setIsPending] = useState(false); 
     const [error, setError] = useState(null); 
     useEffect(() => {
         const fetchData = async () => { 
            setIsPending(true); 
            let REACT_APP_PATH = process.env.REACT_APP_PATH;
            await axios.get(`${process.env.REACT_APP_PATH}${url}`)
            .then(response =>{
                setData(response.data);
                setError(null);
            })
            .catch(error =>{
                setError(error);
                setData([])
            })
            .finally(setIsPending(false))

            }
            
          fetchData();
            }, [url]);
         return {data , isPending , error}  
         }
         


