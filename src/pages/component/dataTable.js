import { useEffect, useState } from "react"
import axios from "axios";
import Dashboard from "./dashboard";
import { Link } from "react-router-dom";
import './component.css';
import { formatDate } from '../component/converter';


const DataTable = (props)=>{

    const [data,setData]= useState([]);

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
        fetchDataRead()
    },[]) 

    return(
        <div className="App">
            <Dashboard currentUser={(props.currentUser).name}/>
          
            <table className="data-table">
            <th>Name</th>
            <th>Price</th>
            <th>Product Id</th>
            <th>Created at</th>       
            <th>Updated at</th>                       
           

            {data.map((item)=>{
                return(
                    <tr>
                        <td id="table-name">
                         <Link to={`productDetail/${item.id}`} id='table-detail'>
                        {item.name}
                        </Link>
                        </td>
                        <td>{item.price}</td>
                        <td>{item.id}</td>
                        <td>{item.created_at ? formatDate(item.created_at) : item.created_at}</td>
                        <td>{item.updated_at ? formatDate(item.updated_at) : item.updated_at}</td>
                    </tr>
                )
            })}
         </table>
        </div>
    )
}

export default DataTable;