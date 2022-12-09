import { useState ,useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import Dashboard from "./dashboard";
import axios from "axios";
import { formatDate } from '../component/converter';


const ProductDetail =(props)=>{

    const[productData,setProductData]= useState( {
       name : 'loading...'
      });

     const {product_id} = useParams(); 

     const fetchDataRead =  ()=>{
        const bearer ='Bearer ' + (props.currentUser).token ;
        const headers = {
          'Authorization': bearer,
        };
        axios.get(`https://test.employee.tokoweb.xyz/api/product/show?product_id=${product_id}`, { headers })
          .then(response => {
            setProductData(response.data.data);
          });
        }
        
    
    useEffect(()=>{
          fetchDataRead();
        },[])
    
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
               
               <div>
               <Link to={`/update/product/${productData.id}}`} id='link-detail'>
                <div>Update</div>
                </Link>
                
                <Link to={`/delete/product/${productData.id}}`} id='link-detail'>
                <div>Delete</div>
                </Link>
               </div>
               
            </div>


        </div>
    )
}

export default ProductDetail;