import { useParams } from "react-router-dom";
import Dashboard from "./dashboard";


const Delete =()=>{

const product_id= useParams();

console.log(product_id);
    return(
        <div className="App">
            <Dashboard/>
            Delete product with id 
        </div>
    )
}

export default Delete;