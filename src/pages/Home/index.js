import logo from '../../logo.svg';
import './style.css';
import { Link } from 'react-router-dom';
import Dashboard from '../component/dashboard';
import { useEffect, useState } from 'react';


export function HomePage(props) {

  const [data,setData]= useState([
    {
      "id": 2,
      "name": "Kursi",
      "price": "50000",
      "created_at": "2022-10-11T04:47:08.000000Z",
      "updated_at": "2022-10-11T04:47:08.000000Z"
    },
    {
      "id": 1,
      "name": "Meja",
      "price": "100000",
      "created_at": "2022-10-11T04:47:08.000000Z",
      "updated_at": "2022-10-11T04:47:08.000000Z"
    }
  ]);

  const fetchDataRead = async ()=>{
    const url=`https://test.employee.tokoweb.xyz/api/product`;
    const response = await fetch(url);
    var data = await response.json();
    console.log(data)
    setData(data);
    }

    useEffect(()=>{
      fetchDataRead();
    },[])

  return (
    <div className="App">
     <Dashboard  currentUser={(props.currentUser).name} />
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
            <div>{item.created_at}</div>
            </div>

            <div>
            <div>Updated at : </div>
            <div>{item.updated_at}</div>
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
  );
}
