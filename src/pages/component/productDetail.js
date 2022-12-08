import { useState ,useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import Dashboard from "./dashboard";


const ProductDetail =()=>{

    const[productData,setProductData]= useState( {
        "id": 2,
        "name": "SampleeData",
        "price": "50000",
        "created_at": "2022-10-11T04:47:08.000000Z",
        "updated_at": "2022-10-11T04:47:08.000000Z"
      });

     const {product_id} = useParams(); 

    const fetchDataRead = async ()=>{
        const url=`https://test.employee.tokoweb.xyz/api/product/show?product_id=${product_id}`;
        const response = await fetch(url);
        var data = await response.json();
        setProductData(data);
        } 
    
        useEffect(()=>{
          fetchDataRead();
        },[])
    
        console.log('product id ::: '+ product_id) 

    return(
        <div className="App">
           
            <div className="home-data">
                <div>Product detail </div>
                <div>{productData.id}</div>
                <div>{productData.name}</div>
                <div>{productData.price}</div>
                <div>{productData.created_at}</div>
                <div>{productData.updated_at}</div>
                <Link to={`/update/product/${productData.id}}`}>
                <div>Update</div>
                </Link>
                
                <Link to={`/delete/product/${productData.id}}`}>
                <div>Delete</div>
                </Link>
            </div>


        </div>
    )
}

export default ProductDetail;