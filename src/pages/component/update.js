import { useEffect, useState } from "react";
import Dashboard from "./dashboard";
import axios from "axios";
import { useParams } from "react-router-dom";


const Update =()=>{
    const [name,setName]= useState('');
    const [price,setPrice]= useState('');
    const [productId,setProductId]= useState('');
    const [productData,setProductData]= useState(
      {
        "id": 4,
        "name": "SampleeData",
        "price": "50000",
        "created_at": "2022-10-11T04:47:08.000000Z",
        "updated_at": "2022-10-11T04:47:08.000000Z"
      }
    );

    const {product_id} = useParams(); 
    //console.log(product_id);

    //fetch product before update
    const fetchProductDetail =async ()=>{
      const url=`https://test.employee.tokoweb.xyz/api/product/show?product_id=${product_id}`;
      const response = await fetch(url);
      var data = await response.json();
      setProductData(data);
      } 

    const updateProduct=()=>{
        axios({
            method: "POST",
            data: {
              name: name,
              price: price,
             product_id : productId
            },
            withCredentials: true,
            url: "https://test.employee.tokoweb.xyz/api/product/update",
          }).then((res) => {
            alert('product created!')
          })
          .catch((err)=>{
            console.log(err);
          })
          ;
    }

    useEffect(()=>{
      fetchProductDetail()
    },[])

    return(
        <div className="App">
            <Dashboard/>
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