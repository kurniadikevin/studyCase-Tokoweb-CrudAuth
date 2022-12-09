import { useEffect, useState } from "react";
import Dashboard from "./dashboard";
import axios from "axios";
import { useParams, useHistory } from "react-router-dom";


const Update =(props)=>{
    const [name,setName]= useState('');
    const [price,setPrice]= useState('');
    const [productId,setProductId]= useState('');
    const [productData,setProductData]= useState({});

    let history = useHistory();
    const {product_id} = useParams(); 

    //fetch product before update
    const fetchProductDetail =  ()=>{
      const bearer ='Bearer ' + (props.currentUser).token ;
      const headers = {
        'Authorization': bearer,
      };
      axios.get(`https://test.employee.tokoweb.xyz/api/product/show?product_id=${product_id}`, { headers })
        .then(response => {
         // console.log(response.data.data);
          setProductData(response.data.data);
        });
      }

      const updateProduct=()=>{
        const bearer ='Bearer ' + (props.currentUser).token ;
        const article = { 
          name : name,
          price : price,
          product_id : product_id
         };
        const headers = { 
            'Authorization': bearer,
           /*  'My-Custom-Header': 'foobar' */
        };
        axios.post('https://test.employee.tokoweb.xyz/api/product/update', article, { headers })
            .then(response => {
              history.push("/");

              //alert box
              const alertBox = document.querySelector('.alert-box');
              alertBox.style.display='inline';
              alertBox.textContent=response.data.message;  
            })
            .catch((err)=>{
              console.log(err)
            });
      }

    useEffect(()=>{
      fetchProductDetail()
    },[])

    return(
        <div className="App">
            <Dashboard  currentUser={(props.currentUser).name}/>
            <div className='page'>
        <div className='main'>

          <label>Name</label>
          <input type='text' placeholder={productData.name} onChange={(e)=> setName((e.target.value))}
          >
          </input>

          <label>Price</label>
          <input type='number' 
           placeholder={productData.price} onChange={(e) => setPrice(e.target.value)}>
          </input>

         <div>Product Id : {productData.id}</div>

          <button onClick={updateProduct}>
            Update product
            </button>
        </div>
      </div>
        </div>
    )
}

export default Update;