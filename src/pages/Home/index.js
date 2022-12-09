import './style.css';
import { Link } from 'react-router-dom';
import Dashboard from '../component/dashboard';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { formatDate } from '../component/converter';


export function HomePage(props) {

  const [data,setData]= useState([
    {
     
      "name": "loading...",
     
    },
  ]);


  const fetchDataRead =  ()=>{
    const bearer ='Bearer ' + (props.currentUser).token ;
    const headers = {
      'Authorization': bearer,
    };
    axios.get('https://test.employee.tokoweb.xyz/api/product', { headers })
      .then(response => {
        setData(response.data.data)
      });
    }
    

    useEffect(()=>{
      fetchDataRead();
    },[])

  return (
    <div className="App">
     <Dashboard  currentUser={(props.currentUser).name} />
     <div className='home-cont'>
     {data.map((item)=>{
        return(
          <div className='home-data'>
           
            <div>
            <div>Product name:</div>
            <div> {item.name}</div>
            </div>

            <div>
            <div>Price :</div>
            <div>{item.price}</div>
            </div>

            <div>
            <div>Product id :</div>
            <div>{item.id}</div>
            </div>

            <div>
            <div>Created at :</div>
            <div>{item.created_at ? formatDate(item.created_at) : item.created_at}</div>
            </div>

            <div>
            <div>Updated at : </div>
            <div>{item.updated_at ? formatDate(item.updated_at) : item.updated_at}</div>
            </div>
            <div>
              <Link to={`productDetail/${item.id}`} id='product-link'>
              <div>Product detail</div>
              </Link>
            </div>
          </div>
        )
     })}
     </div>
    </div>
  );
}
