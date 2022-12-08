import { useState } from "react";
import Dashboard from "./dashboard";
import axios from "axios";

const Create =(props)=>{

    const [name,setName]= useState('');
    const [price,setPrice]= useState('');

    const createProduct=()=>{
        axios({
            method: "POST",
            data: {
              name: name,
              price: price,
             
            },
            withCredentials: true,
            url: "https://test.employee.tokoweb.xyz/api/product/store",
          }).then((res) => {
            alert('product created!')
          })
          .catch((err)=>{
            console.log(err);
          })
          ;
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