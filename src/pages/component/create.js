import { useState } from "react";
import Dashboard from "./dashboard";
import axios from "axios";
import { useHistory } from "react-router-dom";


const Create =(props)=>{

    const [name,setName]= useState('');
    const [price,setPrice]= useState('');

    let history = useHistory();

    const createProduct=()=>{
      const bearer ='Bearer ' + (props.currentUser).token ;
      const article = { 
        name : name,
        price : price
       };
      const headers = { 
          'Authorization': bearer,
         /*  'My-Custom-Header': 'foobar' */
      };
      axios.post('https://test.employee.tokoweb.xyz/api/product/store', article, { headers })
          .then(response => {
            alert(response.data.message);
            history.push("/");
          })
          .catch((err)=>{
            console.log(err)
          });
    }

    return(
        <div className="App">
            <Dashboard  currentUser={(props.currentUser).name} />
            <div className='page'>
        <div className='main'>
          <label>Name</label>
          <input type='text' value={name} onChange={(e)=> setName((e.target.value))}
          placeholder='name'>
          </input>
          <label>Price</label>
          <input type='number' placeholder='price'
           value={price} onChange={(e) => setPrice(e.target.value)}>

           </input>
          <button onClick={createProduct}>
            Create product
            </button>
        </div>
      </div>
        </div>
    )
}

export default Create;