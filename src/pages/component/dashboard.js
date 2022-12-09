import './component.css';
import { Link } from 'react-router-dom';

const Dashboard =(props)=>{

    const removeAlert =()=>{
        const alertBox= document.querySelector('.alert-box');
        alertBox.style.display='none'
    }


    return(
        <div className="dashboard">
            <div className='app-title'>CRUD and Authentication</div>
            <div className='dash-panel'>
                <Link to='/' id='dash-link'>
                    <div>Home</div>
                </Link>
                <Link to='/data-table' id='dash-link'>
                    <div>Data Table</div>
                </Link>
                <Link to ='/create' id='dash-link'>
                <div>Create</div>
                </Link>
                <Link to='/login' id='dash-link'>
                <div>Log in/out</div>
                </Link>
               
                <div id='currentUser'>{props.currentUser ? props.currentUser : 'Not logged in'}</div>
            </div>
            <div className='alert-box' onClick={removeAlert}>
            message
            </div>
        </div>
    )
}

export default Dashboard;