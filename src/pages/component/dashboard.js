import './component.css';
import { Link } from 'react-router-dom';

const Dashboard =(props)=>{

    return(
        <div className="dashboard">
            <div className='app-title'>CRUD and Authetication</div>
            <div className='dash-panel'>
                <Link to='/' id='dash-link'>
                    <div>Home</div>
                </Link>
                <Link to ='/create' id='dash-link'>
                <div>Create</div>
                </Link>
                <Link to='/login' id='dash-link'>
                <div>Log in</div>
                </Link>
                <div>{props.currentUser ? props.currentUser : 'Not logged in'}</div>
            </div>
        </div>
    )
}

export default Dashboard;