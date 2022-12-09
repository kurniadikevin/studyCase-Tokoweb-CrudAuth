import { useHistory, useParams} from "react-router-dom";
import Dashboard from "./dashboard";
import axios from "axios";
import { useState,useEffect } from "react";
import { formatDate } from '../component/converter';


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
                <div id="product-detail-title">Product detail </div>
                <div>
                  <div>Product id :</div>
                  <div>{productData.id}</div>
                </div>
                <div>
                  <div>Name :</div>
                  <div> {productData.name}</div>
                </div>
               
               <div>
               <div>Price :</div>
               <div>{productData.price}</div>
               </div>
               
               <div>
               <div>Created at :  </div>
               <div> {productData.created_at ? formatDate(productData.created_at) : productData.created_at}</div>
               </div>
                
                <div>
                <div>Updated at : </div>
                <div>  {productData.updated_at ? formatDate(productData.updated_at) : productData.updated_at}</div>
                </div>
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