import { useHistory, useParams} from "react-router-dom";
import Dashboard from "./dashboard";
import axios from "axios";
import { useState,useEffect } from "react";



const Delete =(props)=>{

    const[productData,setProductData]= useState( {
        name : 'loading...'
       });
 
      const {product_id} = useParams(); 
      let history = useHistory();
 
      const fetchDataRead =  ()=>{
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
         
      const deleteProduct =()=>{
        const bearer ='Bearer ' + (props.currentUser).token ;
        const headers = { 
            'Authorization': bearer,
        };
        axios.delete(`https://test.employee.tokoweb.xyz/api/product/${product_id}`, { headers })
            .then((response) =>{
                 console.log(response);
                 history.push("/");
                  //alert box
              const alertBox = document.querySelector('.alert-box');
              alertBox.style.display='inline';
              alertBox.textContent='Product deleted!';  
            });
      }
     
         useEffect(()=>{
           fetchDataRead();
         },[])

console.log(product_id);
    return(
        <div className="App">
            <Dashboard  currentUser={(props.currentUser).name} />
           
            <div className="home-data" id="data-cont">
                <div>Product detail </div>
                <div>Product id :{productData.id}</div>
                <div>Name : {productData.name}</div>
                <div>Price :{productData.price}</div>
                <div>Created at :{productData.created_at}</div>
                <div>Updated at : {productData.updated_at}</div>
                <div className="delete-cont">
                <div>Are you sure you want to delete this product?</div>
                <button onClick={deleteProduct}>Delete</button>
                <br/>
                </div>
            </div>
          
        </div>
    )
}

export default Delete;