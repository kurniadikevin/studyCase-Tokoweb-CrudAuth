import './component.css';
import { Link } from 'react-router-dom';

const Dashboard =()=>{

    return(
        <div className="dashboard">
             <Link to='/' id='dash-link'>
                <div>Home</div>
            </Link>
            <Link to ='/create' id='dash-link'>
            <div>Create</div>
            </Link>
            <Link to='/login' id='dash-link'>
            <div>Login</div>
            </Link>
        </div>
    )
}

export default Dashboard;