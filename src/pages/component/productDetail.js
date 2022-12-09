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
           // console.log(response.data.data);
            setProductData(response.data.data);
          });
        }
        
    
        useEffect(()=>{
          fetchDataRead();
        },[])
    
      //  console.log('product id ::: '+ product_id) 

    return(
        <div className="App">

            <Dashboard  currentUser={(props.currentUser).name} />
           
            <div className="home-data" id="data-cont">
                <div>Product detail </div>
                <div>Product id :{productData.id}</div>
                <div>Name : {productData.name}</div>
                <div>Price :{productData.price}</div>
                <div>Created at :   {productData.created_at ? formatDate(productData.created_at) : productData.created_at}</div>
                <div>Updated at :   {productData.updated_at ? formatDate(productData.updated_at) : productData.updated_at}</div>
                <Link to={`/update/product/${productData.id}}`} id='link-detail'>
                <div>Update</div>
                </Link>
                
                <Link to={`/delete/product/${productData.id}}`} id='link-detail'>
                <div>Delete</div>
                </Link>
            </div>


        </div>
    )
}

export default ProductDetail;